import React, { useState, useEffect, createContext } from "react";

export const PlanifyContext = createContext(null);

const PlanifyProvider = ({ children }) => {
  //the state and functions for the Quote component
  const [quote, setQuote] = useState("");
  let num = Math.floor(Math.random() * 1643);
  useEffect(() => {
    if (quote === "") {
      fetch("https://type.fit/api/quotes")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data[num]);
          setQuote(data[num]);
        });
    }
  }, []);

  // state and function for Journal component
  const [entry, setEntry] = useState("");
  const handleEntry = (e) => {
    setEntry(e.target.value);
  };

  //state and functions for todo edit
  const [edit, setEdit] = useState({ id: null, value: "" });
  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };
  // states and functions for Todo
  const [input, setInput] = useState(edit ? edit.value : "");
  const handleInputChange = (ev) => {
    setInput(ev.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    submitUpdate({
      id: Math.floor(Math.random() * 5000000),
      text: input,
    });

    setInput("");
  };
  //state and functions to list the todo items
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

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  // state and fn for the Gratitude part
  const [gratitude, setGratitude] = useState("");

  const handleGratitude = (e) => {
    setGratitude(e.target.value);
  };
  // states and functions for overall mood tracking
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
  // state and fetch for weather

  const [weather, setWeather] = useState(null);
  //   const key = process.env.REACT_APP_WEATHER_API_KEY;
  //   console.log(process.env.REACT_APP_WEATHER_API_KEY);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=waterloo&units=metric&appid=3dcd094d337af270bbe00edaf33ad547`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWeather(data);
      });
  }, []);
  return (
    <PlanifyContext.Provider
      value={{
        quote,
        setQuote,
        entry,
        setEntry,
        handleEntry,
        input,
        setInput,
        handleInputChange,
        handleSubmit,
        edit,
        setEdit,
        submitUpdate,
        todos,
        setTodos,
        addTodo,
        removeTodo,
        updateTodo,
        completeTodo,
        gratitude,
        setGratitude,
        handleGratitude,
        mood,
        setMood,
        labels,
        handleGreat,
        handleSad,
        handleUnwell,
        handleNeutral,
        handleSatisfied,
        handleFrustrated,
        handleBored,
        handleAngry,
        handleProductive,
        weather,
        setWeather,
      }}
    >
      {children}
    </PlanifyContext.Provider>
  );
};
export default PlanifyProvider;
