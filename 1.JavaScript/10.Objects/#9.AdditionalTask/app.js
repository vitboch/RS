const todayWinner = {
    prize: '10 000$'
}

const winnerApplicants = {
    '001': {
        name: 'Maksim',
        age: 25
    },
    '201': {
        name: 'Svetlana',
        age: 20
    },
    '304': {
        name: 'Catherine',
        age: 35
    }
}

const getRandomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min)) + min
const getWinner = (applicants, winnerObject) => {
    const participantAmount = Object.keys(applicants).length
    const result = getRandomNumberInRange(0, participantAmount)
    const ticketNumber = Object.keys(applicants)[result]

    return { ...winnerObject, ...applicants[ticketNumber]}
}

const resultWinner = getWinner(winnerApplicants, todayWinner)
console.log('resultWinner', resultWinner)