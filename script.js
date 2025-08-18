// Get location + weather
function fetchWeather(lat, lon) {
  const apiKey = "YOUR_API_KEY"; // 🔑 Put your OpenWeather API key here
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const city = data.name;
      const temp = data.main.temp;
      const condition = data.weather[0].description;

      document.getElementById("location").innerText = `📍 Location: ${city}`;
      document.getElementById("weather").innerText = `🌤️ Weather: ${temp}°C, ${condition}`;
    })
    .catch(() => {
      document.getElementById("weather").innerText = "⚠️ Unable to fetch weather.";
    });
}

// Ask for user location
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    pos => {
      fetchWeather(pos.coords.latitude, pos.coords.longitude);
    },
    () => {
      document.getElementById("location").innerText = "⚠️ Location access denied.";
      document.getElementById("weather").innerText = "Cannot fetch weather.";
    }
  );
} else {
  document.getElementById("location").innerText = "⚠️ Geolocation not supported.";
}
