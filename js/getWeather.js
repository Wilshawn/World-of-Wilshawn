function getWeatherByCity() {
  /* Resets City Temp */
  $('.weatherResponse').html('');
  var cityName = $('#cityName').val();
  var apiCall = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=4a90aee1c5a6a311869b8fa68d87623d';
  $.getJSON(apiCall, weatherCallback);
  
  /* Sends in Weather */
  function weatherCallback(weatherData) {
    var weatherName = weatherData.name;
    var weatherDescription = weatherData.weather[0].description;
    var weatherTemperature = Math.round((weatherData.main.temp - 273.15) * 9/5 + 32);
    var weatherIcon = weatherData.weather[0].icon;
    var weatherIconUrl = "images/" + weatherIcon + ".png";
    $('.weatherResponse').append("<div>" + weatherName + "</div>" + "<img src='" + weatherIconUrl + "'>" + "<div class='weatherTemperature'>" + weatherTemperature + "</div>" + "<div class='weatherDescription'>" + weatherDescription + "</div>");
  }
  $('#cityName').val('');
}

function getWeatherByZip() {
  /* Resets City Temp */
  $('.weatherResponse').html('');
  var zipCode = $('#zipCode').val();
  var apiCall = 'http://api.openweathermap.org/data/2.5/weather?zip=' + zipCode + '&appid=4a90aee1c5a6a311869b8fa68d87623d';
  $.getJSON(apiCall, weatherCallback);
  
  /* Sends in Weather */
  function weatherCallback(weatherData) {
    var weatherName = weatherData.name;
    var weatherDescription = weatherData.weather[0].description;
    var weatherTemperature = Math.round((weatherData.main.temp - 273.15) * 9/5 + 32);
    var weatherIcon = weatherData.weather[0].icon;
    var weatherIconUrl = "images/" + weatherIcon + ".png";
    $('.weatherResponse').append("<div>" + weatherName + "</div>" + "<img src='" + weatherIconUrl + "'>" + "<div class='weatherTemperature'>" + weatherTemperature + "</div>" + "<div class='weatherDescription'>" + weatherDescription + "</div>");
  }
  $('#zipCode').val('');
}

/* Validation Error Prompts */
$('#weatherSubmit').click(function() {
  if ($('#cityName').val() !== '' && $('#zipCode').val() !== '') {
    $('#cityName').val('');
    $('#zipCode').val('');
    $('.weatherResponse').html('');
    alert('Please select only one choice:  City Name or Zip Code.');
  }
  else if ($('#cityName').val() !== '') {
    getWeatherByCity();
  }
  else if ($('#zipCode').val() !== '' ) {
    getWeatherByZip();
  }
  else {
    alert('Please fill out City Name or Zip Code.');
  }
});

/* adds enter feature to submit button */
$("#cityName,#zipCode").keyup(function(event){
    if(event.keyCode == 13){
        $('#weatherSubmit').click();
    }
});

/* hide/show appropriate information when button is clicked */
$('#weatherHome').click(function(){
  $('header').hide('fast');
  $('.weatherSearch, .weatherImage, .weatherHeader').show('slow, swing');
  $('.weatherResponse').html('');
});

$('#weatherSubmit').click(function(){
  $('header').show('fast');
  $('.weatherSearch, .weatherImage, .weatherHeader').hide('slow, swing');
});
