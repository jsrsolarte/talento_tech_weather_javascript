export function updateDomElement(weatherData) {
    $('#weather-info').html(`
        <h2>${weatherData.name}</h2>
        <p>Temperatura: ${weatherData.main.temp}</p>
        <p>Clima: ${weatherData.weather[0].description}</p>        
        `)
}

export function changeBackground(weatherData) {
    const condition = weatherData.weather[0].main
    if (condition.includes('Clouds')) {
        $('body').css('background-image', "url('./assets/cloudy.jpg')")
    } else if (condition.includes('Rain')) {
        $('body').css('background-image', "url('./assets/rainy.jpg')")
    } else {
        $('body').css('background-image', "url('./assets/sunny.jpg')")
    }
}