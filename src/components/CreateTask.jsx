import { useState } from "react";

function CreateTask (props) {

    return (
        <>
            <input type="text" onChange={props.handleChange} />
            <button type="button" onClick={props.handleClick}>Add task</button>
        </>
    );
}

export default CreateTask