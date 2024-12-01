const URL = "https://api.openweathermap.org/data/2.5/weather"
const KEY = ""

$(document).ready(function () {
    $("#weather-form").on("submit", submitHandler)
})

async function getWeather(city) {
    const response = await fetch(`${URL}?appid=${KEY}&q=${city}&units=metric&lang=es`)
    data = response.json()
    return data
}

async function submitHandler(e) {
    e.preventDefault()
    const city = $("#city-input").val()
    data = await getWeather(city)
    console.log(data)
}
