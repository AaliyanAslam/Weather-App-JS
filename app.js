const cityInput = document.querySelector('#city-input');
const form = document.querySelector('#search-form');
const result = document.getElementById('weather-data');



form.addEventListener('submit' , (event) => {
   event.preventDefault();
// console.log(cityInput.input);
 
 
   axios(`http://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=${cityInput.value}&aqi=no`)
.then((response) => {
   console.log(response.data);
   response.data.map((data) => {
      result.innerHTML = `
    <h1> ${data.location.name} </h1>


      `;
 
      
   })

})
  .catch((error) => {
   console.error(error);
});

})

