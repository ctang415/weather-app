import './style.css';
import Humidity from './humidity.png';
import Gust from './gust.png';
import Search from './search.png'

  function createInterface() {
    const container = document.createElement('div');
    const appName = document.createElement('header');
    const form = document.createElement('form');
    const searchBar = document.createElement('input');
    const submit = document.createElement('button');
    const weatherBox = document.createElement('div');
    const weatherInformation = document.createElement('div');
    const weatherIconAndTemp = document.createElement('div');
    const weatherSubInformation = document.createElement('div');
    const cityName = document.createElement('span');
    const weatherTemperature = document.createElement('span');
    const weatherIcon = document.createElement('img');
    const feelsLikeTemp = document.createElement('span');
    const weatherCondition = document.createElement('div');
    const weatherConditionImage = document.createElement('img');
    const weatherConditionData = document.createElement('span');
    const windCondition = document.createElement('div');
    const windConditionData = document.createElement('span')
    const humidityCondition = document.createElement('div');
    const humidityConditionData = document.createElement('span')
    const humidityImage = new Image();
    const gustImage = new Image();
    
    humidityImage.src = Humidity;
    gustImage.src = Gust;
    submit.classList.add('buttonstyle')
    form.classList.add('formstyle')
    
    
    appName.textContent = "City Weather Report"
    searchBar.type = 'search';
    searchBar.id = 'search';
    searchBar.placeholder = "New York"

    async function showWeather() {
        try {
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=New+York&appid=78c5b0d1c5ebe06e9744589142cf4344&units=imperial', { mode:'cors'});
            const weatherData = await response.json();
            console.log(weatherData);
            console.log((Date.now()  + 1000 * weatherData.timezone))
            const iconLink = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
            return (cityName.textContent = weatherData.name + ", " + weatherData.sys.country,
                weatherIcon.src = iconLink,
                weatherConditionImage.src = iconLink,
                weatherTemperature.textContent = Math.round(weatherData.main.temp) + "°F",
                feelsLikeTemp.textContent = "Feels like " + Math.round(weatherData.main.feels_like)+ "°F",
                weatherConditionData.textContent = "Condition: " + weatherData.weather[0].main,
                windConditionData.textContent = "Wind: " + Math.round(weatherData.wind.speed) + " mph" , 
                humidityConditionData.textContent = "Humidity: " + Math.round(weatherData.main.humidity) + "%",
                console.log(weatherData)
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
            const iconLink = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
            return (cityName.textContent = weatherData.name + ", " + weatherData.sys.country,
                weatherIcon.src = iconLink,
                weatherConditionImage.src = iconLink,
                weatherTemperature.textContent = Math.round(weatherData.main.temp)+ "°F", 
                feelsLikeTemp.textContent = "Feels like " + Math.round(weatherData.main.feels_like) + "°F",
                weatherConditionData.textContent = "Condition: " + weatherData.weather[0].main,
                windConditionData.textContent = "Wind: " + Math.round(weatherData.wind.speed) + " mph", 
                humidityConditionData.textContent = "Humidity: " + Math.round(weatherData.main.humidity) + "%",
                console.log(weatherData)
                
            );
        } catch(error) {
            console.error('error', error);
        } 
    };

    weatherBox.appendChild(cityName);
    weatherIconAndTemp.appendChild(weatherIcon);
    weatherIconAndTemp.appendChild(weatherTemperature);
    weatherInformation.appendChild(weatherIconAndTemp);
    weatherInformation.appendChild(feelsLikeTemp)
    weatherCondition.appendChild(weatherConditionImage);
    weatherCondition.appendChild(weatherConditionData);
    windCondition.appendChild(gustImage);
    windCondition.appendChild(windConditionData);
    humidityCondition.appendChild(humidityImage);
    humidityCondition.appendChild(humidityConditionData);
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