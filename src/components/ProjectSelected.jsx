import { useState } from "react";
import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

export default function ProjectSelected({ projects, selectProject, setSelectProject, handleCreateProject }) {



    function formatDate(dateString) {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const date = new Date(dateString);
        const day = date.getDate();
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();

        return `${month} ${day}, ${year}`;
    }

    const [task, setTask] = useState("");

    function handleGetTask(event) {
        setTask(event.target.value);
    }

    function handleAddTask() {
        if (task.trim() === "") {
            return;
        }
        selectProject.tasks.push(task);
        setSelectProject({ ...selectProject });
        setTask("");
    }

    function handleDeleteTask(index) {
        selectProject.tasks.splice(index, 1);
        setSelectProject({ ...selectProject });
    }

    function handleDeleteProject(selectProject) {
        projects.splice(projects.indexOf(selectProject), 1);
        setSelectProject(undefined);
    }


    // Если проект не выбран. 
    return selectProject === undefined ?
        <div className="mt-24 text-center w-2/3">

            <img
                src={noProjectImage}
                alt="An empty task list"
                className="w-16 h-16 object-contain mx-auto" />
            <h2
                className="text-xl font-bold text-stone-500 my-4">
                No Project Selected
            </h2>
            <p
                className="text-stone-600 mb-4">
                Select a project or get started with a new one
            </p>
            <p className="mt-8">
                <Button
                    onClick={handleCreateProject}>
                    Create new project
                </Button>
            </p>

        </div>
        :

        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{selectProject.title}</h1>
                    <button className="text-stone-600 hover:text-stone-950"
                        onClick={() => handleDeleteProject(selectProject)}>Delete</button>
                </div>

                <p className="text-stone-400 mb-4">{formatDate(selectProject.dueDate)}</p>

                <p className="text-stone-600 whitespace-pre-wrap">{selectProject.description}</p>
            </header>

            

            <div className="flex items-center gap-4"><input className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                type="text"
                value={task}
                onChange={handleGetTask} />
                <button className="text-stone-600 hover:text-stone-950"
                    onClick={handleAddTask}
                >Add Task</button></div>


            {selectProject.tasks.length === 0 ? <p className="flex flex-col gap-1 my-4">This project does not have any tasks yet.</p>
                : (
                    <ul className="p-4 mt-8 rounded-md bg-stone-100">
                        {selectProject.tasks.map((task, index) => (
                            <li key={index} className="flex justify-between my-4">
                                <span>{task}</span>
                                <button
                                    className="text-stone-700 hover:text-red-500"
                                    onClick={() => handleDeleteTask(index)}
                                >Clear</button>
                            </li>
                        ))}
                    </ul>
                )
            }
        </div >
};