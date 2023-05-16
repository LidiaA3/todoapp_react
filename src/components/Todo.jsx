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
        console.log(taskList);
    }

    function checkboxClicked (id) {
        const newTaskList = [...taskList];
        const i = newTaskList.findIndex(item => item.id === id);
        if (newTaskList[i].completeTask) {
            newTaskList[i].completeTask = false;
            console.log('Now the task', id, 'is unchecked');
        } else {
            newTaskList[i].completeTask = true;
            console.log('Now the task', id, 'is checked');
        }
        setTaskList(newTaskList);
        console.log(taskList);
    }

    function trashClicked (id) {
        console.log('Delete task:', id);
        const newTaskList = [...taskList];
        const i = newTaskList.findIndex(item => item.id === id);
        console.log('1. Old', taskList, 'New', newTaskList);
        newTaskList.splice(i, 1);
        console.log('2. Old', taskList, 'New', newTaskList);
        setTaskList(newTaskList);
        console.log(taskList);
    }

    return (
        <>
            <h2>Here goes my todo</h2>
            <CreateTask handleChange={readingInput} handleClick={addingTask} />
            {taskList.map((task) => {
                return <Task key={task.id} text={task.taskText} isChecked={task.completeTask} handleCheck={() => checkboxClicked(task.id)} handleDelete={() => trashClicked(task.id)} />
            })}
        </>
    );
}

export default Todo