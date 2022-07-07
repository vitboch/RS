const clientName = prompt('Enter customer name')
let clientSpentToday = Number(prompt('How much did the customer spend today?'))
let clientSpentForAllTime = Number(prompt('How much has the client spent over the entire time?'))

if (isNaN(clientSpentForAllTime && clientSpentToday)
    || (clientSpentForAllTime && clientSpentToday) === 0) {
    alert('The amount the customer has spent all time and spent today must be a number! Reload the page to try again.')
} else {
    let discount

    if (clientSpentForAllTime < 100) {
        discount = 0
    } else if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
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
}