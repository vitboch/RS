const groceries = {
    '73Wakv': {
        name: 'Orange Juice',
        price: 1.5,
        discount: 10
    },
    '5L3db9': {
        name: 'Chocolate',
        price: 2,
        discount: 0
    }
}

const shoppingBag = [
    { productId: '73Wakv', count: 3 },
    { productId: '5L3db9', count: 23 }
]

const getTotalPriceOfShoppingBag = shoppingBag => {
    let total = 0

    shoppingBag.forEach(item => {
        const count = item.count
        const price = groceries[item['productId']]['price']
        const discount = groceries[item['productId']]['discount']

        total += (price - (price * discount / 100)) * count
    })
    return Number(total.toFixed(2))
}

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag)
console.log('totalPrice', totalPrice)