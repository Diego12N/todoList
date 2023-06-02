import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";

export function CheckButton() {
	return <input className="task-btn check-btn " type="checkbox" />;
}

export function DeleteButton({filterList, listSetter, itemId}) {
	const hanbleDeleteItem = () => {
		const newList = filterList.filter((task) => {
			if (task.id != itemId) return task;
		});

		listSetter(newList);
	};

	return (
		<button className="task-btn delete-btn" onClick={hanbleDeleteItem}>
			<FontAwesomeIcon icon={faTrashCan} />
		</button>
	);
}
