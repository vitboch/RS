const student = {
    stack: ['HTML'],
    level: 1,
    improveLevel() {
        this.level < 5 ? this.stack.push(technologyStack[this.level]) : false
        this.level++
        this.level > 5 ? alert('The student has learned all the technologies!') : false
        return this
    }
}

const technologyStack = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS']

student
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()

console.log(student)