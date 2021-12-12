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
            title="remove todo"
            onClick={() => removeGoals(goal.id)}
          >
            <RiCloseCircleLine />
          </Button>

          <TiEdit
            role="img"
            aria-label="edit"
            title="edit todo"
            onClick={() => setEdit({ id: goal.id, value: goal.text })}
          />
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
  border: solid;
  height: 75px;
  width: 75px;
  font-size: 60px;
  cursor: pointer;
  margin: 10px;
  padding: 5px;
  align-items: center;
`;
const Wrapper = styled.div`
  font-family: "Happy Monkey";
  font-size: 25px;
  color: #463f3a;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  border: solid 1px #bcb8b1;
  width: 470px;
  height: 60px;
  border-radius: 5px;
  background-color: #f4f3ee;
`;
export default Goals;
