const year = 2022
const month = 10
const day = 29

const convertMsToDays = ms => ms / 1000 / 60 / 60 / 24
const getDaysBeforeBirthday = nextBirthdayDate => Math
    .round(convertMsToDays(nextBirthdayDate.getTime() - Date.now()))

console.log(getDaysBeforeBirthday(new Date(year, month - 1, day)))