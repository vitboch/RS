//Function declaration
function getName1(name) {
    return `Name is ${name}`
}

// Function expression
const getName2 = function(name) {
    return `Name is ${name}`
}

// Arrow function expression
const getName3 = name =>`Name is ${name}`

console.log(getName1('Elon'))
console.log(getName2('John'))
console.log(getName3('Phil'))