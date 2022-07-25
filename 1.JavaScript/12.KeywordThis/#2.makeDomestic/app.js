const dog = {
    name: 'Charlie',
    type: 'dog',
    makeSound() {
        return 'Woof-Woof'
    }
}

const bird = {
    name: 'Petya',
    type: 'sparrow',
    makeSound() {
        return 'Tweet-Tweet'
    }
}

function makeDomestic(isDomestic) {
    alert(`A ${this.type} called ${this.name} says ${this['makeSound']()}`)
    return console.log({
        name: this.name,
        type: this.type,
        isDomestic,
        makeSound() {
            this['makeSound']()
        }
    })
}

makeDomestic.bind(dog, true)()
makeDomestic.call(bird, false)
makeDomestic.apply(bird, [false])