let numbers = [10, 4, 100, -5, 54, 2]
let sum = 0

// for
for (let i = 0; i < numbers.length; i += 1) {
    numbers[i] = numbers[i] ** 3
    sum += numbers[i]
}
console.log(sum) // 1158411

console.log(numbers) // [ 1000, 64, 1000000, -125, 157464, 8 ]

// for of
sum = 0
for (let num of numbers) {
    // the array has already been raised to a power
    sum += num
}
console.log(sum) // 1158411