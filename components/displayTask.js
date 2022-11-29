import { createTask } from "./createTask.js";
import { uniqueDates, orderDates } from "../services/date.js";
import { creaDateElement } from "./creaDateElement.js"

 export const displayTask = () => {
    const listTasks = JSON.parse(localStorage.getItem("task")) || [];
    const dates = uniqueDates(listTasks);
    orderDates(dates);

    dates.forEach((date) => {

        const dateMoment = moment(date, "DD/MM/YYYY")
        creaDateElement(date);

        listTasks.forEach((task) => {
            const taskDate = moment(task.date, "DD/MM/YYYY")
            const diff = taskDate.diff(dateMoment);

            if (diff === 0) {
                createTask(task);
            }
        })
    })
}