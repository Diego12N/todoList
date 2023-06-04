import "../App.css";
import {CheckButton, DeleteButton} from "./TaskButtons";

export function TaskBlock({list, deleteFn, updater}) {
	console.log(list);
	return (
		<section className="taks-container">
			{!list.length ? (
				<span>No añadió tareas</span>
			) : (
				<ul className="task-list">
					{list.map((task) => {
						return (
							<li key={task.id} className={task.isChecked ? "task-cheked" : "taks-pending"}>
								<div>
									<CheckButton taskId={task.id} updateTask={updater} />
									<p>{task.description}</p>
								</div>
								<DeleteButton itemId={task.id} removeAction={deleteFn} />
							</li>
						);
					})}
				</ul>
			)}
		</section>
	);
}
