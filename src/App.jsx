import {useState} from "react";
import "./App.css";
import {TaskList} from "./components/TaskList";
import {Form} from "./components/Form";

function App() {
	const [taskAdded, setTaskAdded] = useState([]);

	const handleTaskItem = (item) => {
		setTaskAdded([...taskAdded, item]);
	};

	return (
		<>
			<header>
				<h1>Lista de Tareas</h1>
				<Form updateList={handleTaskItem} />
			</header>
			<main>
				<TaskList list={taskAdded} />
			</main>
		</>
	);
}

export default App;
