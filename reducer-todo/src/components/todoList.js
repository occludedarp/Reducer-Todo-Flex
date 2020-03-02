import React, { useReducer, useState } from 'react';
import TodoForm from './todoForm'
import TodoItems from './todoItems'
import { todoReducer, todoInitialState } from '../reducers/todoReducer';

const TodoList = () => {

  const [itemName, setItemName] = useState(' ')

  const handleChanges = (e) => {
    setItemName(e.target.value) 
  }

  const addTodo = (todoName) => {
    dispatch({type: 'ADD_TODO', payload: todoName})
    setItemName(' ')
  }

  const clearCompleted = () => {
    dispatch({type: 'CLEAR_COMPLETED'})
  }

  const handleClick = (e) => {
    dispatch({type: 'TOGGLE_COMPLETED', payload: e.target.id})
  }

  const [state, dispatch] = useReducer(todoReducer, todoInitialState)

  return(
    <div style={{ "width": "400px"}}>
      <TodoForm itemName={itemName} handleChanges={handleChanges} addTodo={addTodo} clearCompleted={clearCompleted}/>
      <TodoItems handleClick={handleClick} todos={state.todos}/>
    </div>
  )
}

export default TodoList;