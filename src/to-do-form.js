import React from 'react'
import './App.css'

const TodoForm = ({addTodo}) => {
  let input

  return (
    <div className="form">
      <input className="submit-input" ref={node => {
        input = node
      }} />
      <button className="submit" onClick={() => {
        addTodo(input.value);
        input.value = '';
      }}>
        +
      </button>
    </div>
  )
}

export default TodoForm
