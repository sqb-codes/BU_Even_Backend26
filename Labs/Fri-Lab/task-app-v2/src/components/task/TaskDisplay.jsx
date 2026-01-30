export const TaskDisplay = ({taskList}) => {
    return (
        <div id="task-box">
            <h2>Your Pending task...</h2>
            <ul>
                {
                    taskList.map((item,index) => (
                        <li key={index}>
                            {item.taskTitle}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}