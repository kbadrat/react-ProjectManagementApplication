import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function CreateProject({ setIsCreateProject, projects, setSelectProject }) {

    const modal  = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSaveProject() {
        if (title.current.value.trim() === "" ||
            description.current.value.trim() === "" ||
            dueDate.current.value.trim() === "") {
                modal.current.open();
            return;
        }

        projects.push({
            id: projects.length,
            title: title.current.value,
            description: description.current.value,
            dueDate: dueDate.current.value,
            tasks: []
        });
        setSelectProject(projects[projects.length - 1]);
        setIsCreateProject(false);
    }

    return (<>
        <Modal ref={modal} buttonCaption="Close">
            <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
            <p className="text-stone-600 mb-4">Oops... looks like you forgot to enter a value.</p>
            <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field.</p>
        </Modal>
            
    
    <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li>
                <button className="text-stone-800 hover:text-stone-950"
                    onClick={() => setIsCreateProject(false)}>Cancel</button>
            </li>
            <li>
                <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                    onClick={handleSaveProject}>
                    Save
                </button>
            </li>
        </menu>

        <Input ref={title} label="title" type="text" />
        <Input ref={description} label="description" textarea />
        <Input ref={dueDate} label="due date" type="date" />
    </div> </>);
}