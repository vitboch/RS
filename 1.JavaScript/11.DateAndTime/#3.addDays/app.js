const year = 2022
const month = 10
const day = 29

const convertDaysToMs = days => days * 1000 * 60 * 60 * 24
const addDays = (date, days) => new Date(date.getTime() + convertDaysToMs(days))

console.log(addDays(new Date(year, month - 1, day), 365))