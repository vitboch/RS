const getDateFormat = (date, separator = '.') => {
    let day = date.getDate()
    day < 10 ? day = `0${day}` : false

    let month = date.getMonth() + 1
    month < 10 ? month = `0${month}` : false

    const year = date.getFullYear()

    return `${day}${separator}${month}${separator}${year}`
}

console.log(getDateFormat(new Date()))
console.log(getDateFormat(new Date(),'-'))