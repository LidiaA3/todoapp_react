import { useEffect, useState } from "react";
import Task from "./Task";
import CreateTask from "./CreateTask";

function Todo () {

    const [taskList, setTaskList] = useState([]);
    const [keyValue, setKeyValue] = useState(0);
    const [inputValue, setInputValue] = useState('');

    function readingInput(e) {
        setInputValue(e.target.value);
    }

    function addingTask() {
        setKeyValue(keyValue + 1);
        const newTask = {
            taskText: inputValue,
            completeTask: false,
            id: keyValue
        };
        taskList.push(newTask);
        setTaskList([...taskList]);
        console.log(taskList)
    }

    function checkboxClicked (i) {
        const newTaskList = [...taskList];
        if (newTaskList[i].completeTask) {
            newTaskList[i].completeTask = false;
            console.log('Now the task', i, 'is unchecked');
        } else {
            newTaskList[i].completeTask = true;
            console.log('Now the task', i, 'is checked');
        }
        setTaskList(newTaskList);
    }

    function trashClicked (i) {
        console.log('Delete task:', i);
        const newTaskList = [...taskList];
        newTaskList.splice(i, 1);
        setTaskList(newTaskList);
    }

    return (
        <>
            <h2>Here goes my todo</h2>
            <CreateTask handleChange={readingInput} handleClick={addingTask} />
            {taskList.map((task) => {
                return <Task key={task.id} text={task.taskText} checked={task.completeTask} handleCheck={() => checkboxClicked(task.id)} handleDelete={() => trashClicked(task.id)} />
            })}
        </>
    );
}

export default Todo