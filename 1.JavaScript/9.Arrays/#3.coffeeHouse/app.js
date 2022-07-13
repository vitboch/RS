const coffees = ['Latte', 'Cappuccino', 'Americano']
const getCapitalLetter = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
const coffeeName = getCapitalLetter(prompt('Search coffee by name:').trim())
const number = coffees.indexOf(coffeeName)

coffees.indexOf(coffeeName) !== -1
    ? alert(`Take your favorite ${coffees[number]}. It is the ${number + 1} most popular in our coffee shop.`)
    : alert('Unfortunately, this type of coffee is not available')