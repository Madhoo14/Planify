import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import styled from "styled-components";

function TodoList({
  todos,
  setTodos,
  addTodo,
  removeTodo,
  completeTodo,
  updateTodo,
}) {
  return (
    <Container>
      <Head1> What's the plan today?</Head1>
      <TodoForm submitUpdate={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </Container>
  );
}

const Head1 = styled.h1`
  font-family: "Happy Monkey";
  margin: 32px 0;
  color: var(--coffee-brown);
  font-size: 24px;
`;

const Container = styled.div``;

export default TodoList;
