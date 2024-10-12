const apiKey = "6206bda15ed1043fe50c4669639918da";
const chamberLocation = "Preston";

// Fetch weather data
async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${chamberLocation}&units=metric&appid=${apiKey}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${chamberLocation}&units=metric&appid=${apiKey}`;

  try {
    // Get current weather
    const response = await fetch(url);
    const weatherData = await response.json();

    const temp = weatherData.main.temp;
    const weatherDescription = weatherData.weather[0].description;

    // Get forecast for the next 3 days
    const forecastResponse = await fetch(forecastUrl);
    const forecastData = await forecastResponse.json();
    const forecast = forecastData.list
      .filter((item, index) => index % 8 === 0)
      .slice(0, 3); // Every 8th element gives daily forecast

    // Display current weather
    document.getElementById("currentWeather").innerHTML = `
      <p>Current Temperature: ${temp}°C</p>
      <p>Current Weather: ${weatherDescription}</p>
    `;

    // Display 3-day forecast
    let forecastHtml = "<h3>3-Day Forecast:</h3>";
    forecast.forEach((day, index) => {
      const date = new Date(day.dt_txt).toLocaleDateString();
      const dayTemp = day.main.temp;
      forecastHtml += `<p>Day ${index + 1} (${date}): ${dayTemp}°C</p>`;
    });

    document.getElementById("forecast").innerHTML = forecastHtml;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

// Call the function to get weather data
getWeather();
