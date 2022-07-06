const userText = prompt('Enter text').trim()

const wordFromText = prompt('Enter a word from the text')
    .trim()

const indexOfWord = userText.indexOf(wordFromText)

const string = userText.slice(0, indexOfWord)

alert(`Result: ${string}`)