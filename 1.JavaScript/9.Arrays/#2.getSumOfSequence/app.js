const getSumOfSequence = number => {
    let arrayNumbers = []
    for (let i = 1; i <= number; i++) {
        arrayNumbers.push(i)
    }
    const firstElement = arrayNumbers[0]
    const lastElement = arrayNumbers[arrayNumbers.length - 1]
    const total = firstElement + lastElement
    console.log(`${total} ([${arrayNumbers}], ${firstElement}+${lastElement}=${total})`)
}

getSumOfSequence(5)