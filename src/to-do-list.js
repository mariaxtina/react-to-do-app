import React from 'react'
import Todo from './to-do'

const TodoList = ({todos, remove}) => {
  // Map through the todos
  return todos.map((todo) => (
    <ul>
      <Todo todo={todo} key={todo.id} remove={remove} />
    </ul>
  ))
}

export default TodoList
