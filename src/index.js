import './style.css';
import Humidity from './humidity.png';
import Gust from './gust.png';

  function createInterface() {
    const container = document.createElement('div');
    const appName = document.createElement('header');
    const form = document.createElement('form');
    const searchBar = document.createElement('input');
    const submit = document.createElement('button');
    const weatherBox = document.createElement('div');
    const weatherInformation = document.createElement('div');
    const weatherLine = document.createElement('div');
    const weatherSubInformation = document.createElement('div');
    const cityName = document.createElement('span');
    const weatherTemperature = document.createElement('span');
    const weatherIcon = document.createElement('img');
    const feelsLikeTemp = document.createElement('span');
    const weatherCondition = document.createElement('span');
    const windCondition = document.createElement('span');
    const humidityCondition = document.createElement('span');
    const humidityImage = new Image();
    const gustImage = new Image();
    
    humidityImage.src = Humidity;
    gustImage.src = Gust;
    
    appName.textContent = "Weather App"
    searchBar.type = 'search';
    searchBar.id = 'search';

    async function showWeather() {
        try {
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=New+York&appid=78c5b0d1c5ebe06e9744589142cf4344&units=imperial', { mode:'cors'});
            const weatherData = await response.json();
            console.log(weatherData);
            const iconLink = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
            return (cityName.textContent = weatherData.name,
                weatherIcon.src = iconLink,
                weatherTemperature.textContent = Math.round(weatherData.main.temp) + "°F",
                feelsLikeTemp.textContent = "Feels like: " + Math.round(weatherData.main.feels_like)+ "°F",
                weatherCondition.textContent = weatherData.weather[0].main,
                windCondition.textContent = "Wind: " + Math.round(weatherData.wind.speed) + " mph" , 
                humidityCondition.textContent = "Humidity: " + Math.round(weatherData.main.humidity) + "%"
                );
        } catch(error) {
            console.error('error', error);
        } 
    };
    showWeather();

    form.addEventListener('submit', function(e) {
        getWeatherSearch();
        e.preventDefault();
        form.reset();
    });

    async function getWeatherSearch() {
        try {
            const searchInput = document.getElementById('search');
            const searchValue = searchInput.value;
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=78c5b0d1c5ebe06e9744589142cf4344&units=imperial`, { mode: 'cors' });
            const weatherData = await response.json();
            return (cityName.textContent = weatherData.name,
            weatherTemperature.textContent = Math.round(weatherData.main.temp)+ "°F", 
            feelsLikeTemp.textContent = "Feels like: " + Math.round(weatherData.main.feels_like) + "°F",
            weatherCondition.textContent = weatherData.weather[0].main,
            windCondition.textContent = "Wind: " + Math.round(weatherData.wind.speed) + weatherData.wind.speed.unit + " mph", 
            humidityCondition.textContent = "Humidity: " + Math.round(weatherData.main.humidity) + "%"
            );
        } catch(error) {
            console.error('error', error);
        } 
    };

    weatherBox.appendChild(cityName);
    weatherLine.appendChild(weatherIcon);
    weatherLine.appendChild(weatherTemperature);
    weatherInformation.appendChild(weatherLine);
    weatherInformation.appendChild(feelsLikeTemp)
    weatherSubInformation.appendChild(weatherCondition);
    weatherSubInformation.appendChild(windCondition);
    weatherSubInformation.appendChild(humidityCondition);
    weatherBox.appendChild(weatherInformation);
    weatherBox.appendChild(weatherSubInformation);
    form.appendChild(searchBar);
    form.appendChild(submit);
    container.appendChild(appName);
    container.appendChild(form);
    container.appendChild(weatherBox);
    return container;
};

  document.getElementById('box').appendChild(createInterface());