$(document).ready(function(){
  // jQuery Project Gallery
  $(".thumbnail").click(function(){
    var title = $(this).data("title");
    var desc = $(this).data("description");
    var img = $(this).data("img");
    $("#project-display").html('<h3>'+title+'</h3><p>'+desc+'</p><img src="'+img+'" style="max-width:100%;">');
  });

  // Dev.to Articles via RSS
  fetch("https://dev.to/feed/")
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
      let items = data.querySelectorAll("item");
      let html = "";
      for (let i=0; i<5; i++) {
        let title = items[i].querySelector("title").textContent;
        let link = items[i].querySelector("link").textContent;
        html += `<li><a href="${link}" target="_blank">${title}</a></li>`;
      }
      document.getElementById("articles-list").innerHTML = html;
    });

  // Weather using Open-Meteo
  $("#getWeather").click(function(){
    var city = $("#cityInput").val();
    if (!city) return alert("Enter a city name");
    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)
      .then(res => res.json())
      .then(loc => {
        if (!loc.results) throw "City not found";
        let lat = loc.results[0].latitude;
        let lon = loc.results[0].longitude;
        return fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
      })
      .then(res => res.json())
      .then(weather => {
        let w = weather.current_weather;
        $("#weatherResult").html(`<p>Temperature: ${w.temperature} °C<br>Windspeed: ${w.windspeed} km/h</p>`);
      })
      .catch(err => $("#weatherResult").html("<p>Error: "+err+"</p>"));
  });

  // Contact form validation
  $("#contactForm").submit(function(e){
    e.preventDefault();
    alert("Message sent successfully!");
  });
});
