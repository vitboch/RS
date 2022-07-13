const coffees = ["Latte", "Cappuccino", "Americano"]
const prices = [1.5, 1, 2]
const updatedPrices = prices.map(value => value + 0.5)

prices.forEach((price, index) => alert(`${coffees[index]} now costs €${updatedPrices[index]}`))