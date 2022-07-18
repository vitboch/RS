const student = {
    fullName: 'Maksim',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React']
}

const giveJobToStudent = (student, jobName) => {
    const person = {
        ...student,
        job: jobName
    }
    return alert(`Congratulations! Student ${person['fullName']} has a new job! Now he is a ${person['job']}`)
}

const updatedStudent = giveJobToStudent(student, 'Web developer')