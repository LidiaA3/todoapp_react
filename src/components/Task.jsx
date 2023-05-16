import TrashIcon from "./TrashIcon";

function Task (props) {

    return (
        <div className="task">
            <input type="checkbox" onClick={props.handleCheck} />
            {props.text}
            <button type="button" onClick={props.handleDelete}><TrashIcon/></button>
        </div>
    );
}

export default Task