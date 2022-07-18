const ordersArr = [4, 2, 1, 3]
const people = [
    { id: 1, name: 'Maksim' },
    { id: 2, name: 'Nicholas' },
    { id: 3, name: 'Angelina' },
    { id: 4, name: 'Vitaly' }
]

const giveTalonsInOrder = (people, ordersArr) => {
    const patientQueue = []
    for (let i = 0; i < ordersArr.length; i++){
        for (let index = 0; index < people.length; index++) {
            ordersArr[i] === people[index].id ? patientQueue.push(people[index]) : false
        }
    }
   return patientQueue
}

const result = giveTalonsInOrder(people, ordersArr)
console.log('result', result)