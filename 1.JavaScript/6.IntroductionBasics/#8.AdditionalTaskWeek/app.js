const password = prompt('Enter password')
const valid = 'The password is valid. Welcome to your account!'
const notValid = 'The password does not meet the conditions! Reload the page and try entering it again.'

let numbers = 0
let letters = 0

if (password.length >= 3 && password.length <= 20) {
    for (let i = 0; i < password.length; i++) {
        const symbol = password[i]
        if (!isNaN(Number(symbol))) {
            numbers++
        } else if (symbol === symbol.toUpperCase()) {
            letters++
        }
    }

    if (numbers && letters) {
        alert(valid)
    } else {
        alert(notValid)
    }
} else {
    alert(notValid)
}