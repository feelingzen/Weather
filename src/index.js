import { returnAPI } from "./modules/callAPI.js"
const city = document.querySelector('.city')
const country = document.querySelector('.country')
const temperature = document.querySelector('.temperature')
const inputField = document.querySelector('.inputField')
const weatherImage = document.querySelector('main').firstChild
const body = document.querySelector('body')
const toggleUnits = document.querySelector('button')
let unit = 'Celcius'
// unit = 'Fahrenheit'


inputField.addEventListener('input', () => {
    const inputValue = inputField.value
    if (weatherImage.class == 'sunny') {
        weatherImage.classList.remove('sunny')
        body.classList.remove('sun')
    } else if (weatherImage.class == 'rainy') {
        weatherImage.classList.remove('rainy')
        body.classList.remove('rain')
    }
    returnAPI(inputValue, city, country, temperature, unit, weatherImage, body)
})
toggleUnits.addEventListener('click', () => {
    if (unit == 'Celcius') {
        unit = 'Fahrenheit' 
    } else {
        unit = 'Celcius'
    }
})
// console.log(returnAPI('London'))

