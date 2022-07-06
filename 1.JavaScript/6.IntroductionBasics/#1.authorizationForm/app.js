const existingUserLogin = 'the_best_user'
const existingUserPassword = '12345678'

const userLogin = prompt('Enter login').trim()
const userPassword = prompt('Enter password').trim()

userLogin === existingUserLogin && userPassword === existingUserPassword
    ? alert(`Welcome ${userLogin}!`)
    : alert('Login and (or) Password entered incorrectly!')