async function getWeather() {
  const city = document.getElementById('city').value;
  const apiKey = 'be28442357e77d39ed36b9ea4180ac1a'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

  try {
    const response = await fetch(url)
    const data = await response.json()

    if(data.cod === '404') alert('City not found :(')
    else {
      document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`
      document.getElementById('description').textContent = `Description: ${data.weather[0].description}`
    }
  } catch (error) {
    alert('Oops, error fetching data :(')
  }
}