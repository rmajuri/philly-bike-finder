$(document).ready(function() {

  $.getJSON(`/weather-api`, function(res) {

    //main contains current temp, humidity, temp_min, and temp_max
    const dataResponse = res.main
    const temperatureData = parseInt(dataResponse.temp, 10)
    const weatherDescriptionData = res.weather[0].description
    const windSpeedData = parseInt(res.wind.windSpeed, 10)

    //Conditions that determine whether to show a weather warning
    function determineWeatherWarning(temperature, wind) {
      let warningMessage
      let weatherWarning = $('#weatherWarning')

      if (temperature > 98) {
        warningMessage = 'Warning: temperatures exceeding 98°F! Stay cool!'
      } else if (temperature < 32) {
        warningMessage = 'Warning: temperatures below 32°F! Roads may be icy!'
      } else if (wind > 35) {
        warningMessage = 'Warning: wind speeds exceeding 35 mph!'
      }

      if (warningMessage) {
        weatherWarning.html(warningMessage);
      }
    }

    function setWeatherInfo(temperature, description) {
      const temperatureComponent = $('#degreesFahrenheit')
      const weatherDescriptionComponent = $('#weatherDescription')
      temperatureComponent.html(temperature);
      weatherDescriptionComponent.html(description);
    }

    determineWeatherWarning(temperatureData, windSpeedData)
    setWeatherInfo(temperatureData, weatherDescriptionData)

    console.log(res)
  })
})
