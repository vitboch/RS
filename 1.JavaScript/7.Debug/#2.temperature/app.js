let temperatureInCelsius = prompt('Enter temperature in degrees Celsius');

console.log(typeof temperatureInCelsius, typeof Number(temperatureInCelsius))

temperatureInCelsius = Number(temperatureInCelsius)
if (temperatureInCelsius === 0) {
    alert('0 degrees Celsius is the freezing point of water')
} else if (temperatureInCelsius > 0) {
    alert('For water to freeze, the temperature must be 0 degrees Celsius or lower')
}

const temperatureInFahrenheit = (temperatureInCelsius * 9) / 5 + 32
console.log(temperatureInFahrenheit)

alert(`${temperatureInCelsius} degrees Celsius is ${temperatureInFahrenheit} по 
Fahrenheit.`)
