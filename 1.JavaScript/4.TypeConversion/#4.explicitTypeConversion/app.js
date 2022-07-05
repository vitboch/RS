// 1
console.log(Number(' 1 2 3 4 5'), 'my answer:', NaN)

// 2
console.log(Number('1234 5'), 'my answer:', NaN)

// 3
console.log(Number('12345'), 'my answer:', 12345)

// 4
console.log(String(false),'my answer:', 'false')

// 5
console.log(Boolean(0000000), 'my answer:', false)

// 6
console.log(Boolean(0.0000001), 'my answer:', true)

// 7
console.log(String(undefined), 'my answer:', 'undefined')

// 8
console.log(Number('100f'), 'my answer:', NaN)

// 9
console.log(Number('100'), 'my answer:', 100)

// 10
console.log(Number('000001'), 'my answer:', 1)