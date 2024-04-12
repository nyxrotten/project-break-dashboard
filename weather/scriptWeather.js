const baseURL = "https://api.weatherapi.com/v1/current.json?key="
const apiKey = "f4d4919561e748e3b8e94204243003&q=";
const ciudad = "Zaragoza"
const endpoint = baseURL+apiKey+ciudad;
const forecastBase = "https://api.weatherapi.com/v1/forecast.json?key=";
const forecastDays = "&days=7&aqi=no&alerts=no";
const forecastHours = "&days=1&aqi=no&alerts=no";


let weatherBoxMain = document.querySelector(".weatherBoxMain")

const getWeatherNow = async () => {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error("Error de API", response.status);
        }
        const data = await response.json();
        const current = data.current;

        const weatherGeneral = document.querySelector('.weatherGeneral')
        weatherGeneral.innerHTML = `<img id="weatherIcon" src="${current.condition.icon}">
                                    <h2 id="weatherText">${current.condition.text}</h2>`
        
        const weatherTemperature = document.querySelector('#wheatherTemperature')
        weatherTemperature.innerHTML = `<h1 id="weatherTempNumb">${current.temp_c}º</h1>
                                        <p>Real</p>
                                        <h3 id="weatherTempRealNumb"> ${current.feelslike_c}º</h3>
                                        <p>Feels Like</p>`

        const windInfo = document.querySelector('#windInfo')
        windInfo.innerHTML = `<p>Wind ${current.wind_kph} km/h</p>
                                <p>Direction ${current.wind_dir}</p>`
        
        const cloudInfo = document.querySelector('#cloudInfo')
        cloudInfo.innerHTML = `<p>Clouds ${current.cloud}%</p>
                                <p>Rain ${current.precip_mm}mm</p>`

        const humUvInfo = document.querySelector('#humUvInfo')
        humUvInfo.innerHTML = `<p>UV ${current.uv}</p>
                                <p>Humidity ${current.humidity}%</p>`

    }
    catch (error) {
    console.log("Error", error);
    }

};

getWeatherNow()

const getWeatherThisWeek = async () => {
    try {
        const response = await fetch (forecastBase+apiKey+ciudad+forecastDays);
        if (!response.ok) {
            throw new Error("Error de API", response.status);
        } 
        const data = await response.json();
        const forecast = data.forecast.forecastday;

        const weatherForecast = document.querySelector('.weatherForecast');
        forecast.forEach((weekDay) => {
            const divDom = document.createElement('div');
            divDom.classList.add("weatherForecastDay");
            
            weatherForecast.appendChild(divDom);
            divDom.innerHTML = `<img src="${weekDay.day.condition.icon}">
                                <h3 id="weekDayMaxTemp">${weekDay.day.maxtemp_c}</h3>
                                <h4 id="weekDayMinTemp">${weekDay.day.mintemp_c}</h4>
                                <h5></h5>`
        })
    }
    catch (error) {
        console.log('Error', error)
    }
};

getWeatherThisWeek();

// const getWeatherHours = async () => {
//     try {
//         const response = await fetch (forecastBase+apiKey+ciudad+forecastHours);
//         if (!response.ok) {
//             throw new Error("Error de API", response.status);
//         } 
//         const data = await response.json();
//         const forecastDayHours = data.forecast.forecastday[0].hour
//         const hours = document.querySelector('.hours');
//         console.log(hours)
        
//         forecastDayHours.forEach((hour) => {
//             const liDom = document.createElement('li');
//             liDom.innerHTML = `
//                         <img src="${hour.condition.icon}">
//                         <p>${hour.condition.text}</p>
//                         <p>${hour.temp_c}</p>
//                         <p>${hour.wind_kph} ${hour.wind_dir}</p>`
//                         hours.appendChild(liDom);

//         })

        
//     }
//     catch (error) {
//         console.log('Error', error)
//     }

// };

// getWeatherHours();


