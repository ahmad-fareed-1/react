import React from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import './App.css';

function App() {
  return (
    <div className="p-10">
      <h1 className="text-3xl text-white">Redux Toolkit Todo App</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
