import { useState } from 'react';
import './App.css'
import { Header } from './components/header/Header'
import { TaskForm } from './components/taskOperations/TaskForm';
import { TaskList } from './components/taskOperations/TaskList';

function App() {
  const username = "Ravi";

  const [taskList, setTaskList] = useState([]);

  const addTask = (task) => {
    setTaskList([...taskList, task]);
  }

  return (
    <>
      <Header username={username}/>
      <TaskForm onAdd={addTask}/>
      <TaskList taskList={taskList}/>
    </>
  )
}

export default App
