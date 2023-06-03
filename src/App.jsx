import "./App.css";
import {TaskBlock} from "./components/TaskBlock";
import {Form} from "./components/Form";
import {useTask} from "./hooks/useTask";

function App() {
	const {tasks, handleTask, handleSubmit, handleDeleteItem} = useTask();
	console.log("task");

	return (
		<>
			<header>
				<h1>Lista de Tareas</h1>
				<Form handleTask={handleTask} handleSubmit={handleSubmit} />
			</header>
			<main>
				<TaskBlock list={tasks} deleteFn={handleDeleteItem} />
			</main>
		</>
	);
}

export default App;
