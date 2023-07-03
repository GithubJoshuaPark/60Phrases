import React from "react";
import { ToDoListProps } from "../types/consref";
import ToDoItem from "./ToDoItem";
import styled from "styled-components";

const WrapDivForToDoItem = styled.div`
`

const ToDoList: React.FC<ToDoListProps> = ({ todos, setTodos }) => {
  return (
    <WrapDivForToDoItem>
      {
        todos?.length &&
        todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))
      }
    </WrapDivForToDoItem>
  );
};

export default ToDoList;
