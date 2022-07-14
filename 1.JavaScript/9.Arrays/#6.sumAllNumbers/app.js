const numbers = [10, 4, 100, -5, 54, 2]

// 1 for
let sum1 = 0
for (let i = 0; i < numbers.length; i++) {
    sum1 += numbers[i] ** 3
}
console.log(sum1)

// 2 for...of
let sum2 = 0
for (let number of numbers) {
    sum2 += number ** 3
}
console.log(sum2)

// 3 forEach()
let sum3 = 0
numbers.forEach((num) => sum3 += num ** 3
)
console.log(sum3)

// 4 reduce()
const sum4 = numbers.reduce((acc, item) => acc += item ** 3)
console.log(sum4)