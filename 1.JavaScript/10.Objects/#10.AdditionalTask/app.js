const usersArray = [
    { id: '34rdca3eeb7f6fgeed471198', name: 'Andrew', age: 25 },
    { id: '76rdca3eeb7f6fgeed471100', name: 'Alexey', age: 15 },
    { id: '12rdca3eeb7f6fgeed4711012', name: 'Egor', age: 13 },
    { id: '32rdca3eeb7f6fgeed471101', name: 'Kate', age: 31 },
    { id: '98rdca3eeb7f6fgeed471102', name: 'Elena', age: 18 }
]

const usersObject = {
    '34rdca3eeb7f6fgeed471198': {
        id: '34rdca3eeb7f6fgeed471198',
        name: 'Andrew',
        age: 25
    },
    '76rdca3eeb7f6fgeed471100': {
        id: '76rdca3eeb7f6fgeed471100',
        name: 'Alexey',
        age: 15
    },
    '12rdca3eeb7f6fgeed4711012': {
        id: '12rdca3eeb7f6fgeed4711012',
        name: 'Egor',
        age: 13
    },
    '32rdca3eeb7f6fgeed471101': {
        id: '32rdca3eeb7f6fgeed471101',
        name: 'Kate',
        age: 31
    },
    '98rdca3eeb7f6fgeed471102': {
        id: '98rdca3eeb7f6fgeed471102',
        name: 'Elena',
        age: 18
    }
}

const getAdultUsers = data => {
    let usersArr = []
    let usersObj = {}

    Array.isArray(data) ? usersArr = data : usersObj = data

    usersArr = usersArr.filter(item => item['age'] > 17)

    const keys = Object.keys(usersObj)
    const values = Object.values(usersObj)

    const deleteValues = []
    for (let i = 0; i < keys.length; i++) {
        values[i]['age'] < 18 ? deleteValues.push(keys[i]) : false
    }
    deleteValues.forEach(item => delete usersObj[item])

    let result
    usersArr.length === 0 ? result = usersObj : result = usersArr
    return result
}

console.log(getAdultUsers(usersArray))
console.log(getAdultUsers(usersObject))