const apiUrl = "https://www.weatherapi.com/docs/weather_conditions.json";

// Fetch weather data from the API

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
     const city = data.location.name;
     const temperature = data.current.temp_c;
     const condition = data.current.condition.text;
     const humidity = data.current.humidity;
     const windSpeed = data.current.wind_kph;
  });