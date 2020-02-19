import React, { useReducer, useState } from 'react';
import { todoReducer, todoInitialState } from '../reducers/todoReducer';


const TodoForm = props => {



  return(
    <div>
      <form onSubmit={(e) => e.preventDefault()}> 
        <input 
          name="itemName"
          type="text"
          value={props.itemName}
          onChange={props.handleChanges}
        />

        <button onClick={() => props.addTodo(props.itemName)} type="submit">Add</button>
        <button onClick={() => props.clearCompleted()}>Clear Completed</button>

      </form>
    </div>
  )
}

export default TodoForm;