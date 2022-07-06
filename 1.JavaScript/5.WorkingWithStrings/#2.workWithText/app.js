const myName = 'Vitaly'
const programmingLanguage = 'JavaScript'
const courseCreatorName = 'Vladilen'
const reasonText = 'it\'s exciting!'
const numberOfMonth = 'seven'

let myInfoText = `Hello everyone!
My name is ${myName}.
I am currently studying ${programmingLanguage} in the programmingLanguage course with ${courseCreatorName}.
I want to become a web developer because ${reasonText}.
Before that, I studied ${programmingLanguage} ${numberOfMonth} months.
I am sure that I will pass this course to end!`

// 1
myInfoText = myInfoText.replaceAll('JavaScript', 'JAVASCRIPT')

// 2
console.log(myInfoText)

// 3
console.log(myInfoText.length)

// 4
console.log(myInfoText[0], myInfoText[myInfoText.length-1])