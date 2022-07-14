const checkQuestionAnswer = (question, correctAnswer) => {
        const answer = prompt(question)
        correctAnswer.toLowerCase() === answer.trim().toLowerCase()
            ? alert('Answer is correct')
            : alert('Answer is incorrect')
}

checkQuestionAnswer('Is watermelon a fruit or a berry?', "Berry")
checkQuestionAnswer('How many teeth does an adult have on average?', "32")
checkQuestionAnswer('What is the name of the smallest bird in the world?', 'Hummingbird')