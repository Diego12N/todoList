import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";

export function CheckButton({taskId, updateTask}) {
	return <input className="task-btn check-btn" type="checkbox" onClick={() => updateTask(taskId)} />;
}

export function DeleteButton({itemId, removeAction}) {
	return (
		<button className="task-btn delete-btn" onClick={() => removeAction(itemId)}>
			<FontAwesomeIcon icon={faTrashCan} />
		</button>
	);
}
