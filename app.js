const cityInput = document.querySelector('#city-input');
const form = document.querySelector('#search-form');
const result = document.getElementById('weather-data');



form.addEventListener('submit' , (event) => {
   event.preventDefault();
// console.log(cityInput.input);
 
 
   fetch(`http://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=${cityInput.value}&aqi=no`)
   .then((response => response.json()))
.then((response) => {
   console.log(response.data);
   // var list = document.createElement('ul');
   result.innerHTML += `
   <span class= "border-div"> 
   <span class = "weather-details text-light"> 
   <span class = "location-name">${response.data.location.name}, ${response.data.location.country}</span>
   <div class = "d-flex justify-content-center align-items-center  main-d"> 
   <img class ="icon" src="${response.data.current.condition.icon}" alt="">
 
      <p class ="temp">${response.data.current.temp_c}°C</p>
   <div class ="more">
      <div class= "feels-like">FeelsLike:${response.data.current.feelslike_c}°C</div>
      <div class = "humidity">Humidity:${response.data.current.humidity}%</div>
      <div class ='wind'>Wind:${response.data.current.wind_kph}Kph</div>
    </div>
   
   </div>

   </span>
   
   </span>
   
   `;
   cityInput.value = "";

})
  .catch((error) => {
   console.error(error);
   alert("no city found")
   cityInput.value = "";
});

})

