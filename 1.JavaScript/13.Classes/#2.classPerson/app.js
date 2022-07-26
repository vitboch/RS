class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    compareAge(person) {
        alert(this['age'] >= person['age']
            ? `${this['name']} is older than ${person.name}`
            : `${this['name']} is younger than ${person.name}`)
    }
}

const person1 = new Person('Maksim', 24)
const person2 = new Person('Svetlana', 36)
const person3 = new Person('Irina', 23)

person1.compareAge(person2)
person2.compareAge(person3)
person3.compareAge(person1)