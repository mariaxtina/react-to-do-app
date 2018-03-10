import React from 'react'

const Todo = ({todo, remove}) => (
  <li className="to-do" onClick={()=>remove(todo.id)} >
    {todo.text}
  </li>
)

export default Todo
