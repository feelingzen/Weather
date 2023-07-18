async function returnAPI (city) {
    try {
        let forecast = await fetch(`https://api.weatherapi.com/v1/current.json?key=443808d01cd64ca3894111737231207&q=${city}`)
        forecast = await forecast.json()
        return forecast
    } 
    catch {
        console.log('invalid input')
    }
}

export {returnAPI}