const getKiller = (suspectInfo, deadPeople) => {
    const suspects = []
    for (const suspect in suspectInfo) {
        deadPeople.forEach(person => {
            suspectInfo[suspect].includes(person) ? suspects.push(suspect) : false
        })
    }

    let killer = []
    suspects.length === 0 ? killer = ['unknown'] : false
    suspects.length === 1 ? killer.push(suspects) : false

    for (let i = 0; i < suspects.length; i++) {
        for (let index = 0; index < i; index++) {
            suspects[index] === suspects[i] ? killer.push(suspects[i]) : false
        }
    }
    alert(`killer: ${killer}`)
}

getKiller(
    {
        James: ['Jacob', 'Bill', 'Lucas'],
        Johnny: ['David', 'Kyle', 'Lucas'],
        Peter: ['Lucy', 'Kyle']
    },
    ['Lucas', 'Bill']
)

getKiller(
    {
        Brad: [],
        Megan: ['Ben', 'Kevin'],
        Finn: []
    },
    ['Ben']
)