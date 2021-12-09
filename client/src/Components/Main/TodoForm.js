import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

function TodoForm({ edit, onSubmit }) {
  const [input, setInput] = useState(edit ? edit.value : "");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleInputChange = (ev) => {
    setInput(ev.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
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
            ref={inputRef}
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
            ref={inputRef}
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
  font-size: 20px;
  color: var(--coffee-brown);
  font-weight: bold;
  font-family: "Happy Monkey";
  background-color: #f4f3ee;
  border: solid 1px #bcb8b1;
`;
const TodoInput = styled.input`
  border-radius: 5px;
  height: 50px;
  width: 300px;
  font-family: "Happy Monkey";
  font-size: 20px;
  font-weight: bold;
  border: solid 1px #bcb8b1;
  margin-right: 10px;
  outline: none;
  color: #463f3a;
`;
export default TodoForm;
