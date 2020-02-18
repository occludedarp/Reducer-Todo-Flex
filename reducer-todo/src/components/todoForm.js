import React, { useReducer, useState } from 'react';
import { todoReducer, todoInitialState } from '../reducers/todoReducer';


const TodoForm = props => {

  const [state, dispatch] = useReducer(todoReducer, todoInitialState)
  const [itemName, setItemName] = useState(' ')

  const handleChanges = (e) => {
    setItemName(e.target.value) 
  }

  return(
    <div>
      <form onSubmit={(e) => e.preventDefault()}> 
        <input 
          name="itemName"
          type="text"
          value={itemName}
          onChange={handleChanges}
        />

        <button onClick={() => dispatch({type: 'ADD_TODO', payload: itemName})} type="submit">Add</button>
        <button onClick={() => dispatch({type: 'CLEAR_COMPLETED'})}>Clear Completed</button>

      </form>
    </div>
  )
}

export default TodoForm;