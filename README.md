# Weather App

A simple weather app that fetches current weather information for a specified city using the OpenWeatherMap API.

## Features

- Enter a city name to get the current weather.
- Displays temperature (in Celsius) and a brief weather description.

## Technologies Used

- **HTML**: For the structure of the app.
- **CSS**: For styling the app (style.css).
- **JavaScript**: For making the API request and handling app functionality.
- **OpenWeatherMap API**: For retrieving weather data.

## Setup

To run this app locally:

1. Clone this repository:
   ```bash
   git clone https://github.com/lenz-B/weather-app.git
   ```

2. Navigate into the project folder:
   ```bash
   cd weather-app
   ```

3. Open `index.html` in a web browser.

4. Enter a city name in the input field and click the "Get Weather" button to see the weather information.

## How It Works

1. The app sends a request to the OpenWeatherMap API with the city name.
2. The API responds with weather data, including temperature and description.
3. The app then updates the UI with the fetched weather information.

## API Key

This app uses the OpenWeatherMap API. You need to replace the API key in the JavaScript file (`app.js`) with your own. You can get your API key by signing up at [OpenWeatherMap](https://openweathermap.org/api).

Replace the placeholder in the `app.js` file:
```js
const apiKey = 'YOUR_API_KEY';
```

## License

This project is open source and available under the [MIT License](LICENSE).

### How to Use:
1. **Clone the repo**: The first step is cloning the repository to your local machine.
2. **Replace API Key**: You need to replace the `apiKey` in `app.js` with your own API key from OpenWeatherMap.
3. **Run the app**: Open `index.html` in any browser to start using the weather app.