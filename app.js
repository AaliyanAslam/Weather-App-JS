const cityInput = document.querySelector('#city-input');
const form = document.querySelector('#search-form');
const result = document.getElementById('weather-data');



form.addEventListener('submit' , (event) => {
   event.preventDefault();
// console.log(cityInput.input);
 
 
   axios(`http://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=${cityInput.value}&aqi=no`)
.then((response) => {
   console.log(response.data);
   // var list = document.createElement('ul');
   result.innerHTML += `
   <span class= "border-div"> 
   <span class = "weather-details text-light"> 
   <span class = "location-name">${response.data.location.name}, ${response.data.location.country}</span>
   <div class = "d-flex justify-content-center align-items-center main-d"> 
   <img class ="icon" src="${response.data.current.condition.icon}" alt="">
 
      <p>Temperature: ${response.data.current.temp_c}°C</p>

   <p>Wind Speed: ${response.data.current.wind_kph} km/h</p>
   
   </div>

   </span>
   
   </span>
   
   `;
   cityInput.value = "";

})
//   .catch((error) => {
//    console.error(error);
//    alert("no city found")
//    cityInput.value = "";
// });

})

