import './App.css';
import React, { useState, useEffect } from 'react';
import { SpanWrapperProps, User, Todo } from './types/consref';
import styled from 'styled-components';
import InputField from './components/InputField';
import ToDoList from './components/ToDoList';

let appUser: User  = {
  name: '60 Phrases',
  age: 51,
  isStudent: false,
  job: 'Software Engineer',
  remark: '60 Phrases'
};

const SpanTitleWrapper = styled.span<SpanWrapperProps>`
  width: 90%;
  padding: 1rem;
  margin-top: 1rem;
  /* background-color: ${props => props.user.isStudent ? 'green' : 'red'}; */
  /* background-color: rgba(255, 160, 26, 0.433); */
  border-radius: 20px;
  font-size: 3rem;
  color: rgba(255, 160, 26, 0.9);
  text-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
`;

const App: React.FC = () =>  {

  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (e?: any): void => {
    if(e) {
      e.preventDefault();
    }

    let maxId = 0;
    if(todos[0]) {
      maxId = todos.reduce((max, todo) => (todo?.id >= max ? todo.id : max), todos[0].id);
      if(maxId !== undefined) {
        maxId =  maxId +1;
      } else {
        maxId = 1;
      }
    } else {
      maxId = 1;
    }

    const newTodo: Todo = { id: maxId, task: todo, isDone: false, isEdit: false };
    if(todo) {
      setTodos([...todos, newTodo]);
      setTodo('');
    }
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      {/* title */}
      <SpanTitleWrapper user={appUser}>{appUser?.remark}</SpanTitleWrapper>

      {/* input, search btn */}
      <InputField todo={todo} setTodo={setTodo} addTodo={addTodo} />

      {/* toDo list */}
      <ToDoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
