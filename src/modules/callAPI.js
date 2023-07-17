async function returnAPI (city, cityField, countryField, temperature, unit, img, background) {
    try {
        let forecast = await fetch(`https://api.weatherapi.com/v1/current.json?key=443808d01cd64ca3894111737231207&q=${city}`)
        forecast = await forecast.json()
        cityField.textContent = forecast.location.name
        countryField.textContent = forecast.location.country
        temperature.textContent = unit == 'Celcius' ? forecast.current.temp_c + '°' : forecast.current.temp_f  + '°'
        if (forecast.current.condition.text == 'Sunny') {
            img.classList.add('sunny')
            background.classList.add('sun')
        } else {
            img.classList.add('rainy')
            background.classList.add('rain')
        }
    } 
    catch {
        console.log('invalid input')
    }
}

export {returnAPI}