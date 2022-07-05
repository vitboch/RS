let year = 2022
console.log(Number(year), Boolean(year), String(year))

let stateYear = 'We are already in the middle of 2022'
console.log(Number(stateYear), Boolean(stateYear), String(stateYear))

let magicExists = true;
console.log(Number(magicExists), Boolean(magicExists), String(magicExists))

let carOwner = null;
console.log(Number(carOwner), Boolean(carOwner), String(carOwner))

let hamlet = undefined;
console.log(Number(hamlet), Boolean(hamlet), String(hamlet))

let car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2022,
    mileage: 5,
    sale: true
}
console.log(Number(car), Boolean(car), String(car));

let myBigint = 100n;
console.log(Number(myBigint), Boolean(myBigint), String(myBigint))

let myId = Symbol('id')
console.log('!!!ERROR:Number(myId)!!!', Boolean(myId), String(myId))