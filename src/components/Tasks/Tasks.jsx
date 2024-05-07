import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete}) {
  return (
    <section className="h-full">
      <h2 className="text-2xl font-bold text-stone-500">Tasks</h2>
      <NewTask onAdd={onAdd} onDelete={onDelete}/>
      {tasks.length === 0 && ( 
      <p className="text-stone-800 my-4">This project does not have any tasks yet.</p>
      )}
      {tasks.length > 0 && (
      <ul className="p-4 mt-8 rounded-md bg-stone-100">
        {tasks.map((task) => (
        <li key={task.id} className="flex items-center justify-between my-4">
          <span className="text-stone-600">{task.text}</span>
          <button className="text-stone-700 hover:text-red-500" onClick={() => onDelete(task.id)}>Clear</button>
        </li>
        ))}
      </ul>
    )}
    </section>
  )
}