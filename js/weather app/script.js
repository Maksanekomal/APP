const apiKey = 'your_api_key'; // Replace with your OpenWeatherMap API key
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

$(document).ready(function() {
  $('#get-weather-btn').click(function() {
    const city = $('#city-input').val();
    if (city) {
      getWeatherData(city);
    }
  });
});

function getWeatherData(city) {
  const url =`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;
  
  $.get(url, function(data) {
    $('#city-name').text(data.name);
    $('#temperature').text(`${data.main.temp}°C`);
    $('#weather-description').text(data.weather[0].description);
    $('#humidity').text(`Humidity: ${data.main.humidity}%`);
    $('#wind-speed').text(`Wind Speed: ${data.wind.speed} m/s`);
    $('#weather-info').show();
  }).fail(function() {
    alert('City not found!');
  });
}