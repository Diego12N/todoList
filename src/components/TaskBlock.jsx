import "../App.css";
import {CheckButton, DeleteButton} from "./TaskButtons";

export function TaskBlock({list, deleteFn}) {
	console.log(list);
	return (
		<section className="taks-container">
			{!list.length ? (
				<span>No añadió tareas</span>
			) : (
				<ul className="task-list">
					{list.map((task) => {
						return (
							<li key={task.id}>
								<p>{task.description}</p>
								<div>
									<CheckButton />
									<DeleteButton itemId={task.id} removeAction={deleteFn} />
								</div>
							</li>
						);
					})}
				</ul>
			)}
		</section>
	);
}
