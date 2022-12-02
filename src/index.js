import './style.css';
import Humidity from './humidity.png';
import Gust from './gust.png';

  function createInterface() {
    const box = document.getElementById('box');
    const container = document.createElement('div');
    const appName = document.createElement('header');
    const form = document.createElement('form');
    const searchBar = document.createElement('input');
    const submit = document.createElement('button');
    const formDiv = document.createElement('div');
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
    const loader = document.createElement('div');
    const linkDay = document.createElement('a');
    const linkNight = document.createElement('a');
    const linkRandom = document.createElement('a');

    linkDay.setAttribute('href', 'https://unsplash.com/@rinked?utm_source=weather_app&utm_medium=referral')
    linkNight.setAttribute('href', 'https://unsplash.com/@matheo_jbt?utm_source=weather_app&utm_medium=referral')

    humidityImage.src = Humidity;
    gustImage.src = Gust;

    submit.classList.add('buttonstyle');
    form.classList.add('formstyle');
    weatherBox.classList.add('weatherstyle');
    appName.classList.add('header');
    searchBar.classList.add('input');
    cityName.classList.add('cityname');
    weatherTemperature.classList.add('mainweather');
    formDiv.classList.add('formdiv');
    weatherInformation.classList.add('weatherinformation');
    weatherIconAndTemp.classList.add('weathericonandtemp');
    weatherSubInformation.classList.add('weathersubinformation');
    weatherCondition.classList.add('alignitems');
    windCondition.classList.add('alignitems');
    humidityCondition.classList.add('alignitems');
    weatherConditionImage.classList.add('sizeimage');
    humidityImage.classList.add('sizeimage');
    gustImage.classList.add('sizeimage');
    linkDay.classList.add('imagecredit');
    linkNight.classList.add('imagecredit');
    linkRandom.classList.add('imagecredit')
    weatherIcon.classList.add('sizebigimage');
    loader.classList.add('loader')
    
    appName.textContent = "Weather Report";
    searchBar.type = 'search';
    searchBar.id = 'search';
    searchBar.placeholder = "California";
    
    class Imperial {
        constructor() {
            this.name = "imperial";
            this.unit = "°F";
            this.speed = "mph";
            this.temperature;
        }
        changeToFahrenheit() {
            return this.temperature = ((metric.temperature * (9/5) + 32));
        }
    };

    class Metric {
        constructor() {
            this.name = "metric";
            this.unit = "°C";
            this.speed = "m/s"
            this.temperature;
        }
        changeToCelsius() {
            return this.temperature = ((imperial.temperature - 32) * (5/9));
            
        }
    };

    const imperial = new Imperial();
    const metric = new Metric();

    let currentUnit = imperial;
    let currentCity = "California";

    async function showWeather() {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=78c5b0d1c5ebe06e9744589142cf4344&units=${currentUnit.name}`, { mode:'cors'});
            const imageResponse = await fetch(`https://api.unsplash.com/photos/random?client_id=kBDpFLp85GMfEDOpxfxQvXBIAsqLBaaZG1X2iv1md9s&query=${currentCity}&w=1440&h=720`, { mode: 'cors'});
            const weatherData = await response.json();
            const imageResponseData = await imageResponse.json();
            console.log(imageResponseData);
            console.log(weatherData)
            const bgImage = imageResponseData.urls.raw;
            document.body.style.background = `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url('${bgImage}') no-repeat`
            linkRandom.setAttribute('href', `${imageResponseData.user.links.html}?utm_source=weather_app&utm_medium=referral`)
            linkRandom.textContent = `Image Credit: ${imageResponseData.user.name} on Unsplash`
            const iconLink = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
            let pngFile = weatherData.weather[0].icon;
            let result = pngFile.includes("d");
            if (result === true) {
                weatherBox.classList.add('daytime');
                linkDay.textContent = "Image Credit: Rinke Dohmen on Unsplash";
            } else {
                weatherBox.classList.add('nighttime');
                linkNight.textContent = "Image Credit: Matheo JBT on Unsplash";
            }
            console.log(result)
            return (cityName.textContent = weatherData.name + ", " + weatherData.sys.country,
                weatherIcon.src = iconLink,
                weatherConditionImage.src = iconLink,
                weatherTemperature.textContent = Math.round(weatherData.main.temp) + currentUnit.unit,
                weatherTemperature.setAttribute('id', `${currentCity}`),
                feelsLikeTemp.textContent = "Feels like " + Math.round(weatherData.main.feels_like) + currentUnit.unit,
                weatherConditionData.textContent = "Condition: " + weatherData.weather[0].main,
                windConditionData.textContent = "Wind: " + Math.round(weatherData.wind.speed) + " " + currentUnit.speed , 
                humidityConditionData.textContent = "Humidity: " + Math.round(weatherData.main.humidity) + "%",
                console.log(weatherData)
                );
        } catch(error) {
            console.error('We have an error', error);
        } 
    };
    showWeather();

    form.addEventListener('submit', function(e) {
        const searchInput = document.getElementById('search');
        currentCity = searchInput.value;
        getWeatherSearch();
        e.preventDefault();
        form.reset();
    });

    weatherTemperature.addEventListener('click', function() {
        if (currentUnit === imperial) {
            currentUnit = metric;
            console.log(currentUnit)
            currentCity = weatherTemperature.id;
            getWeatherSearch();
        } else if (currentUnit === metric) {
            currentUnit = imperial;
            currentCity = weatherTemperature.id;
            getWeatherSearch();
            console.log(currentUnit)
        }
    });

    async function getWeatherSearch() {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=78c5b0d1c5ebe06e9744589142cf4344&units=${currentUnit.name}`, { mode: 'cors' });
            const imageResponse = await fetch(`https://api.unsplash.com/photos/random?client_id=kBDpFLp85GMfEDOpxfxQvXBIAsqLBaaZG1X2iv1md9s&query=${currentCity}&w=1440&h=720`, { mode: 'cors'});
            const weatherData = await response.json();
            const imageResponseData = await imageResponse.json();
            const bgImage = imageResponseData.urls.raw;
            document.body.style.background = `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url('${bgImage}') no-repeat`
            linkRandom.setAttribute('href', `${imageResponseData.user.links.html}?utm_source=weather_app&utm_medium=referral`)
            linkRandom.textContent = `Image Credit: ${imageResponseData.user.name} on Unsplash`
            const iconLink = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
            let pngFile = weatherData.weather[0].icon;
            let result = pngFile.includes("d");
            console.log(result)
            if (result === true) {
                weatherBox.classList.remove('nighttime');
                weatherBox.classList.add('daytime');
                linkDay.textContent = "Image Credit: Rinke Dohmen on Unsplash";
                linkDay.style.display = 'flex'
                linkNight.style.display = 'none';
            } else {
                weatherBox.classList.remove('daytime');
                weatherBox.classList.add('nighttime');
                linkNight.textContent = "Image Credit: Matheo JBT on Unsplash";
                linkNight.style.display = 'flex'
                linkDay.style.display = 'none'
            }
            return (cityName.textContent = weatherData.name + ", " + weatherData.sys.country,
                weatherIcon.src = iconLink,
                weatherConditionImage.src = iconLink,
                weatherTemperature.textContent = Math.round(weatherData.main.temp) + currentUnit.unit,
                weatherTemperature.setAttribute('id', `${currentCity}`),
                feelsLikeTemp.textContent = "Feels like " + Math.round(weatherData.main.feels_like) + currentUnit.unit,
                weatherConditionData.textContent = "Condition: " + weatherData.weather[0].main,
                windConditionData.textContent = "Wind: " + Math.round(weatherData.wind.speed) + " "+ currentUnit.speed, 
                humidityConditionData.textContent = "Humidity: " + Math.round(weatherData.main.humidity) + "%",
                console.log(weatherData)
            );
        } catch(error) {
            console.error('We have an error', error);
            alert('Invalid location. Please try again.');
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
    weatherBox.appendChild(linkDay);
    weatherBox.appendChild(linkNight);
    formDiv.appendChild(appName)
    formDiv.appendChild(form);
    form.appendChild(searchBar);
    form.appendChild(submit);
    container.appendChild(formDiv);
    container.appendChild(weatherBox);
    container.appendChild(linkRandom);
    return container;
};

  document.getElementById('box').appendChild(createInterface());