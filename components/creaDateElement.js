export const creaDateElement = (date) => {
    if (date == "Invalid date") {return;}
    
    const list = document.querySelector("[data-list]");
    const dateElement = document.createElement("li");
    dateElement.classList.add("date");
    dateElement.innerHTML = date;

    list.appendChild(dateElement);
}
