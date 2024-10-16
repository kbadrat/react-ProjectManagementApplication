import Button from "./Button.jsx";

export default function ProjectsBar({ projects, setSelectProject, handleCreateProject, setIsCreateProject }) {

    function handleSelectProject(project) {
        setSelectProject(project);
        setIsCreateProject(false);
        console.log(projects);
    }


    return (
        <>
            <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
                <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
                    Your Projects
                </h2>
                <div>
                    <Button
                        onClick={handleCreateProject}
                    >
                        + Add Project
                    </Button>
                </div>
                <ul className="mt-8">
                    {projects.map((project, index) => (
                        <li key={index}>
                            <button
                                key={index}
                                className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800"
                                onClick={() => handleSelectProject(project)}
                            >
                                {project.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </aside>
        </>);
}