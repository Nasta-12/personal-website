// =======================
// Projects Gallery (jQuery)
// =======================
$(document).ready(function () {
  $(".thumb").on("click", function () {
    var title = $(this).data("title");
    var desc = $(this).data("desc");
    var img = $(this).data("img");

    $("#project-title").text(title);
    $("#project-desc").text(desc);
    $("#project-img").attr("src", img).show();
  });
});

// =======================
// Dev.to Articles Feed
// =======================
async function loadArticles() {
  try {
    const response = await fetch("https://dev.to/api/articles?username=thepracticaldev&per_page=5");
    if (!response.ok) throw new Error("Failed to fetch articles");

    const articles = await response.json();
    const list = document.getElementById("articles-list");
    list.innerHTML = "";

    articles.forEach(article => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = article.url;
      a.textContent = article.title;
      a.target = "_blank";
      li.appendChild(a);
      list.appendChild(li);
    });
  } catch (error) {
    document.getElementById("articles-list").innerHTML =
      "Error loading articles. Please try again later.";
    console.error(error);
  }
}
loadArticles();

// =======================
// Weather (Open-Meteo API)
// =======================
document.getElementById("getWeather").addEventListener("click", async function () {
  const city = document.getElementById("cityInput").value.trim();
  const weatherDiv = document.getElementById("weatherResult");

  if (!city) {
    weatherDiv.innerHTML = "Please enter a city name.";
    return;
  }

  try {
    // Geocoding API to get coordinates
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
    );
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      weatherDiv.innerHTML = "City not found.";
      return;
    }

    const { latitude, longitude, name, country } = geoData.results[0];

    // Fetch current weather
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const weatherData = await weatherRes.json();

    const temp = weatherData.current_weather.temperature;
    const desc = weatherData.current_weather.weathercode;

    weatherDiv.innerHTML = `
      <h3>${name}, ${country}</h3>
      <p><b>Temperature:</b> ${temp}°C</p>
      <p><b>Condition Code:</b> ${desc} (Refer Open-Meteo Docs)</p>
    `;
  } catch (error) {
    weatherDiv.innerHTML = "Error fetching weather data.";
    console.error(error);
  }
});
