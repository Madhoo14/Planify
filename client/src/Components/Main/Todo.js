import React, { useState, useContext } from "react";
import TodoForm from "./TodoForm";
import styled from "styled-components";
import { PlanifyContext } from "../PlanifyContext";

//importing icons from react-icons
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({ id: null, value: "" });
  // const { edit, setEdit, submitUpdate } = useContext(PlanifyContext);
  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };
  if (edit.id) {
    return <TodoForm edit={edit} submitUpdate={submitUpdate} />;
  }
  // return todos?.map((todo, index) => (
  //   <div key={index}>
  //     <Wrapper>
  //       {todo.isComplete ? (
  //         <Complete key={todo.id} onClick={() => completeTodo(todo.id)}>
  //           {todo.text}
  //         </Complete>
  //       ) : (
  //         <Incomplete key={todo.id} onClick={() => completeTodo(todo.id)}>
  //           {todo.text}
  //         </Incomplete>
  //       )}
  //       <Icons>
  //         <RiCloseCircleLine onClick={() => removeTodo(todo.id)} />
  //         <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} />
  //       </Icons>
  //     </Wrapper>
  //   </div>
  // ));
  return todos
    ? todos.map((todo, index) => (
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
              <Button
                role="img"
                aria-label="remove"
                title="remove item"
                onClick={() => removeTodo(todo.id)}
              >
                <RiCloseCircleLine />
              </Button>
              <Button
                role="img"
                aria-aria-label="edit"
                title="edit item"
                onClick={() => setEdit({ id: todo.id, value: todo.text })}
              >
                <TiEdit />
              </Button>
            </Icons>
          </Wrapper>
        </div>
      ))
    : null;
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
  background-color: var(--bckgrnd-clr);
`;
const Button = styled.button`
  background: none;
  border: none;
  height: 64px;
  width: 64px;
  font-size: 40px;
  cursor: pointer;
  /* margin: 5px; */
  padding: 5px;
  align-items: center;
  color: var(--coffee-brown);
  &:hover {
    color: #ef476f;
  }
`;
export default Todo;
