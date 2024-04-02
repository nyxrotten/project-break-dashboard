const baseURL = "https://api.weatherapi.com/v1/current.json?key="
const apiKey = "f4d4919561e748e3b8e94204243003";
const ciudad = "Zaragoza"
const endpoint = `${baseURL}${apiKey}&q=${ciudad}`;



let weatherBoxMain = document.querySelector(".weatherBoxMain")

const getWeatherNow = async () => {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error("Error de API", response.status);
        }
        const data = await response.json();
        let current = data.current;

        const weatherGeneral = document.querySelector('.weatherGeneral')
        weatherGeneral.innerHTML = `<img id="weatherIcon" src="${current.condition.icon}">
                                    <h2 id="weatherText">${current.condition.text}</h2>`
        
        const weatherTemperature = document.querySelector('#wheatherTemperature')
        weatherTemperature.innerHTML = `<h1 id="weatherTemperature">${current.temp_c}º</h1>
                                    <h3 id="weatherTempReal"> ${current.feelslike_c}º</h3>`

        const windInfo = document.querySelector('#windInfo')
        windInfo.innerHTML = `<h4>Wind ${current.wind_kph} km/h</h4>
                                <h4>Direction ${current.wind_dir}</h4>`
        
        const cloudInfo = document.querySelector('#cloudInfo')
        cloudInfo.innerHTML = `<h4>Clouds ${current.cloud}%</h4>
                                <h4>Rain ${current.precip_mm}mm</h4>`

        const humUvInfo = document.querySelector('#humUvInfo')
        humUvInfo.innerHTML = `<h4>UV ${current.uv}</h4>
                                <h4>Humidity ${current.humidity}%</h4>`

     
     
       /* weatherBoxMain.innerHTML = `
            <ul>
                <li>Temperatura actual: ${current.temp_c}º</li>
                <li>${current.condition.text}</li>
                <img src="${current.condition.icon}">
                <li>Rachas de ${current.wind_kph} Km/h</li>
                <li>Dirección ${current.wind_dir}</li>
                <li>Lluvias ${current.precip_mm}</li>
                <li>Humedad ${current.humidity}%</li>
                <li>Nubes ${current.cloud}%</li>
                <li>Sensación ${current.feelslike_c} º</li>
                <li>Índice UV ${current.uv}</li>
                </ul>`*/
        console.log(current)

    }
    catch (error) {
    console.log("Error", error);
    }

};

getWeatherNow()

const getWeatherThisWeek = async () => {
    try {
        const response = await fetch (endpoint)
    }
    catch (error) {
        console.log('Error', error)
    }
};

getWeatherThisWeek()


const getTodayEndpoint = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate()
    return `${endpoint}&q=${year}-${month}-${day}`
}

getTodayEndpoint()

console.log(getTodayEndpoint())