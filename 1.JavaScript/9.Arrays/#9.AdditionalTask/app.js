const firstArray = []
for (let i = 0; i < 3; i++) {
    const secondArray = []
    for (let index = 1; index <= 5; index++) {
        secondArray.push(index)
    }
    firstArray.push(secondArray)
}
console.log(firstArray)