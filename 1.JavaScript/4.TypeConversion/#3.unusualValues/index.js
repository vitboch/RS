// console.log
console.log(Number(console.log), Boolean(console.log), String(console.log))

// { name: 'Maxim' }
console.log(Number({ name: 'Maxim' }), Boolean({ name: 'Maxim' }), String({ name: 'Maxim' }))

// Symbol('key')
console.log('!!!ERROR:Number(Symbol("key"))!!!', Boolean(Symbol('key')), String(Symbol('key')))

// Number
console.log(Number(Number), Boolean(Number), String(Number))

// ''
console.log(Number(''), Boolean(''), String(''))

// 0
console.log(Number(0), Boolean(0), String(0))

// -10
console.log(Number(-10), Boolean(-10), String(-10))

// '-105'
console.log(Number('-105'), Boolean('-105'), String('-105'))
