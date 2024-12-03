import { updateDomElement, changeBackground } from "./dom-utils.js"
import { getWeather } from "./weather.js"

let history = []

export function addToHistory(cityName){
    if(!history.includes(cityName)){
        history.push(cityName)
    }
}

export function displayHistory(){
    const historyDiv = $('#history')

    historyDiv.html('<h3>Historial de búsquedas:</h3>' + 
        history.map(cityName => `<p class="history-item" style="cursor: pointer; color: blue; text-decoration: underline;">
            ${cityName}
            </p>`).join("")
    )

    /*var string = '<h3>Historial de búsquedas:</h3>'

    for(let cityName; cityName< history.length; cityName++){
        string += `<p class="history-item" style="cursor: pointer; color: blue; text-decoration: underline;">
            ${cityName}
            </p>`
    }
    
    historyDiv.html(string)*/

    $('.history-item').on('click', clickCityHistoryHandler)
}


async function clickCityHistoryHandler(){
    const cityName = $(this).text()
    const data = await getWeather(cityName)
    console.log(data)
    updateDomElement(data)
    changeBackground(data)
}

