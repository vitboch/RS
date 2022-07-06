const question1 = 'How much is 2 + 2?'
const answer1 = 4

const question2 = 'How much is 2 * 2?'
const answer2 = 4

const question3 = 'Petya had 5 apples. He ate 3 of them and gave 1 to a friend. How many apples does Peter have left?'
const answer3 = 1

const question4 = 'Masha had 10 sweets. She ate 2 and gave 1 to a friend. After that, mom gave Masha 5 more sweets. ' +
    'How many sweets did Masha have left in the end?'
const answer4 = 12

const question5 = 'How much is 2 + 2 * 2?'
const answer5 = 6

let correctAnswers = 0
let incorrectAnswers = 0

const answerUser1 = Number(prompt(question1))
if (answer1 === answerUser1) {
    alert('Correct Answer')
    correctAnswers++
} else {
    alert('Incorrect Answer')
    incorrectAnswers++
}

const answerUser2 = Number(prompt(question2))
if (answer2 === answerUser2) {
    alert('Correct Answer')
    correctAnswers++
} else {
    alert('Incorrect Answer')
    incorrectAnswers++
}

const answerUser3 = Number(prompt(question3))
if (answer3 === answerUser3) {
    alert('Correct Answer')
    correctAnswers++
} else {
    alert('Incorrect Answer')
    incorrectAnswers++
}

const answerUser4 = Number(prompt(question4))
if (answer4 === answerUser4) {
    alert('Correct Answer')
    correctAnswers++
} else {
    alert('Incorrect Answer')
    incorrectAnswers++
}

const answerUser5 = Number(prompt(question5))
if (answer5 === answerUser5) {
    alert('Correct Answer')
    correctAnswers++
} else {
    alert('Incorrect Answer')
    incorrectAnswers++
}

alert(`End of test! Correct answers - ${correctAnswers}; Incorrect answer - ${incorrectAnswers}`)