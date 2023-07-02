
import React from 'react'
import {ToDoListProps} from '../types/consref'
import ToDoItem from './ToDoItem'
import styled from 'styled-components'

const ToDoList : React.FC<ToDoListProps> = ({todos}) =>  {
  return (
    <>
      {
        todos?.length && todos.map((todo) => (
            <ToDoItem key={todo.id} todo={todo} />
        ))
      }
    </>
  )
}

export default ToDoList
