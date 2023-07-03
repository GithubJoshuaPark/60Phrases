import React, { useState } from "react";
import { ToDoItemProps } from "../types/consref";
import styled from "styled-components";

import CheckIcon from "@mui/icons-material/Check";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

const FormWrap = styled.form`
  width: 90%;
  background-color: rgba(162, 159, 154, 0.568);
  margin-top: 10px;
  padding: 20px;

  border: 1px solid #fff;
  border-radius: 20px;
  font-size: 1.2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

const DivForIconWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  color: whitesmoke;
`;

const SpanWrapForIdDone = styled.span<ToDoItemProps>`
  color: ${(props) => (props.todo.isDone ? "tomato" : "red")};
  font-weight: bolder;
`;

const ToDoItem: React.FC<ToDoItemProps> = ({ todo, todos, setTodos }) => {
  /**
   * find todo with id and toggle isDone
   * @param id
   */
  const handleDone = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  /**
   *
   * @param id
   */
  const editTodo = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: prompt("Edit Todo", todo.task) ?? "" };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  /**
   *
   * @param id
   */
  const deleteTodo = (id: number) => {
    // filter out todo with id
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <FormWrap>
      <span>{todo?.task}</span>
      <DivForIconWrap>
        <SpanWrapForIdDone todo={todo} todos={todos} setTodos={setTodos}>
          {todo.isDone ? (
            <CheckIcon onClick={() => handleDone(todo.id)} />
          ) : (
            <RadioButtonUncheckedIcon onClick={() => handleDone(todo.id)} />
          )}
        </SpanWrapForIdDone>
        <span>
          <EditIcon onClick={() => editTodo(todo.id)} />
        </span>
        <span>
          <DeleteForeverIcon onClick={() => deleteTodo(todo.id)} />
        </span>
      </DivForIconWrap>
    </FormWrap>
  );
};

export default ToDoItem;
