import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import styled from "styled-components";
import SideBar from "../Main/SideBar";
import Journal from "./Journal";
import TodoList from "../Main/TodoList";
import OverallMood from "./OverallMood";
import Quotes from "./Quotes";
import Gratitude from "./Gratitude";
import Weather from "./Weather";

function DailySpread() {
  const navigate = useNavigate();
  const [dailyEntry, setDailyEntry] = useState(null);

  //lifting the states to be able to use here for posting onSubmit
  //journal
  const [entry, setEntry] = useState(null);
  const handleEntry = (e) => {
    setEntry(e.target.value);
  };

  //quotes
  const [quote, setQuote] = useState("");
  let num = Math.floor(Math.random() * 1643);
  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data[num]);
        setQuote(data[num]);
      });
  };

  //Emojis- overallMood
  const [mood, setMood] = useState("");
  const labels = [
    "great",
    "sad",
    "unwell",
    "neutral",
    "satisfied",
    "frustrated",
    "bored",
    "angry",
    "productive",
  ];
  // console.log(mood);
  // functions for Button onClick for different buttons
  const handleClickedElement = (ev) => {
    setMood(ev.currentTarget.name);
  };

  //weather
  const [weather, setWeather] = useState(null);
  const getWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=waterloo&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather({
          city: `${data.name}, ${data.sys.country}`,
          max: data.main.temp_max,
          min: data.main.temp_min,
          description: data.weather[0].description,
        });
      });
  };

  //gratitude
  const [gratitude, setGratitude] = useState("");

  const handleGratitude = (e) => {
    setGratitude(e.target.value);
  };

  // TodoList
  const [todos, setTodos] = useState(null);
  //function to add todo items
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };
  //function to remove todo items
  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };
  //function to updateTodos
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  //function to mark list item complete
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // call api to get data for this date
  const { dateId } = useParams();
  const updateData = () => {
    fetch(`/dailyspread/${dateId}`)
      .then((res) => res.json())
      .then((data) => {
        setDailyEntry(data.data);
        setEntry(data.data.journal);
        setMood(data.data.overallMood);
        setTodos(data.data.todo);
        setQuote(data.data.quote);
        setWeather(data.data.weather);
        setGratitude(data.data.gratitude);
        console.log(data);
        if (data.data.quote.text === "") {
          getQuote();
        }
        if (data.data.weather.city === "") {
          getWeather();
        }
      });
  };
  useEffect(() => {
    updateData();
  }, []);

  const handleEntrySubmit = () => {
    // api to post to the dailyspread page with the date
    fetch("/api/postdailyspread", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _id: dateId,
        todo: todos,
        journal: entry,
        quote: { text: quote.text, author: quote.author },
        overallMood: mood,
        gratitude: gratitude,
        weather,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status !== 200) {
          return <h1>please try saving the page again</h1>;
        } else {
          console.log("Navigating back");
          navigate(`/dailyspread/${dateId}`);
        }
      });
    console.log(dailyEntry._id);
  };

  return dailyEntry ? (
    <Main>
      <TopPage>
        <DateDiv>{dailyEntry?._id}</DateDiv>
        <Button onClick={handleEntrySubmit} type="submit">
          Save your entry for today
        </Button>
        <Weather weather={weather} setWeather={setWeather} />
      </TopPage>
      <MidPage>
        <TodoList
          todos={todos}
          setTodos={setTodos}
          addTodo={addTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
          completeTodo={completeTodo}
        />

        <Journal entry={entry} setEntry={setEntry} handleEntry={handleEntry} />
        <SideBar />
      </MidPage>
      <BottomPage>
        <Section>
          <OverallMood
            mood={mood}
            setMood={setMood}
            handleClickedElement={handleClickedElement}
            labels={labels}
          />
          <Gratitude
            gratitude={gratitude}
            setGratitude={setGratitude}
            handleGratitude={handleGratitude}
          />
        </Section>
        <Quotes quote={quote} setQuote={setQuote} />
      </BottomPage>
    </Main>
  ) : null;
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const BottomPage = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

const Section = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Button = styled.button`
  height: 80px;
  width: 20%;
  border: solid var(--coffee-brown);
  border-radius: 20px;
  background-color: var(--light-brown);
  font-size: 28px;
  color: var(--almost-white);
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #ef476f;
  }
`;

const TopPage = styled.div`
  display: flex;
  height: 10vh;
  width: 100%;
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
`;

const DateDiv = styled.div`
  height: 80px;
  width: 20%;
  border-radius: 10px;
  border: solid var(--coffee-brown);
  background-color: var(--light-brown);
  color: var(--almost-white);
  font-weight: bold;
  font-size: 28px;
  text-align: center;
  padding-top: 15px;
`;

const MidPage = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 45vh;
  justify-content: space-around;
`;

export default DailySpread;
