const URL = "https://api.openweathermap.org/data/2.5/weather"
const KEY = "22eb2b54135adc2e7fcd707d95417a55"

export async function getWeather(city) {
    const response = await fetch(`${URL}?appid=${KEY}&q=${city}&units=metric&lang=es`)
    if(!response.ok){
        throw new Error("Error en la consulta a la API")
    }
    return response.json()
}
