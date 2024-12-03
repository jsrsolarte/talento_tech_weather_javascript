import { updateDomElement, changeBackground } from "./dom-utils.js"
import { getWeather } from "./weather.js"
import { addToHistory, displayHistory } from "./history.js"


$(document).ready(function () {
    $("#weather-form").on("submit", submitHandler)
})

async function submitHandler(e) {
    e.preventDefault()
    const city = $("#city-input").val()
    const data = await getWeather(city)
    console.log(data)
    updateDomElement(data)
    changeBackground(data)
    addToHistory(city)
    displayHistory()
}
