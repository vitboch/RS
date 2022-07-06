let i = 0
while (i < 3) {
    let newStudent = prompt('Enter the name of the new student!').trim()
    alert(`Welcome, ${newStudent}!`)
    i++
}

let index = 0
do {
    let newStudent = prompt('Enter the name of the new student!').trim()
    alert(`Welcome, ${newStudent}!`)
    index++
} while (index < 3)