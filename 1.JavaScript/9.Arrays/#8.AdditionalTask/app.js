const getMathResult = expression => {
    let numbers = []
    let sign = ''

    for (let i = 0; i < expression.length; i++) {
        let number = Number(expression[i])

        if (!isNaN(number)) {
            numbers.push(number)
        }

        if (expression[i] === '>'
            || expression[i] === '<'
            || expression[i] === '='
            || expression[i] === '+'
            || expression[i] === '-'
            || expression[i] === '*'
            || expression[i] === '/') {
            sign += expression[i]
        }
    }

    if (sign.length !== 1) return console.log('Error')

    switch (sign) {
        case '>': return console.log(numbers[0] > numbers[1])
        case '<': return console.log(numbers[0] < numbers[1])
        case '=': return console.log(numbers[0] === numbers[1])
        case '+': return console.log(numbers[0] + numbers[1])
        case '-': return console.log(numbers[0] - numbers[1])
        case '*': return console.log(numbers[0] * numbers[1])
        case '/': return console.log(numbers[0] / numbers[1])
    }
}

getMathResult(["200", "+", 300])
getMathResult(["20", "-", "5"])
getMathResult([100, "/", 100])
getMathResult([2, "-", 2])
getMathResult(["5", ">", "10"])
getMathResult(["5", "<", "10"])
getMathResult(["1", "=", 1])
getMathResult(["1", "**", 1])
getMathResult(["100", "hello", "javascript", , "help200", "+", 4])