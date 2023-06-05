import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";

export function CheckButton({taskId, updateTask}) {
	const [isCheked, setIsCheked] = useState(false);

	useEffect(() => {
		const taskList = JSON.parse(localStorage.getItem("list"));
		const taskState = taskList.find((item) => item.id === taskId);
		setIsCheked(taskState.isCompleted);
	}, []);

	return (
		<input
			className="task-btn check-btn"
			checked={isCheked}
			type="checkbox"
			onChange={() => {
				updateTask(taskId), setIsCheked(!isCheked);
			}}
		/>
	);
}

export function DeleteButton({itemId, removeAction}) {
	return (
		<button className="task-btn delete-btn" onClick={() => removeAction(itemId)}>
			<FontAwesomeIcon icon={faTrashCan} />
		</button>
	);
}
