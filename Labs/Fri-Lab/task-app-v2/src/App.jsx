import { useState } from 'react';
import './App.css'
import { Header } from './components/header/Header'
import { TaskForm } from './components/task/TaskForm'
import { TaskDisplay } from './components/task/TaskDisplay';

function App() {

  const username = "Ravi";
  const [taskList, setTaskTitle] = useState([]);

  const addTask = (task) => {
    setTaskTitle([...taskList, task]);
  }
  
  return (
    <>
      <Header username={username}/>
      <TaskForm onTaskAdd={addTask}/>
      <TaskDisplay taskList={taskList}/>
    </>
  )
}

export default App
