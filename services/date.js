export const uniqueDates = (tasks) => {
    const uniqueDates = [];

    tasks.forEach( (tasks) => {
        if (!uniqueDates.includes(tasks.date)) {
        uniqueDates.push(tasks.date);
        }
    })

    return uniqueDates;
}

export const orderDates = (dates) => {
    dates.sort( (a,b) => {
        const firstDate = moment(a, "DD/MM/YYYY");
        const secondDate = moment(b, "DD/MM/YYYY");

        return firstDate - secondDate
    })
}