import { useState } from 'react'
import './App.css'
import { Header } from './components/header/Header'
import { TaskForm } from './components/task-form/TaskForm'
import { TaskList } from './components/task-list/TaskList';

function App() {

    const [taskData, setTaskData] = useState([]);

    const addTask = (task) => {
        setTaskData([...taskData, task]);
        console.log("Task Added Successfully...",taskData);
    }

    return (
        <>
            <Header/>
            <TaskForm onAdd={addTask}/>
            <TaskList taskList={taskData}/>
        </>
    )
}

export default App
