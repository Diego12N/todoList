export function TaskList({list}) {
	console.log(list);
	return (
		<section>
			{!list.length ? (
				<span>No añadió tareas</span>
			) : (
				<ul>
					{list.map((task, index) => {
						return <li key={index}>{task.description}</li>;
					})}
				</ul>
			)}
		</section>
	);
}
