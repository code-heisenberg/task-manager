import React, { useState } from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, {id: Date.now(), name: task, completed: false}]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, completed: !task.completed} : task));
  }

  const deleteTask = (id) => {
    console.log(id);
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className='container'>
      <h1>Task Manager</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask}/>
    </div>
  )
}

export default App
