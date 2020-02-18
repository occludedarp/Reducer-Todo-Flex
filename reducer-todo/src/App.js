import React, { useState } from 'react';
import TodoList from './components/todoList';
import './App.css';

function App() {
  const [itemName, setItemName] = useState(' ')

 const handleChanges = e => { 
    setItemName(e.target.value)
  }

  return (
    <div className="App">
      <TodoList itemName={itemName} handleChanges={handleChanges} />
    </div>
  );
}

export default App;
