const getDivisorsCount = (number = 1) => {
    if (number <= 0 || !Number.isInteger(number) || undefined) {
        return alert(`${number} must be an integer and greater than zero!`)
    }
    let count = 0
    let text = ''
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            text += i + ', '
            count++
        }
    }
    text = text.slice(0, text.length - 2)
    return `Returns ${count} (divisors - ${text})`
}

console.log(getDivisorsCount(4))
console.log(getDivisorsCount(5))
console.log(getDivisorsCount(12))
console.log(getDivisorsCount(30))