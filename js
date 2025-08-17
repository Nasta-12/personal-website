// Fetch recent articles from Dev.to API
fetch("https://dev.to/api/articles?username=thepracticaldev")
  .then(response => response.json())
  .then(data => {
    const articlesList = document.getElementById("articles-list");
    articlesList.innerHTML = ""; // clear loading text
    data.slice(0, 5).forEach(article => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${article.url}" target="_blank">${article.title}</a>`;
      articlesList.appendChild(li);
    });
  })
  .catch(error => {
    document.getElementById("articles-list").innerHTML = "<li>Failed to load articles.</li>";
    console.error("Error fetching articles:", error);
  });
