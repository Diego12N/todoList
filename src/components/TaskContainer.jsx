import "../App.css";
import {useTask} from "../hooks/useTask";
import {CheckButton, DeleteButton} from "./TaskButtons";

export function TaskContainer() {
	const {ts} = useTask();
	return (
		<section className="taks-container">
			{!ts.length ? (
				<span>No añadió tareas</span>
			) : (
				<ul className="task-list">
					{ts.map((task) => {
						return (
							<li key={task.id}>
								<p>{task.description}</p>
								<div>
									<CheckButton />
									<DeleteButton itemId={task.id} />
								</div>
							</li>
						);
					})}
				</ul>
			)}
		</section>
	);
}
