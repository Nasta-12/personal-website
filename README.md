# Personal Portfolio Website  

## Overview  
This is my personal portfolio website designed, developed, and deployed using **HTML5, CSS, and JavaScript**.  
It showcases my profile, academic background, skills, internship project, and includes interactive features with external data integration.  

Live Website: [https://Nasta-12.github.io/personal-website/](https://Nasta-12.github.io/personal-website/)  
GitHub Repository: [https://github.com/Nasta-12/personal-website](https://github.com/Nasta-12/personal-website)  

---

## Features Implemented  

### 1. Personal Profile  
- Name, academic details, background, and contact information.  
- Profile picture space left blank (can be uploaded later).  

### 2. Projects Section (Interactive Gallery using jQuery)  
- A **Document Analyzer Chatbot** project (developed during internship at **KMRL Kochi**).  
- Implemented as a **clickable gallery**: when a thumbnail is clicked, the project title, description, and image dynamically update in the main display area.  
- Uses **jQuery** for DOM manipulation.  

### 3. Articles Section (External Data Integration – Dev.to Feed)  
- Fetches **latest 5 articles** from **Dev.to** using the Dev.to API (no API key required).  
- Uses **JavaScript fetch()** to retrieve and display clickable article links.  
- Styled to match the website’s theme.  

### 4. Live Weather Information (Open-Meteo API)  
- Integrated **Open-Meteo API** (safe, no API key required).  
- Users can enter a **city name** → fetches real-time weather data.  
- Displays:  
  - City Name  
  - Current Temperature (°C)  
  - Weather Description  
  - Weather Icon  
- Updates dynamically without page reload.  
- Handles errors (invalid city, network issues).  

### 5. Live Location Map (Leaflet + OpenStreetMap)  
- Integrated an **interactive map** using **Leaflet.js** and **OpenStreetMap tiles**.  
- On page load, the map tries to fetch the **user’s live location** (via browser Geolocation API).  
- If allowed, the map centers on the user’s coordinates and marks their current location.  
- If denied, it falls back to **Kochi** as the default view.  

---

## Folder Structure  

personal-website/
│
├── index.html # Main website file
├── css/
│ └── style.css # Custom CSS styling
├── js/
│ └── script.js # JavaScript (fetch APIs, gallery, interactivity)
├── images/
│ └── chatbot.png # Project thumbnail image
└── README.md # Project documentation

markdown
Copy
Edit

---

## How It Works  

1. **Dev.to Articles**  
   - JavaScript `fetch()` retrieves article data from `https://dev.to/api/articles`.  
   - Extracts titles and URLs → dynamically adds them as links in the "My Articles" section.  

2. **Interactive Projects Gallery (jQuery)**  
   - On clicking a project thumbnail:  
     - The `#project-title`, `#project-desc`, and `#project-img` DOM elements update dynamically.  
   - Implemented with **jQuery `.click()` and `.attr()`**.  

3. **Weather Information**  
   - User enters a city name → script fetches latitude/longitude via Open-Meteo geocoding.  
   - Fetches weather data (temperature, conditions).  
   - Displays information dynamically with icons.  

4. **Live Map**  
   - Uses **Leaflet.js** to render an interactive map.  
   - If geolocation is enabled → centers map on user’s live location.  
   - If denied → defaults to Kochi (10.0, 76.3).  

---

## Technologies Used  

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla + jQuery)  
- **External APIs:**  
  - [Dev.to API](https://dev.to/api) – Articles  
  - [Open-Meteo API](https://open-meteo.com/) – Weather Data  
- **Map Integration:** [Leaflet.js](https://leafletjs.com/) + [OpenStreetMap](https://www.openstreetmap.org/)  

---

## Deployment  

- Hosted on **GitHub Pages** at:  
  👉 [https://Nasta-12.github.io/personal-website/](https://Nasta-12.github.io/personal-website/)  

Steps:  
1. Created a new repository `personal-website`.  
2. Uploaded all project files (`index.html`, `css/`, `js/`, `images/`).  
3. Enabled **GitHub Pages** in repo settings → selected `main` branch.  
4. Website auto-published at above link.  

---

## Future Enhancements  
- Add more projects to gallery.  
- Add contact form (using Formspree).  
- Improve animations and transitions for smooth UI.  

---

## Author  
👩‍💻 **Nandana Stalin**  
- B.Tech 3rd Year, Rajagiri School of Engineering and Technology  
- Branch: Artificial Intelligence & Data Science  
- Email: [nandanastalin@gmail.com](mailto:nandanastalin@gmail.com)  
- LinkedIn: [Nandana Stalin](https://www.linkedin.com/in/nandana-stalin-970834284/)
