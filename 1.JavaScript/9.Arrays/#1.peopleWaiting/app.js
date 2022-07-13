const peopleWaiting = [
    'Kristina',
    'Oleg',
    'Kirill',
    'Maria',
    'Svetlana',
    'Artem',
    'Gleb'
]

const mailQueue = peopleWaiting.length

const giveParcel = () => {
    const person = peopleWaiting.shift()
    console.log(`${person} received the package. There were ${peopleWaiting.length} people left in the queue. `)
}

const leaveQueueWithoutParcel = () => {
    const person = peopleWaiting.pop()
    console.log(`${person} did not receive the package and left the queue.`)
}

for (let i = 0; i < mailQueue; i++) {
    i < 3 ? giveParcel() : leaveQueueWithoutParcel()
}