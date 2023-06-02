import "../App.css";
import {CheckButton, DeleteButton} from "./TaskButtons";

export function TaskList({list, setter}) {
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
									<DeleteButton filterList={list} listSetter={setter} itemId={task.id} />
								</div>
							</li>
						);
					})}
				</ul>
			)}
		</section>
	);
}
