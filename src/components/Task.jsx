import TrashIcon from "./TrashIcon";

/**
 * 
 * @param {key | text | isChecked | handleCheck | handleDelete} props 
 * @returns 
 */

function Task (props) {

    return (
        <div className="task">
            <input className="task__input" type="checkbox" onClick={props.handleCheck} defaultChecked={props.isChecked} />
            <p className="task__text">{props.text}</p>
            <button className="task__btn" type="button" onClick={props.handleDelete}><TrashIcon/></button>
        </div>
    );
}

export default Task