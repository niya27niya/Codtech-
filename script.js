const apiKey = "ed415eefa3c241143b52a271a123f567"; // Replace this with your actual API key

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const weatherDiv = document.getElementById("weatherResult");

  if (!city) {
    weatherDiv.innerHTML = "Please enter a city name.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      weatherDiv.innerHTML = `
        <p><strong>City:</strong> ${data.name}</p>
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      `;
    } else {
      weatherDiv.innerHTML = "City not found.";
    }
  } catch (error) {
    console.error("Error fetching weather:", error);
    weatherDiv.innerHTML = "Something went wrong. Please try again.";
  }
}
