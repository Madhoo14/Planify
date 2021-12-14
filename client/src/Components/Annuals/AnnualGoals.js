import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import GoalsList from "./GoalsList";
import SideBar from "../Main/SideBar";
import GoalQuotes from "./GoalQuotes";
import GoalSetting from "./GoalSetting";
import GoalNotes from "./GoalNotes";
import PickYear from "./PickYear";
const moment = require("moment");
const AnnualGoals = () => {
  const [goals, setGoals] = useState([]);
  const [annualGoal, setAnnualGoal] = useState({});
  //to pick an year to set the goal for

  const [goalYear, setGoalYear] = useState(useParams().year);
  const navigate = useNavigate();
  let years = [];
  for (let i = 2020; i <= 2050; i++) {
    years.push(i);
  }
  const handleYearChange = (e) => {
    console.log("Hello");
    setGoalYear(e.target.value);
  };
  console.log(goalYear);
  // const year = moment(dateId).format("YYYY");
  //function to add goal items
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
  console.log(goals);
  //goal notes
  const [notes, setNotes] = useState("");
  const handleNotes = (e) => {
    setNotes(e.target.value);
  };

  console.log(notes);
  console.log(goalYear);
  //api to get annual goals if existing
  useEffect(() => {
    fetch(`/api/annualgoals/${goalYear}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setGoals(data.data.goals);
        setNotes(data.data.notes);
      });
  }, [goalYear]);

  //api to post the annual goals to the db
  const handleGoalSubmit = () => {
    console.log("iam in");
    fetch(`api/postannualgoals/${goalYear}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _id: goalYear,
        goals: goals,
        notes: notes,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status !== 200) {
          return <h1>please try saving the page again</h1>;
        } else {
          console.log("Navigating back");
          navigate(`/annualgoals/${goalYear}`);
        }
      });
  };

  return (
    <Container>
      <Button onClick={handleGoalSubmit}>Save goals by clicking here</Button>
      <PickYear
        goalYear={goalYear}
        years={years}
        setGoalYear={setGoalYear}
        handleYearChange={handleYearChange}
      />
      <TopContent>
        <GoalsList
          goals={goals}
          setGoals={setGoals}
          addGoals={addGoals}
          removeGoals={removeGoals}
          updateGoals={updateGoals}
          completeGoals={completeGoals}
        />
        <GoalSetting />
        <SideBar />
      </TopContent>
      <BottomContent>
        <GoalNotes
          notes={notes}
          setNotes={setNotes}
          handleNotes={handleNotes}
        />
        <GoalQuotes />
      </BottomContent>
    </Container>
  );
};
const Container = styled.div`
  /* background-color: var(--almost-white); */
  width: 100%;
  min-height: calc(100vh -200px);
  margin-left: auto;
  margin-right: auto;
`;
const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BottomContent = styled.div`
  display: flex;
  justify-content: space-between;
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
export default AnnualGoals;
