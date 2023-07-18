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


inputField.addEventListener('input', async () => {
    const inputValue = inputField.value
    if (weatherImage.class == 'sunny') {
        weatherImage.classList.remove('sunny')
        body.classList.remove('sun')
    } else if (weatherImage.class == 'rainy') {
        weatherImage.classList.remove('rainy')
        body.classList.remove('rain')
    }
    let data = await returnAPI(inputValue)
    city.textContent = data.location.name
    country.textContent = data.location.country
    temperature.textContent = unit == 'Celcius' ? data.current.temp_c + '°' : data.current.temp_f  + '°'
    if (data.current.condition.text == 'Sunny') {
        weatherImage.classList.add('sunny')
        body.classList.add('sun')
    } else {
        weatherImage.classList.add('rainy')
        body.classList.add('rain')
    }
})
toggleUnits.addEventListener('click', () => {
    if (unit == 'Celcius') {
        unit = 'Fahrenheit' 
    } else {
        unit = 'Celcius'
    }
})
// console.log(returnAPI('London'))

