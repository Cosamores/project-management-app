import Button from "../Button/Button";

export default function Sidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId
}) {

  return (
    <aside className="w-1/3 px-8 py-16 bg-gray-800 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 uppercase text-2xl font-bold md:text-xl text-stone-200">
        Sidebar
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses = "w-full text-left px-2 py-1 my-1 rounded hover:text-stone-200 hover:bg-stone-800";
          if (project.id === selectedProjectId) {
            cssClasses += " bg-gray-700 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }

        return (
          <li key={project.id} className="my-4">
            <button onClick={() => onSelectProject(project.id)} className={cssClasses}>
              {project.title}
            </button>
          </li>
        )
        })}
      </ul>
    </aside>
  );
}
