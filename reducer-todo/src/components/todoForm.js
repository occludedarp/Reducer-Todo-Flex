import React, { useReducer } from 'react';
import { todoReducer, todoInitialState } from '../reducers/todoReducer';


const TodoForm = props => {

  const [state, dispatch] = useReducer(todoReducer, todoInitialState)

  return(
    <div>
      <form onSubmit={() => dispatch({type: 'ADD_TODO'})}> 
        <input 
          name="itemName"
          type="text"
          value={props.itemName}
          onChange={props.handleChanges}
        />

        <button type="submit">Add</button>
        <button onClick={() => dispatch({type: 'CLEAR_COMPLETED'})}>Clear Completed</button>

      </form>
    </div>
  )
}

export default TodoForm;