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
import { PlanifyContext } from "../PlanifyContext";
import { WatchLater } from "@material-ui/icons";

function DailySpread() {
  const navigate = useNavigate();
  const [dailyEntry, setDailyEntry] = useState(null);
  // const {
  //   quote,
  //   setQuote,
  //   entry,
  //   setEntry,
  //   handleEntry,
  //   input,
  //   setInput,
  //   handleInputChange,
  //   handleSubmit,
  //   edit,
  //   setEdit,
  //   submitUpdate,
  //   todos,
  //   setTodos,
  //   addTodo,
  //   removeTodo,
  //   updateTodo,
  //   completeTodo,
  //   gratitude,
  //   setGratitude,
  //   handleGratitude,
  //   mood,
  //   setMood,
  //   labels,
  //   handleGreat,
  //   handleSad,
  //   handleUnwell,
  //   handleNeutral,
  //   handleSatisfied,
  //   handleFrustrated,
  //   handleBored,
  //   handleAngry,
  //   handleProductive,
  //   weather,
  //   setWeather,
  // } = useContext(PlanifyContext);
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

  const handleGreat = () => {
    setMood(labels[0]);
  };
  const handleSad = () => {
    setMood(labels[1]);
  };
  const handleUnwell = () => {
    setMood(labels[2]);
  };
  const handleNeutral = () => {
    setMood(labels[3]);
  };
  const handleSatisfied = () => {
    setMood(labels[4]);
  };
  const handleFrustrated = () => {
    setMood(labels[5]);
  };
  const handleBored = () => {
    setMood(labels[6]);
  };
  const handleAngry = () => {
    setMood(labels[7]);
  };
  const handleProductive = () => {
    setMood(labels[8]);
  };

  //weather
  const [weather, setWeather] = useState(null);
  const getWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=waterloo&units=metric&appid=3dcd094d337af270bbe00edaf33ad547`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather({
          city: `${data.name}, ${data.sys.country}`,
          max: data.main.temp_max,
          min: data.main.temp_min,
          description: data.weather[0].description,
        });
        console.log(data);
        // setWeather(data);
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
        <Weather weather={weather} setWeather={setWeather} />
        <Button onClick={handleEntrySubmit} type="submit">
          Save your entry for today
        </Button>
      </TopPage>
      <MidPage>
        <TodoList
          style={{ flexGrow: "1" }}
          todos={todos}
          setTodos={setTodos}
          addTodo={addTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
          completeTodo={completeTodo}
        />

        <Journal
          style={{ flexGrow: "2" }}
          entry={entry}
          setEntry={setEntry}
          handleEntry={handleEntry}
        />
        <SideBar style={{ flexGrow: "1" }} />
      </MidPage>
      <BottomPage>
        <OverallMood
          mood={mood}
          setMood={setMood}
          handleGreat={handleGreat}
          handleSad={handleSad}
          handleFrustrated={handleFrustrated}
          handleAngry={handleAngry}
          handleBored={handleBored}
          handleNeutral={handleNeutral}
          handleSatisfied={handleSatisfied}
          handleUnwell={handleUnwell}
          handleProductive={handleProductive}
          labels={labels}
        />
        <Gratitude
          gratitude={gratitude}
          setGratitude={setGratitude}
          handleGratitude={handleGratitude}
        />
        <Quotes quote={quote} setQuote={setQuote} />
      </BottomPage>
    </Main>
  ) : null;
}

const Main = styled.main`
  /* width: 100vw;
      min-height: calc(100vh - 200px); */
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  flex-grow: 1;
`;
const BottomPage = styled.div`
  display: flex;
  justify-content: space-between;
  border: solid;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const Button = styled.button`
  height: 80px;
  width: 50%;
  margin: auto;

  border-radius: 20px;
  background-color: var(--coffee-brown);
  font-size: 32px;
  color: var(--graceful-grey);
  font-weight: bold;
  cursor: pointer;
`;
const TopPage = styled.div`
  display: flex;
  flex-direction: row;
  /* border: solid green; */
  justify-content: space-between;
`;
const DateDiv = styled.div`
  height: 80px;
  width: 25%;
  border-radius: 10px;
  border: solid var(--coffee-brown);
  background-color: var(--coffee-brown);
  color: var(--graceful-grey);
  font-weight: bold;
  font-size: 32px;
  text-align: center;
`;
const MidPage = styled.div`
  display: flex;
  flex-direction: row;
  /* border: solid maroon; */
  justify-content: space-between;
`;
export default DailySpread;
