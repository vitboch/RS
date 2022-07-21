const peopleWithVisa = [
    {
        firstName: 'Stasia',
        lastName: 'Ward',
        criminalRecord: true,
        passportExpiration: '19.06.2023'
    },
    {
        firstName: 'Elliot',
        lastName: 'Baker',
        criminalRecord: false,
        passportExpiration: '04.06.2021'
    },
    {
        firstName: 'Leighann',
        lastName: 'Scott',
        criminalRecord: true,
        passportExpiration: '31.07.2022'
    },
    {
        firstName: 'Nick',
        lastName: 'Pop',
        criminalRecord: false,
        passportExpiration: '31.12.2021'
    }
]

const allowVisa = data => {
    return data.filter(person => {
        const date = person['passportExpiration'].split('.')
        const [day, month, year] = date
        return new Date() < new Date(year, month - 1, day) && person['criminalRecord'] === false
    })
}

const result = allowVisa(peopleWithVisa)
console.log('result', result)