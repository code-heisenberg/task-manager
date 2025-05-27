import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import "./App.css";
// Uncomment below  line if you want to use the custom hook
import useLocalstorage from "./useLocalStorage"; 

function App() {
  // Commented out the below code to use the custom hook instead
  
  // const [tasks, setTasks] = useState(() => {
  //   const savedTasks = localStorage.getItem("tasks");
  //   try {
  //     return savedTasks ? JSON.parse(savedTasks) : [];
  //   } catch (error) {
  //     console.error("Error parsing tasks from localStorage:", error);
  //     return [];
  //   }
  // });

  // Update it with useLocalStorage hook
  const [tasks, setTasks] = useLocalstorage("tasks", []);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    console.log("Saving tasks to localStorage:", tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), name: task, completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    console.log(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Function to filter tasks based on the selected filter only
  // const getFilteredTasks = () => {
  //   if (filter === "completed") {
  //     return tasks.filter((task) => task.completed);
  //   } else if (filter === "pending") {
  //     return tasks.filter((task) => !task.completed);
  //   }
  //   return tasks; // Return all tasks if filter is 'all'
  // }

  // Function to search tasks based on the selected filter and search term
  const getFilteredTasks = () => {
    let filtered = tasks;

    if (filter === "completed") {
      filtered = filtered.filter((task) => task.completed);
    } else if (filter === "pending") {
      filtered = filtered.filter((task) => !task.completed);
    }

    if (searchTerm) {
      filtered = filtered.filter((task) =>
        task.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  };

  const filteredTasks = getFilteredTasks();

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskForm onAdd={addTask} />
      <div className="filter-buttons">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
        <button
          className={filter === "pending" ? "active" : ""}
          onClick={() => setFilter("pending")}
        >
          Pending
        </button>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
}

export default App;
