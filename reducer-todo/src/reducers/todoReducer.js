export const todoInitialState = {
  todos: [{
    todo: ' ',
    id: Date.now(),
    completed: false
  }],
}

export const todoReducer = (state, action) => {
  console.log(action.payload)
  switch (action.type) {
    
    case 'ADD_TODO':
      const newItem = {
        todo: action.payload,
        id: Date.now(),
        completed: false
      }
      return {
        ...state,
        todos: [...state.todos, newItem]
      }
      
    case 'CLEAR_COMPLETED':
      return {
          ...state,
          todos: state.todos.filter(task => {
            return !task.completed
          })
      }
        
    case 'TOGGLE_COMPLETED':
      const completedTodos = state.todos.map(todoItem => 
          `${todoItem.id}` === action.payload 
        ? 
          {...todoItem,
            completed: !todoItem.completed
          } 
        : 
          todoItem
        )
        
      return {
        ...state,
        todos: completedTodos
      }
      
      default:
        return state;
  }
            
}
