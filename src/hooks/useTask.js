import {useEffect, useState} from "react";

export const useTask = () => {
	const [task, setTask] = useState("");
	const [taskList, setTaskList] = useState([]);

	// const handleTaskList = (item) => {
	// 	setTaskList([...taskList, item]);
	// };

	useEffect(() => {}, [taskList]);

	const getTasks = () => {
		return [...taskList];
	};

	const handleTask = (e) => {
		setTask(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const taskTrimed = task.trim();
		if (!taskTrimed) {
			setTask(taskTrimed);
			return;
		}
		const taskItem = {
			id: self.crypto.randomUUID(),
			description: task,
			isChecked: false,
		};

		setTaskList([...taskList, taskItem]);

		setTask("");
	};

	const hanbleDeleteItem = (itemID) => {
		const newList = taskList.filter((task) => {
			if (task.id != itemID) return task;
		});

		setTaskList(newList);
	};

	return {tasks: getTasks(), task, handleTask, handleSubmit, hanbleDeleteItem};
};
