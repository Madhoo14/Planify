import React, { useState } from "react";
import TodoForm from "./TodoForm";
import styled from "styled-components";

//importing icons from react-icons
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({ id: null, value: "" });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  return todos.map((todo, index) => (
    <div key={index}>
      <Wrapper>
        {todo.isComplete ? (
          <Complete key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
          </Complete>
        ) : (
          <Incomplete key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
          </Incomplete>
        )}

        <Icons>
          <RiCloseCircleLine onClick={() => removeTodo(todo.id)} />
          <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} />
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
export default Todo;
