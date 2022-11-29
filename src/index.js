import './style.css';

  function createInterface() {
    const container = document.createElement('div');
    const form = document.createElement('form');
    const searchBar = document.createElement('input');
    const submit = document.createElement('button');
    const weatherBox = document.createElement('div');
    const weatherInformation = document.createElement('div');
    const weatherSubInformation = document.createElement('div');
    const cityName = document.createElement('span');
    const weatherTemperature = document.createElement('span');
    const weatherIcon = document.createElement('image');
    const feelsLikeTemp = document.createElement('span');
    const wind = document.createElement('span');
    const humidity = document.createElement('span');
    
    searchBar.type = 'search';
    searchBar.id = 'search'

    async function showWeather() {
        try {
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=New+York&appid=78c5b0d1c5ebe06e9744589142cf4344&units=imperial', { mode:'cors'});
            const weatherData = await response.json();
            console.log(weatherData)
            return weatherTemperature.textContent = weatherData.main.temp, 
                feelsLikeTemp.textContent = weatherData.main.feels_like,
                wind.textContent = weatherData.wind.speed, 
                humidity.textContent = weatherData.main.humidity;
        } catch(error) {
            console.error('error', error);
        } 
    }
    showWeather();

    weatherBox.appendChild(cityName);
    weatherInformation.appendChild(weatherTemperature);
    weatherInformation.appendChild(weatherIcon);
    weatherSubInformation.appendChild(feelsLikeTemp);
    weatherSubInformation.appendChild(wind);
    weatherSubInformation.appendChild(humidity);
    weatherBox.appendChild(weatherInformation);
    weatherBox.appendChild(weatherSubInformation);
    form.appendChild(searchBar);
    form.appendChild(submit);
    container.appendChild(form);
    container.appendChild(weatherBox);
    return container;
};

  document.getElementById('box').appendChild(createInterface());

  async function getWeather() {
    try {
        const searchInput = document.getElementById('search');
        const searchValue = searchInput.value;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=78c5b0d1c5ebe06e9744589142cf4344`, { mode: 'cors' });
        const weatherData = await response.json();
        
    } catch(error) {
        console.error('error', error);
    } 
}
