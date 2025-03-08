const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchBtn");
const image = document.querySelector(".weather-img");
const temprature = document.querySelector(".temprature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humid");
const wind = document.getElementById("wind");
const error = document.querySelector(".location-not-found");
const weatherBody = document.querySelector(".weather-body");

async function getWeather(city) {
    const my_api = "a4499eb0508b0bbab604611bbc366675";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${my_api}`;
    let weatherData = await fetch(url).then(resolve => resolve.json());
    if (weatherData.cod === '404') {
        error.style.display = "flex";
        weatherBody.style.display = "none";
    }
    else {
        error.style.display = "none";
        weatherBody.style.display = "flex";
        temprature.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}<sup>°C</sup>`;
        description.innerHTML = weatherData.weather[0].description;
        wind.innerHTML = `${weatherData.wind.speed} Km/H`;
        humidity.innerHTML = `${weatherData.main.humidity}%`;

        switch (weatherData.weather[0].main) {
            case 'Clouds':
                image.src = "./images/cloud.png";
                break;
            case 'Clear':
                image.src = "./images/clear.png";
                break;
            case 'Mist':
                image.src = "./images/mist.png";
                break;
            case 'Rain':
                image.src = "./images/rain.png";
                break;
            case 'Snow':
                image.src = "./images/snow.png";
                break;
            default:
                image.src = "./images/404.png";
                break;
        }
        console.log(weatherData);
    }
}
searchBtn.addEventListener('click', () => {
    getWeather(inputBox.value);
});

