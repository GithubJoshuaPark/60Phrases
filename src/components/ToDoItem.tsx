import React from 'react'
import {ToDoItemProps} from '../types/consref'
import styled from 'styled-components'

import CheckIcon from '@mui/icons-material/Check';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



const DivWrap = styled.div`
  width: 90%;
  background-color: rgba(162, 159, 154, 0.568);
  margin-top: 10px;
  padding: 20px;

  border: 1px solid #fff;
  border-radius: 20px;
  font-size: 1.2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const IconWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  color: #fff;
`

const ToDoItem:React.FC<ToDoItemProps> = ({todo}) => {
  return (
    <>
      <DivWrap>
        <span>{todo.task}</span>
        <IconWrap>
          <span>{todo.isDone ? (<CheckIcon/>) : (<RadioButtonUncheckedIcon/>)}</span>
          <span><DeleteForeverIcon/></span>
        </IconWrap>
      </DivWrap>
    </>
  )
}

export default ToDoItem
