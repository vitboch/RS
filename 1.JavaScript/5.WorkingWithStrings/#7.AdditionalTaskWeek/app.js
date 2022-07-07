const javaScriptDescription = 'JavaScript is a multi-paradigm programming language. Supports object-oriented, ' +
    'imperative and functional styles. It is an implementation of the ECMAScript specification. ' +
    'JavaScript is commonly used as an embeddable language for programmatic access to application objects.'

const newString = javaScriptDescription
    .slice(0, Math.floor(javaScriptDescription.length / 2))
    .replaceAll('a', 'A')
    .replaceAll(' ', '')
    .repeat(3)

console.log(newString[Math.floor(newString.length / 2)])
console.log(newString)