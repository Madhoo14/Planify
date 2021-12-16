import React from "react";
import GoalsForm from "./GoalsForm";
import Goals from "./Goals";
import styled from "styled-components";

function GoalsList({
  goals,
  setGoals,
  addGoals,
  removeGoals,
  updateGoals,
  completeGoals,
}) {
  return (
    <div>
      <Head1> Set goals for the year</Head1>
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
