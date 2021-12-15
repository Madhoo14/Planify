import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SideBar from "../Main/SideBar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import GoalsList from "../Annuals/GoalsList";
import GoalQuotes from "../Annuals/GoalQuotes";
import GoalNotes from "../Annuals/GoalNotes";
import { useNavigate } from "react-router-dom";
const moment = require("moment");

const MonthlySpread = () => {
  const [goalMonth, setGoalMonth] = useState(moment().format("MMMYYYY"));

  const [date, setDate] = useState(null);
  const [goals, setGoals] = useState([]);
  const [monthlyGoal, setMonthlyGoal] = useState({});
  const navigate = useNavigate();

  const handleClick = (e) => {
    let temporary = moment(month.innerText).format("MMMYYYY");
    setGoalMonth(temporary);
    console.log(temporary);
  };
  const month = document.querySelector(".fc-toolbar-title");
  useEffect(() => {
    month?.addEventListener("click", handleClick);
    return () => {
      month?.removeEventListener("click", handleClick);
    };
  }, []);

  const addGoals = (goal) => {
    if (!goal.text || /^\s*$/.test(goal.text)) {
      return;
    }
    const newGoals = [goal, ...goals];
    setGoals(newGoals);
  };

  //function to remove goal items
  const removeGoals = (id) => {
    const removeArr = [...goals].filter((goal) => goal.id !== id);
    setGoals(removeArr);
  };

  const updateGoals = (goalId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setGoals((prev) =>
      prev.map((item) => (item.id === goalId ? newValue : item))
    );
  };
  const completeGoals = (id) => {
    let updatedGoals = goals.map((goal) => {
      if (goal.id === id) {
        goal.isComplete = !goal.isComplete;
      }
      return goal;
    });
    setGoals(updatedGoals);
  };

  //goal notes
  const [notes, setNotes] = useState("");
  const handleNotes = (e) => {
    setNotes(e.target.value);
  };
  const handleDateClick = (e) => {
    console.log(e.dateStr);
    let temp = moment(e.dateStr).format("DDMMMYYYY");
    console.log(temp);
    setDate(temp);
    navigate(`/dailyspread/${temp}`);
  };
  useEffect(() => {
    fetch(`/api/monthlygoals/${goalMonth}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, [goalMonth]);

  const handleGoalSubmit = () => {
    console.log(goalMonth);
    fetch(`/api/monthlygoals/${goalMonth}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _id: goalMonth,
        goals: goals,
        notes: notes,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status !== 200) {
          return <h1>Please try saving the page again</h1>;
        } else {
          navigate(`/monthlygoals/${goalMonth}`);
        }
      });
  };
  return (
    <Wrapper>
      <Top>
        <DateDiv></DateDiv>
        <Button onClick={handleGoalSubmit}>Save goals by clicking here</Button>
        <SideBar />
      </Top>
      <Mid>
        <GoalsList
          goals={goals}
          setGoals={setGoals}
          addGoals={addGoals}
          removeGoals={removeGoals}
          updateGoals={updateGoals}
          completeGoals={completeGoals}
        />
        <p>Please click on the month in the calendar to start setting goals</p>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          dateClick={(e) => handleDateClick(e)}
        />
      </Mid>
      <Bottom>
        <GoalNotes
          notes={notes}
          setNotes={setNotes}
          handleNotes={handleNotes}
        />
        <GoalQuotes />
      </Bottom>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 500px;
  width: 500px;
  margin: 20px;
  font-size: 20px;
  /* background-color: var(--background-transparent); */
`;
const Button = styled.button`
  height: 80px;
  width: 30%;
  /* margin: auto; */
  border-radius: 20px;
  background-color: var(--coffee-brown);
  font-size: 32px;
  color: var(--graceful-grey);
  font-weight: bold;
  cursor: pointer;
`;
const DateDiv = styled.div`
  height: 80px;
  width: 20%;

  border-radius: 10px;
  border: solid var(--coffee-brown);
  background-color: var(--coffee-brown);
  color: var(--graceful-grey);
  font-weight: bold;
  font-size: 32px;
  text-align: center;
`;
const Top = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
`;
const Mid = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-around;
`;
const Bottom = styled.div`
  width: fit-content;
  display: flex;
  justify-content: space-between;
`;
export default MonthlySpread;
