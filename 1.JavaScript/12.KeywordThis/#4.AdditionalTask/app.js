const attacker = {
    archer: 30,
    footSoldier: 55,
    cavalry: 10,
    artillery: 3,

    checkChancesToWin(defenderObject) {
        let ourArmyChances = 0
        this.archer > defenderObject['archer'] ? ourArmyChances += 1 : false
        this.footSoldier > defenderObject['footSoldier'] ? ourArmyChances += 1 : false
        this.cavalry > defenderObject['cavalry'] ? ourArmyChances += 1 : false
        this.artillery > defenderObject['artillery'] ? ourArmyChances += 1 : false

        const maximumChances = Object.keys(defenderObject).length
        return [ourArmyChances, maximumChances]
    },

    improveArmy() {
        this.archer += 5
        this.footSoldier += 5
        this.cavalry += 5
        this.artillery += 5
    },

    attack(defender) {
        const attackVsDefense = this.checkChancesToWin(defender)
        const ourArmyChances = attackVsDefense[0]
        const maximumChances = attackVsDefense[1]
        if (ourArmyChances / maximumChances < 0.7) {
            this.improveArmy()
            alert(`Our chances are equal ${ourArmyChances}/${maximumChances}. Reinforcement needed!`)
        } else alert('We have reinforcements! We will definitely win! Our chances are high!')
    }
}

const defender = {
    archer: 33,
    footSoldier: 50,
    cavalry: 40,
    artillery: 10
}

attacker.attack(defender)
attacker.attack(defender)
attacker.attack(defender)
