import TrashIcon from "./TrashIcon";

/**
 * 
 * @param {key | text | isChecked | handleCheck | handleDelete} props 
 * @returns 
 */

function Task (props) {

    return (
        <div className="task">
            <input type="checkbox" onClick={props.handleCheck} defaultChecked={props.isChecked} />
            {props.text}
            <button type="button" onClick={props.handleDelete}><TrashIcon/></button>
        </div>
    );
}

export default Task