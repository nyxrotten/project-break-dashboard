const getWeatherHours = async () => {
    try {
        const response = await fetch (forecastBase+apiKey+ciudad+forecastHours);
        if (!response.ok) {
            throw new Error("Error de API", response.status);
        } 
        const data = await response.json();
        const forecastDayHours = data.forecast.forecastday[0].hour
        const hours = document.querySelector('.hours');
        
        forecastDayHours.forEach((hour) => {
            const liDom = document.createElement('li');
            liDom.innerHTML = `
                        <img src="${hour.condition.icon}">
                        <p>${hour.condition.text}</p>
                        <p>${hour.temp_c}</p>
                        <p>${hour.wind_kph} ${hour.wind_dir}</p>`
                        hours.appendChild(liDom);

        })

        
    }
    catch (error) {
        console.log('Error', error)
    }

};

getWeatherHours();