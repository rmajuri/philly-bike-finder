$(document).ready(function() {

  let api = `/weather-api`

  $.getJSON(api, function(res) {

    const main = res.main
    const temp = parseInt(main.temp, 10)
    const weatherDescription = res.weather[0].description
    const windSpeed = parseInt(res.wind.windSpeed, 10)
    let warning


    $('#degreesFahrenheit').html(temp);
    $('#weatherDescription').html(weatherDescription);

    if (temp > 98) {
      warning = 'Warning: temperatures exceeding 98°F! Stay cool!'
    } else if (temp < 32) {
      warning = 'Warning: temperatures below 32°F! Roads may be icy!'
    } else if (windSpeed > 35) {
      warning = 'Warning: wind speeds exceeding 35 mph!'
    }

    if (warning) {
      $('#weatherWarning').html(warning);
    }


    console.log(res)
  })
})
