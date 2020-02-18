export const todoInitialState = {
  todos: [],
}

export const todoReducer = (state, action) => {
  switch (action.type) {
    
    case 'ADD_TODO':
      const newItem = {
        todo: action.payload,  //<<<<< does this todo item object have to be mirrored in the initial state?
        id: Date.now(),
        completed: false
      }
      return {
        ...state,
        todos: [...state.todos, newItem]
      }
      
      // case 'HANDLE_CHANGES':
      //   return {
        //     ...state,
        //     itemName: action.payload
        //   };
        
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
