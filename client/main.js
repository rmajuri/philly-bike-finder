// window.addEventListener('load', () => {
//     fetch(`/weather-api`)
//     .then(response => {
//       console.log('HERE IS THE FIRST REPONSE IN MAIN', response)
//       return response.json()
//     })
//     .then(data => {
//       console.log(data)
//     })
// })
$(document).ready(function() {
  fetch(`/weather-api`)
    .then(response => {
      console.log('HERE IS THE FIRST REPONSE IN MAIN', response)
      return response.json()
    })
    .then(data => {
      console.log(data)
    })
})
