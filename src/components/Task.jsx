import TrashIcon from "./TrashIcon";

function Task (props) {

    function handleClick () {
        console.log('Now the task is checked');
    }

    return (
        <div className="task">
            <input type="checkbox" {...props.checked ? 'checked' : ''} onClick={handleClick} />
            {props.text}
            <button type="button" onClick={() => console.log('Delete task')}><TrashIcon/></button>
        </div>
    );
}

export default Task