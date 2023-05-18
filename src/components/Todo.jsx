import { useEffect, useState } from "react";
import Task from "./Task";
import CreateTask from "./CreateTask";

function Todo () {

    const [taskList, setTaskList] = useState([]);
    const [keyValue, setKeyValue] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [currentFilter, setCurrentFilter] = useState('all');

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
    }

    function trashClicked (id) {
        console.log('Delete task:', id);
        const newTaskList = [...taskList];
        const i = newTaskList.findIndex(item => item.id === id);
        newTaskList.splice(i, 1);
        setTaskList(newTaskList);
    }

    function changeView(nav) {
        setCurrentFilter(nav);

    }

    return (
        <>
            <CreateTask handleChange={readingInput} handleClick={addingTask} />
            <nav className="nav">
                <button className={`nav__btn ${currentFilter === 'all' ? 'active' : ''}`} onClick={() => changeView('all')}>All</button>
                <button className={`nav__btn ${currentFilter === 'todo' ? 'active' : ''}`} onClick={() => changeView('todo')}>To do</button>
                <button className={`nav__btn ${currentFilter === 'completed' ? 'active' : ''}`} onClick={() => changeView('completed')}>Completed</button>
            </nav>
            <section className="taskList">
                {taskList.map((task) => {
                    if (currentFilter === 'todo' && task.completeTask === false || currentFilter === 'completed' && task.completeTask === true || currentFilter === 'all') {
                        return <Task key={task.id} text={task.taskText} isChecked={task.completeTask} handleCheck={() => checkboxClicked(task.id)} handleDelete={() => trashClicked(task.id)} />
                    } else {
                        return ''
                    }
                })}
            </section>
        </>
    );
}

export default Todo