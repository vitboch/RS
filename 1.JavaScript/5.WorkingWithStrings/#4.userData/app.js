const userName = prompt('What is your name?')
    .toLowerCase()
    .trim()

const userAge = Number(
    prompt('How old are you?')
        .trim())

alert(`Your name is ${userName} and you are ${userAge} years old`)