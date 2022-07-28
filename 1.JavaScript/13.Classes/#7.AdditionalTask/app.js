class CarService {
    static DefaultWorkingHours = {
        from: '9:00',
        till: '20:00',
    }

    constructor(name, workingHours) {
        this.name = name
        this.workingHours = workingHours || CarService.DefaultWorkingHours
    }

    repairCar(carName) {
        const checkTime = () => {
            const hourFrom = Number(this['workingHours']['from'].split(':')[0])
            const hourTill = Number(this['workingHours']['till'].split(':')[0])
            const hourNow = new Date().getHours()

            hourFrom > hourNow || hourTill <= hourNow
                ? alert('Unfortunately, we are currently closed. Come back tomorrow')
                : alert(`Let's repair your car ${carName}! Please wait`)
        }

        !carName
            ? console.error('You need to enter the name of the car in order to repair it')
            : checkTime()
    }
}

const carService = new CarService('RepairCarNow', {
    from: '8:00',
    till: '20:00'
})
carService.repairCar('BMW')