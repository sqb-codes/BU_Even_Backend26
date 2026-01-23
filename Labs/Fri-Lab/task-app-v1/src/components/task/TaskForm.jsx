import { useState } from "react"

export const TaskForm = ({onTaskAdd}) => {

    const [taskTitle, setTaskTitle] = useState("");

    const taskTitleHandler = (event) => {
        setTaskTitle(event.target.value);
        // console.log("Task title:",taskTitle);
    }

    const addTaskTitle = (event) => {
        event.preventDefault();     // wil stop page reloading on form submit
        // console.log("Event is:",event);
        onTaskAdd(taskTitle);
    }

    return (
        <div id="task-form">
            <form>
                <div className="input-group">
                    <label>Enter task title</label>
                    <input
                        type="text"
                        placeholder="Enter task title"
                        onChange={taskTitleHandler}
                    />
                </div>

                <button onClick={addTaskTitle}>Add Task</button>
            </form>
        </div>
    )
}