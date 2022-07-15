const goals = [8, 1, 1, 3, 2, -1, 5]

const countingStatistics = goals => {
    // 1
    let numberOfGoals = Math.max(...goals)
    const number = goals.indexOf(numberOfGoals) + 1
    alert(`The most scoring match was number ${number}. ${numberOfGoals} goals were scored.`)

    // 2
    const goalsScored = goals.filter(item => item > 0)
    numberOfGoals = Math.min(...goalsScored)
    const numbers = []
    goalsScored.forEach((goal, i) =>
        goal === numberOfGoals
            ? numbers.push(i + 1)
            : false
    )
    alert(`The least scoring matches were number ${numbers}. ${numberOfGoals} goal(s) were scored during each match.`)

    // 3
    numberOfGoals = 0
    goalsScored.forEach(num => numberOfGoals += num)
    alert(`The total number of goals for the season is ${numberOfGoals}`)

    // 4
    const answer = goals.some(goal => goal < 0) ? 'Yes' : 'No'
    alert(`There were automatic defeats: ${answer}`)

    // 5
    numberOfGoals = Math.round(goals.reduce((acc, score) => acc + score) / goalsScored.length)
    alert(`The average number of goals per match is ${numberOfGoals}`)

    // 6
    const goalsOrdered = goalsScored.sort((a, b) => a - b)
    alert(`Goals in ascending order: ${goalsOrdered.join(', ')}`)
}

countingStatistics(goals)