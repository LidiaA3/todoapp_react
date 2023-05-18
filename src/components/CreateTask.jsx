import { useState } from "react";

/**
 * 
 * @param {handleChange | handleClick} props 
 * @returns 
 */

function CreateTask (props) {

    return (
        <div className="createTask">
            <input className="createTask__input" type="text" placeholder="Write a task" onChange={props.handleChange} />
            <button className="createTask__btn" type="button" onClick={props.handleClick}>Add task</button>
        </div>
    );
}

export default CreateTask