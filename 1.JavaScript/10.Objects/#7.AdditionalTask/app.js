const hero = {
    name: 'Batman',
    health: 100,
    heatEnemy(enemy) {
        enemy.health -= 10
    }
}

const enemy = {
    name: 'Joker',
    health: 100,
    heatHero(hero) {
        hero.health -= 10
    }
}

const getRandomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const startGame = (heroPlayer, enemyPlayer) => {
    while (heroPlayer['health'] > 0 && enemyPlayer['health'] > 0) {
        getRandomNumberInRange(0, 1) === 0 ? heroPlayer['heatEnemy'](enemyPlayer) : enemyPlayer['heatHero'](heroPlayer)
    }

    const winner = {}
    winner.name = heroPlayer['health'] > 0 ? heroPlayer.name : enemyPlayer.name
    winner.health = heroPlayer['health'] > 0 ? heroPlayer['health'] : enemyPlayer['health']

    alert(`${winner.name} has won! He has ${winner.health} health left`)
    return winner
}

startGame(hero, enemy)