import React, { useReducer } from 'react';


const TodoItems = (props) => {

  return(
    <div style={{"width": "250px"}}>
      <ul>
        {props.todos.map((todoObj, index) => (
          <li 
            className={`item${todoObj.completed ? 'completed' : ''}`}
            onClick={(e) => props.handleClick(e)}
            id={todoObj.id} 
            key={index} 
          >
            {todoObj.todo}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoItems;