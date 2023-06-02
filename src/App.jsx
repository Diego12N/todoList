import "./App.css";
import {TaskBlock} from "./components/TaskBlock";
import {Form} from "./components/Form";
import {useTask} from "./hooks/useTask";

function App() {
	const {tasks, task, handleTask, handleSubmit, hanbleDeleteItem} = useTask();

	return (
		<>
			<header>
				<h1>Lista de Tareas</h1>
				<Form task={task} handleTask={handleTask} handleSubmit={handleSubmit} />
			</header>
			<main>
				<TaskBlock list={tasks} deleteFn={hanbleDeleteItem} />
			</main>
		</>
	);
}

export default App;
