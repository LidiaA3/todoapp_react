import TrashIcon from "./TrashIcon";

// key || text || isChecked || handleCheck || handleDelete

function Task (props) {

    return (
        <div className="task">
            <input type="checkbox" onClick={props.handleCheck} {...props.isChecked ? 'checked' : ''} />
            {props.text}
            <button type="button" onClick={props.handleDelete}><TrashIcon/></button>
        </div>
    );
}

export default Task