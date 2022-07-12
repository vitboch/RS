const getSumOfNumbers = (number, type = 'odd') => {
    let sum = 0
    let i = 0
    let step = 2

    if (type === 'odd') {
        i = 1
    } else if (type === 'even') {
        i = 2
    } else if (type === '') {
        step = 1
    } else return 'The type parameter can be one of 3 values: "odd", "even" and ""'

    while (i <= number) {
        sum += i
        i += step
    }
    return sum
}

console.log(getSumOfNumbers(10, 'odd'))
console.log(getSumOfNumbers(10, 'even'))
console.log(getSumOfNumbers(10, ''))
console.log(getSumOfNumbers(10, null))