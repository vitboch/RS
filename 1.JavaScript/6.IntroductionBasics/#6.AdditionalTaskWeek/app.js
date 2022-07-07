const clientName = 'Igor'
let clientSpentForAllTime = 110
let clientSpentToday = 25
let discount

if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
    discount = 10
} else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
    discount = 20
} else if (clientSpentForAllTime >= 500) {
    discount = 30
}

clientSpentToday -= clientSpentToday * discount / 100
clientSpentForAllTime += clientSpentToday

alert(`You get a discount in ${discount}%!`)
alert(`Thanks ${clientName}! To pay ${clientSpentToday}$. For all the time in our restaurant you spent ${clientSpentForAllTime}$.`)