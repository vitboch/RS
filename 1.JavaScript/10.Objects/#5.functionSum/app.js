function sum(...numbers) {
    return numbers.reduce((a, i) => a + i)
}

console.log(sum(1, 2, 3))
console.log(sum(2, 2))
console.log(sum(10, 15, 249, 653, 846))