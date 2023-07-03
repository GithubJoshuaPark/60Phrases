import React, {useRef} from 'react'
import styled from 'styled-components'
import {InputFieldProps} from '../types/consref'

const FormWrapper = styled.form`
  width: 90%;
  position: relative;

  display: flex;
  align-items: center;
`

const InputWrapper = styled.input`
  width: 100%;
  padding: 20px 30px;
  border-radius: 50px;
  border: none;
  font-size: 1.2rem;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);

  &:focus,
  &:hover {
    outline: none;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  }
`

const ButtonWrapper = styled.button`
  position: absolute;
  right: 0;
  background-color: #ff9f1a;
  padding: 20px 30px;

  border: none;
  font-size: 1.2rem;

  width: 50px;
  height: 50px;
  margin: 12px 8px;

  border-radius: 25px;
  cursor: pointer;

  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s ease-in-out;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);

  &:hover,
  &:focus {
    background-color: #ffbf69;
    outline: none;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  }
`

const InputField: React.FC<InputFieldProps> = ({todo, setTodo, addTodo}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <>
      <FormWrapper onSubmit={(e?:any) => {
        addTodo(e);
        inputRef.current?.blur(); // blur the input field after submitting
        inputRef.current?.focus(); // focus the input field after submitting
      }}>
        <InputWrapper ref={inputRef}
                      type="text" placeholder="Enter a task"
                      value={todo} onChange={(e: any) => setTodo(e.target.value)}/>
        <ButtonWrapper type="submit">Go</ButtonWrapper>
      </FormWrapper>
    </>
  )
}

export default InputField
