const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const first = matrix[0]
const second = matrix[1]
const third = matrix[2]
const arrayByIndex = [...first, ...second, ...third]
console.log(arrayByIndex)

const arrayByReduce = matrix.reduce((total, currentValue) => total = [...total, ...currentValue])
console.log(arrayByReduce)