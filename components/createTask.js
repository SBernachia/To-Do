import  checkComplete  from "./checkComplete.js";
import  deleteIcon  from "./deleteIcon.js";

export const createTask = ({value, date, complete, id}) => {
    const list = document.querySelector("[data-list]");

    const task = document.createElement("li");
    task.classList.add("card");

    const taskContent = document.createElement("div");
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;

    const check = checkComplete(id)
    if (complete) {
        check.classList.toggle("fas");
        check.classList.toggle("completeIcon");
        check.classList.toggle("far");
    }

    taskContent.appendChild(check);
    taskContent.appendChild(titleTask);
    
    task.appendChild(taskContent);
    task.appendChild(deleteIcon(id));
    
    list.appendChild(task);    
}

