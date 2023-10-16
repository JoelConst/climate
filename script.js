const key = "fe20df9d6ec22460a34328adcbf9aa66"

function dataOnScreen(dados) {
  document.querySelector(".city").innerHTML = "Tempo em " + dados.name
  document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
  document.querySelector(".prevision").innerHTML = dados.weather[0].description
  document.querySelector(".umid").innerHTML =
    "Umidade:  " + dados.main.humidity + "%"
  document.querySelector(
    "img-previsao"
  ).src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}
async function searchCity(city) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
  ).then(response => response.json())

  dataOnScreen(dados)
}

function clickButton() {
  const city = document.querySelector(".inputCity").value

  searchCity(city)
}
