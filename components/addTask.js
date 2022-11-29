import { creaDateElement } from "./creaDateElement.js";
import { createTask } from "./createTask.js";
import { displayTask } from "./displayTask.js";

export const addTask = (evento) => {
    evento.preventDefault();

    const tasksList = JSON.parse(localStorage.getItem("task")) || [];
    const list = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const inputDate = document.querySelector("[data-form-date]");
    
    const date = moment(inputDate.value).format("DD/MM/YYYY");
    const value = input.value;

    if (value === "" || date == "Invalid date") {
        return;
    }

    input.value = "";
    inputDate.value = "";
    list.innerHTML = "";
    const complete = false;

    const taskObj = {
        value,
        date,
        complete,
        id: uuid.v4()
    }
    tasksList.push(taskObj);
    localStorage.setItem("task", JSON.stringify(tasksList));

    
    displayTask();
}
