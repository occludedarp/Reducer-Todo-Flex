import React from 'react';
import TodoForm from './todoForm'
import TodoItems from './todoItems'

const TodoList = props => {
  return(
    <div>
      <TodoItems />
      <TodoForm />
    </div>
  )
}

export default TodoList;