async function getWeather() {
  const city = document.getElementById('city').value;
  const apiKey = 'be28442357e77d39ed36b9ea4180ac1a'; // Replace with your own API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === '404') {
      alert('City not found :(');
      document.getElementById('weather-result').classList.remove('show');
    } else {
      document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
      document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
      document.getElementById('weather-result').classList.add('show');
    }
  } catch (error) {
    alert('Oops, error fetching data :(');
  }
}
