import React, { Component } from 'react'
import './App.css';
import TodoForm from './to-do-form'
import TodoList from './to-do-list'

class TodoApp extends Component {
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: []
    }
  }

  // Add todo handler
  addTodo = (val) => {
    const {data} = this.state
    // Assemble data
    const todo = {text: val, id: data.length}
    // Update data
    data.push(todo)
    // Update state
    this.setState({data: data})
  }

  // Handle remove
  handleRemove = (id) => {
    const {data} = this.state
    // Filter all todos except the one to be removed
    const remainder = data.filter((todo) => {
      if(todo.id !== id) return todo
    })
    // Update state with filter
    this.setState({data: remainder})
  }

  render(){
    const {data} = this.state
    return (
      <div>
        <h1 className="App-header">TO DO!</h1>
        <TodoForm addTodo={this.addTodo}/>
        <h2 className="form"> What I need to get done: </h2>
        <TodoList
          todos={data}
          remove={this.handleRemove}
        />
      </div>
    )
  }
}

export default TodoApp
