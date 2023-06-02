import "./App.css";
import {TaskContainer} from "./components/TaskContainer";
import {Form} from "./components/Form";
import {useTask} from "./hooks/useTask";

function App() {
	const {ts} = useTask();
	console.log(ts);
	return (
		<>
			<header>
				<h1>Lista de Tareas</h1>
				<Form />
			</header>
			<main>
				<TaskContainer />
			</main>
		</>
	);
}

export default App;
