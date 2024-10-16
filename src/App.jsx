import { useState, useRef } from "react";
import ProjectsBar from "./components/ProjectsBar";
import ProjectSelected from "./components/ProjectSelected";
import CreateProject from "./components/CreateProject";

{/*
<dialog className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">...</dialog>
<form className="mt-4 text-right">...</form>
<div className="flex items-center gap-4">
<h2 className="text-xl font-bold text-stone-500 my-4">...</h2>
<p className="mt-8">...</p>
<ul className="mt-8">...</ul>
<div className="mt-24  w-2/3>...</div>

<header className="pb-4 mb-4 border-b-2 border-stone-300">...</header>
<div className="flex items-center justify-between">...</div>
<h1 className="text-3xl font-bold text-stone-600 mb-2">...</h1>
<p className="mb-4 text-stone-400">...</p>
<p className="text-stone-800 my-4">...</p> 
<form className="mt-4 text-right">*/}


const projects = [];

function App() {
  const [selectProject, setSelectProject] = useState(undefined);
  const [isCreateProject, setIsCreateProject] = useState(false);

  function handleCreateProject() {
    setIsCreateProject(true);
  }


  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsBar
        projects={projects}
        setSelectProject={setSelectProject}
        handleCreateProject={handleCreateProject}
        setIsCreateProject={setIsCreateProject} />
      {/*Если не выбран проект.*/}
      {!isCreateProject && <ProjectSelected
        selectProject={selectProject}
        setSelectProject={setSelectProject}
        handleCreateProject={handleCreateProject} 
        projects={projects}
        />}
      {isCreateProject && <CreateProject
        projects={projects}
        setIsCreateProject={setIsCreateProject} 
        setSelectProject={setSelectProject}/>} 
    </main>
  );
}

export default App;
