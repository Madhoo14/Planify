import React, { useState } from "react";
import styled from "styled-components";

function GoalsForm({ edit, onSubmit }) {
  const [input, setInput] = useState(edit ? edit.value : "");

  const handleInputChange = (ev) => {
    setInput(ev.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: Math.floor(Math.random() * 7000000),
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
            placeholder="Add a goal item"
            value={input}
            name="text"
            onChange={handleInputChange}
          />
          <TodoButton>Update goal</TodoButton>
        </>
      ) : (
        <>
          <TodoInput
            type="text"
            placeholder="Add a goal item"
            value={input}
            name="text"
            onChange={handleInputChange}
          />
          <TodoButton>Add Goal</TodoButton>
        </>
      )}
    </Form>
  );
}

const Form = styled.form`
  font-family: "Happy Monkey";
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
`;

const TodoButton = styled.button`
  border-radius: 10px;
  box-sizing: content-box;
  height: 50px;
  width: 159px;
  padding: 0%;
  font-size: 25px;
  color: var(--coffee-brown);
  font-weight: bold;
  font-family: "Happy Monkey";
  &:hover {
    color: #ef476f;
  }
  background-color: var(--bckgrnd-clr);
  border: solid 1px var(--almost-white);
`;

const TodoInput = styled.input`
  border-radius: 10px;
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
  background-color: var(--bckgrnd-clr);
`;

export default GoalsForm;
