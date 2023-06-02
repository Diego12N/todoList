import {useState} from "react";
import {useTask} from "../hooks/useTask";

export function Form() {
	// const [task, setTask] = useState("");

	// const handleTask = (e) => {
	// 	setTask(e.target.value);
	// };

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	const taskTrimed = task.trim();
	// 	if (!taskTrimed) {
	// 		setTask(taskTrimed);
	// 		return;
	// 	}
	// 	const taskItem = {
	// 		id: self.crypto.randomUUID(),
	// 		description: task,
	// 		isChecked: false,
	// 	};

	// 	updateList(taskItem);
	// 	setTask("");
	// };

	// return (
	// 	<form onSubmit={handleSubmit}>
	// 		<input type="text" placeholder="Ingresar tarea" value={task} onInput={handleTask} />
	// 		<button type="submit" className="addTask">
	// 			Añadir
	// 		</button>
	// 	</form>
	// );

	const {task, handleTask, handleSubmit} = useTask();

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" placeholder="Ingresar tarea" value={task} onInput={handleTask} />
			<button type="submit" className="addTask">
				Añadir
			</button>
		</form>
	);
}
