import React, {Dispatch, SetStateAction} from 'react'

export interface User {
  name: string;
  age: number;
  isStudent: boolean;
  job: string;
  remark?: string;
}

export interface SpanWrapperProps {
  user: User;
}

export interface Phrase {
  id: number;
  subject: string;
  title?: string
  text: string;
  address?: string;
}

export interface Todo {
  id: number;
  task: string;
  isDone: boolean;
}
export interface InputFieldProps {
  todo: string;
  setTodo: Dispatch<SetStateAction<string>>;
  addTodo: (e?: any) => void;
}

export interface ToDoListProps {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

export interface ToDoItemProps {
  todo: Todo;
}