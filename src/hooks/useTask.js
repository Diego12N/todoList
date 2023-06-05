import {useEffect, useState} from "react";

export const useTask = () => {
	const [taskList, setTaskList] = useState([]);

	// const handleTaskList = (item) => {
	// 	setTaskList([...taskList, item]);
	// };

	//const getStorage = window.localStorage.getItem()

	//	useEffect(() => {}, [taskList]);

	useEffect(() => {
		if (localStorage.getItem("list")) {
			//localStorage.getItem retorna null si dicha key(list) no existe. Es decir seria igual a false
			// Para verificar si un array esta vacio lo correcto es comprobar si su longitud es mayor a 0
			setTaskList(JSON.parse(localStorage.getItem("list")));
		}
	}, []);

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
			isCompleted: false,
		};

		// Debido a que el set de un estado es asincronico, primero guardo la nueva lista en una variable la cual puedo utilizar para acualizar el estado y a su vez guardar el cambio dentro del storage
		const newList = [...taskList, taskItem];
		setTaskList(newList);

		localStorage.setItem("list", JSON.stringify([...newList]));

		setTask("");
	};

	const updateTask = (id) => {
		const newList = [...taskList];

		const listUpdated = newList.map((task) => {
			if (task.id === id) {
				return {...task, isCompleted: !task.isCompleted}; // retorno el objeto, para ello mantengo los valores que no quiero modificar mediante el spread (...task), y como ya me encuentro dentro del objeto solo necesito llamar al valor a modificar (isComplpeted)
			}

			return task;
		});

		// Importante: forEach, solo actualiza nuestro array, no retorna un valor. Por ello debo utilizar .map que si retorna un valor.
		setTaskList(listUpdated);
		localStorage.setItem("list", JSON.stringify(listUpdated));
	};

	const handleDeleteItem = (itemID) => {
		const newList = taskList.filter((task) => {
			if (task.id != itemID) return task;
		});

		setTaskList(newList);
		localStorage.setItem("list", JSON.stringify(newList));
	};

	return {tasks: getTasks(), handleSubmit, handleDeleteItem, updateTask};
};
