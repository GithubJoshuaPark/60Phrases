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

const SpanWrapper = styled.span<SpanWrapperProps>`
  padding: 1rem;
  margin-top: 1rem;
  /* background-color: ${props => props.user.isStudent ? 'green' : 'red'}; */
  font-size: 3rem;
  color: whitesmoke;
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

    const newTodo: Todo = { id: maxId, task: todo, isDone: false };
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
      <SpanWrapper user={appUser}>{appUser?.remark}</SpanWrapper>
      <InputField todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <ToDoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
