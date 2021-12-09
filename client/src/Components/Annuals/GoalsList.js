import React, { useState } from "react";
import GoalsForm from "./GoalsForm";
import Goals from "./Goals";
import styled from "styled-components";

function GoalsList() {
  const [goals, setGoals] = useState([]);

  //function to add todo items
  const addGoals = (goal) => {
    if (!goal.text || /^\s*$/.test(goal.text)) {
      return;
    }
    const newGoals = [goal, ...goals];
    setGoals(newGoals);
  };

  //function to remove todo items
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
  return (
    <div>
      <Head1> What's the plan today?</Head1>
      <GoalsForm onSubmit={addGoals} />
      <Goals
        goals={goals}
        completeGoals={completeGoals}
        removeGoals={removeGoals}
        updateGoals={updateGoals}
      />
    </div>
  );
}
const Head1 = styled.h1`
  font-family: "Happy Monkey";
  margin: 32px 0;
  color: var(--coffee-brown);
  font-size: 24px;
`;
export default GoalsList;
