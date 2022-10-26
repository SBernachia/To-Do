(() => {
    const btn = document.querySelector("[data-form-btn]");

    const createTask = (evento) => {
        evento.preventDefault();
        const input = document.querySelector("[data-form-input]");
        const value = input.value;
        input.value = "";

        const list = document.querySelector("[data-list]")
        const task = document.createElement("li");
        task.classList.add("card");

        const taskContent = document.createElement("div");
        const titleTask = document.createElement("span");
        titleTask.classList.add("task");
        titleTask.innerText = value;
        
        taskContent.appendChild(checkComplete());
        taskContent.appendChild(titleTask);
        
        task.appendChild(taskContent);
        const content = `
        <i class="fas fa-trash-alt trashIcon icon"></i>`;
        

        list.appendChild(task);
        
    }
    btn.addEventListener("click", createTask);
    
    const completeTask = (event) => {
        const element = event.target;
        element.classList.toggle("fas");
        element.classList.toggle("completeIcon")
        element.classList.toggle("far");
    }
    const checkComplete = () => {
        const i = document.createElement("i");
        i.classList.add("far", "fa-check-square", "icon");
        i.addEventListener("click", completeTask);
        return i
    }
})();