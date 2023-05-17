import { useState } from "react";

/**
 * 
 * @param {handleChange | handleClick} props 
 * @returns 
 */

function CreateTask (props) {

    return (
        <>
            <input type="text" onChange={props.handleChange} />
            <button type="button" onClick={props.handleClick}>Add task</button>
        </>
    );
}

export default CreateTask