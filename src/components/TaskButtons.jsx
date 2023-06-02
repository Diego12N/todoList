import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {useTask} from "../hooks/useTask";

export function CheckButton() {
	return <input className="task-btn check-btn " type="checkbox" />;
}

export function DeleteButton({itemId}) {
	const {hanbleDeleteItem} = useTask();

	return (
		<button className="task-btn delete-btn" onClick={() => hanbleDeleteItem(itemId)}>
			<FontAwesomeIcon icon={faTrashCan} />
		</button>
	);
}
