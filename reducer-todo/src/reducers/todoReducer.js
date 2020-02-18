export const todoInitialState = {
  todos: [],
  itemName: ' '
}

export const todoReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      const newItem = {
        todo: state.itemName,
        id: Date.now(),
        completed: false
      }
      return {
        ...state,
        todos: [...state.todos, newItem]
      }
    case 'HANDLE_CHANGES':
      return {
        ...state,
        itemName: action.payload
      }     
  }

}

