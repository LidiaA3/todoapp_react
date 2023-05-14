import { useState } from "react";
import Task from "./Task";
import CreateTask from "./CreateTask";

function Todo () {

    const [taskList, setTaskList] = useState([]);
    let keyValue = 1;

    const [inputValue, setInputValue] = useState('');

    function readingInput(e) {
        setInputValue(e.target.value);
    }

    function addingTask() {
        const newTask = {
            taskText: inputValue,
            completeTask: false,
            id: keyValue
        };
        keyValue++
        setTaskList(taskList.push(newTask));
        console.log(taskList);
    }

    return (
        <>
            <h2>Here goes my todo</h2>
            <CreateTask handleChange={readingInput} handleClick={addingTask} />
            {taskList.map((task) => {
                console.log(task);
                return <Task key={task.id} text={task.taskText} checked={task.completeTask} />
            })}
        </>
    );
}

export default Todo