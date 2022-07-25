const footballer = {
    fullName: 'Cristiano Ronaldo',
    attack() {
        console.log(`${this.fullName} is now on the ball and starting to attack!`)
    },
    scoreGoal(sound) {
        console.log(`${this.fullName} scored a goal! Blimey!`)
        this.celebrate(sound)
    },
    celebrate(sound) {
        console.log(sound)
    },
    goToSubstitution: function (newPlayer) {
        console.log(
            `${this.fullName} is going to be replaced. ${newPlayer} enters the game`
        )
    }
}

const attack = footballer.attack
const score = footballer.scoreGoal
const substitute = footballer.goToSubstitution
attack.bind(footballer)()
score.call(footballer, 'Sííííí')
substitute.apply(footballer, ['Paulo Dibala'])