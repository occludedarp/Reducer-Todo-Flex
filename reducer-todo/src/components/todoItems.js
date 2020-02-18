import React, { useReducer } from 'react';
import { todoReducer, todoInitialState } from '../reducers/todoReducer';


const TodoItems = () => {
  const [state, dispatch] = useReducer(todoReducer, todoInitialState)

  return(
    <div>
      <ul>
        {state.todos.map((todoObj, index) => (
          <li 
            className={`item${todoObj.completed ? 'completed' : ''}`}
            onClick={(e) => dispatch({type: 'TOGGLE_COMPLETED', payload: e.target.id})}
            id={todoObj.id} 
            key={index} 
          >
            {state.itemName}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoItems;