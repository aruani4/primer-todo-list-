//form
//input
//button x2
//item agregado con boton delete borrado

import { useState } from "react";
import './App.css'
import SearchForm from './components/SearchForm/SearchForm'
import List from './components/List/List'


function App() {
  const [tasks, setTask] = useState([]);
  
  const handleTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: +new Date(),
      value : e.target.task.value,
    }

    setTask([...tasks, newTask]);
    e.target.task.value = '';
  }

  const handleDelete = (id) => {
    setTask(tasks.filter (task => task.id !== id));

  }


  return (
    <div className="App">
      <SearchForm search={handleTask} />
      <List tasks={tasks} deleteTask={handleDelete} /> 
    </div>
  )
}

export default App
