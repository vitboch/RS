class Developer {
    constructor(fullName, age, position) {
        this.fullName = fullName
        this.age = age
        this.position = position
        this.technologies = []
    }

    code() {}

    learnNewTechnologies(technology) {
        this['technologies'].push(technology)
    }
}

class JuniorDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age)
        this.position = 'Junior'
        this.technologies = ['HTML', 'CSS', 'JavaScript']
    }

    code() {
        console.log(`${this.position}-developer writes code...`)
    }
}

class MiddleDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age)
        this.position = 'Middle'
        this.technologies = ['HTML', 'CSS', 'JavaScript', 'React']
    }

    code() {
        console.log(`${this.position}-developer writes code...`)
    }
}

class SeniorDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age)
        this.position = 'Senior'
        this.technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS']
    }

    code() {
        console.log(`${this.position}-developer writes code...`)
    }
}

const juniorDeveloper = new JuniorDeveloper('Anastasia', 20)
const middleDeveloper = new MiddleDeveloper('Igor', 25)
const seniorDeveloper = new SeniorDeveloper('Maksim', 30)

const developers = [juniorDeveloper, middleDeveloper, seniorDeveloper]
developers.forEach(developer => developer.code())

seniorDeveloper.learnNewTechnologies('Docker')

developers.forEach(developer => console.log(
    developer['fullName'],
    developer['age'],
    developer.position,
    developer['technologies']))