let health = prompt('Enter the number of parameter "health" for the character')
console.log(health, Number(health))
health = Number(health)
if (health <= 0 || !health) {
    alert('The parameter "health" must be greater than zero!')
} else {
    alert(`The parameter "health" is ${health}`)
}