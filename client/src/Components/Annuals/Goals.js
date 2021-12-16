import React, { useState } from "react";
import GoalsForm from "./GoalsForm";
import styled from "styled-components";

//importing icons from react-icons
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function Goals({ goals, completeGoals, removeGoals, updateGoals }) {
  const [edit, setEdit] = useState({ id: null, value: "" });

  const submitUpdate = (value) => {
    updateGoals(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <GoalsForm edit={edit} onSubmit={submitUpdate} />;
  }
  return goals.map((goal, index) => (
    <div key={index}>
      <Wrapper>
        {goal.isComplete ? (
          <Complete key={goal.id} onClick={() => completeGoals(goal.id)}>
            {goal.text}
          </Complete>
        ) : (
          <Incomplete key={goal.id} onClick={() => completeGoals(goal.id)}>
            {goal.text}
          </Incomplete>
        )}

        <Icons>
          <Button
            role="img"
            aria-label="remove"
            title="remove goal"
            onClick={() => removeGoals(goal.id)}
          >
            <RiCloseCircleLine />
          </Button>
          <Button>
            <TiEdit
              role="img"
              aria-label="edit"
              title="edit goal"
              onClick={() => setEdit({ id: goal.id, value: goal.text })}
            />
          </Button>
        </Icons>
      </Wrapper>
    </div>
  ));
}

const Icons = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  margin: 5px;
`;

const Complete = styled.div`
  text-decoration: line-through;
  margin-right: 50px;
  opacity: 0.4;
`;

const Incomplete = styled.div`
  text-decoration: none;
  font-family: "Happy Monkey";
  font-size: 25px;
  margin-right: 50px;
  color: #463f3a;
  opacity: 1;
`;

const Button = styled.button`
  background: none;
  border: none;
  height: 64px;
  width: 64px;
  font-size: 32px;
  cursor: pointer;
  padding: 5px;
  align-items: center;
  color: var(--coffee-brown);
  &:hover {
    color: #ef476f;
  }
`;

const Wrapper = styled.div`
  font-family: "Happy Monkey";
  font-size: 25px;
  color: var(--coffee-brown);
  display: flex;
  margin: 5px 0;
  justify-content: space-between;
  border: solid 1px #bcb8b1;
  width: 470px;
  height: 60px;
  border-radius: 5px;
  background-color: var(--bckgrnd-clr);
`;

export default Goals;
