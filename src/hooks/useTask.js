import {useEffect, useState} from "react";

export const useTask = () => {
	const [taskList, setTaskList] = useState([]);

	// const handleTaskList = (item) => {
	// 	setTaskList([...taskList, item]);
	// };

	//const getStorage = window.localStorage.getItem()

	//	useEffect(() => {}, [taskList]);

	const getTasks = () => {
		return [...taskList];
	};

	const handleSubmit = (e, task, setTask) => {
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

	const handleDeleteItem = (itemID) => {
		const newList = taskList.filter((task) => {
			if (task.id != itemID) return task;
		});

		setTaskList(newList);
	};

	return {tasks: getTasks(), handleSubmit, handleDeleteItem};
};
