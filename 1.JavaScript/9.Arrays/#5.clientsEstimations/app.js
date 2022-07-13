const clientsEstimations = []

const askClientToGiveEstimation = number => number >= 1 && number <= 10
    ? clientsEstimations.push(number)
    : false

for (let i = 0; i < 5; i++) {
    const number = Number(prompt('How would you rate our coffee shop from 1 to 10?'))
    askClientToGiveEstimation(number)
}

const goodEstimations = clientsEstimations.filter(value => value > 5)
const notGoodEstimations = clientsEstimations.filter(value => value <= 5)

alert(`Total positive ratings: ${goodEstimations.length}
Total negative ratings: ${notGoodEstimations.length}`)