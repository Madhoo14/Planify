import React, { useState, useRef, useEffect, useContext } from "react";
import styled from "styled-components";
import { PlanifyContext } from "../PlanifyContext";

function TodoForm({ edit, submitUpdate }) {
  // const {
  //   input,
  //   setInput,
  //   handleInputChange,
  //   handleSubmit,
  //   edit,
  //   setEdit,
  //   submitUpdate,
  // } = useContext(PlanifyContext);
  const [input, setInput] = useState(edit ? edit.value : "");
  // const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // });

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

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      {edit ? (
        <>
          <TodoInput
            type="text"
            placeholder="Add a todo item"
            value={input}
            name="text"
            onChange={handleInputChange}
            // ref={inputRef}
          />
          <TodoButton>Update item</TodoButton>
        </>
      ) : (
        <>
          <TodoInput
            type="text"
            placeholder="Add a todo item"
            value={input}
            name="text"
            onChange={handleInputChange}
            // ref={inputRef}
          />
          <TodoButton>Add Todo</TodoButton>
        </>
      )}
    </Form>
  );
}

const Form = styled.form`
  font-family: "Happy Monkey";
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 32px;
`;
const TodoButton = styled.button`
  border-radius: 5px;
  box-sizing: content-box;
  height: 50px;
  width: 150px;
  padding: 0%;
  font-size: 25px;
  color: var(--coffee-brown);
  font-weight: bold;
  font-family: "Happy Monkey";
  background-color: rgb(70, 63, 58, 0.2);
  border: solid 1px var(--almost-white);
`;
const TodoInput = styled.input`
  border-radius: 5px;
  height: 52.67px;
  padding: 0%;
  width: 300px;
  font-family: "Happy Monkey";
  font-size: 25px;
  font-weight: bold;
  border: solid 1px var(--almost-white);
  margin-right: 10px;
  outline: none;
  color: #463f3a;
  background-color: rgb(70, 63, 58, 0.2);
`;
export default TodoForm;
