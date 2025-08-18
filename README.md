# Personal Portfolio Website – Nandana Stalin

## 📌 Project Overview
This is my personal portfolio website designed, developed, and deployed as part of my **Web Programming Assignment**.  
The site highlights my **profile, education, skills, projects, and achievements**, while also including **interactive features** and **external data integration**.

The website is deployed via **GitHub Pages** and can be accessed here:  
👉 [Live Website](https://nasta-12.github.io/personal-website/)

---

## 🖥️ Features Implemented

### ✅ Profile & Biography
- A dedicated section introducing **me (Nandana Stalin)** with academic background and career goals.
- Includes personal information like email and LinkedIn.
- Styled with responsive layout and custom CSS.

---

### ✅ External Data Integration – **Dev.to Feed**
- Used the **Dev.to RSS feed** (no API key required).
- Fetched and displayed the **5 latest articles** dynamically.
- Articles are clickable and open in a new tab.
- Implemented with **JavaScript `fetch()`** and styled with CSS.

---

### ✅ Interactive Projects Gallery – **jQuery**
- A **project gallery** showcasing my **Document Analyzer Chatbot** built during my internship at **KMRL Kochi**.
- Implemented with **jQuery DOM manipulation**:
  - Clicking a thumbnail dynamically updates the main project display area with title, description, and image.
- Fully responsive and neatly styled.

---

### ✅ Live Weather Information – **Open-Meteo API**
- Integrated **weather data** using the free [Open-Meteo API](https://open-meteo.com/).  
- Features:
  - Input box for entering a city name.
  - On clicking “Get Weather”:
    - Fetches weather details in JSON.
    - Displays city name, current temperature, weather description, and icon.
  - Handles errors (e.g., invalid city names).
- Implemented with **JavaScript fetch()** and **dynamic DOM updates**.

---

### ✅ Live Location Map – **Leaflet.js + Geolocation**
- Embedded an **interactive map** using **Leaflet.js** and **OpenStreetMap tiles**.
- Uses **browser geolocation** to fetch and display **my live location**.
- Features:
  - Map centers on user’s coordinates.
  - A marker with popup `“You are here 📍”` is displayed.
- Falls back to a default location (Kochi) if geolocation is denied.

---

### ✅ Multi-Page Navigation
- Website has separate pages for:
  - **Home**
  - **Education**
  - **Projects**
  - **Contact**
- Navigation bar links to different HTML pages.
- Consistent styling across all pages.

---

## 📂 Project Structure
personal-website/
│
├── index.html # Homepage
├── education.html # Education page
├── projects.html # Projects page
├── contact.html # Contact page
│
├── css/
│ └── style.css # Custom styling
│
├── js/
│ └── script.js # JavaScript (APIs + interactivity)
│
├── images/ # Profile picture, project images, icons
│
└── README.md # Project documentation

yaml
Copy
Edit

---

## ⚙️ Technologies Used
- **HTML5** – Structure
- **CSS3** – Styling (responsive design, colors, layouts)
- **JavaScript (ES6)** – Interactivity & APIs
- **jQuery** – Project gallery DOM updates
- **Leaflet.js + OpenStreetMap** – Map & live location
- **Open-Meteo API** – Weather information
- **Dev.to RSS Feed** – External articles
- **GitHub Pages** – Hosting & deployment

---

## 🚀 How to Run Locally
1. Clone this repository:
   ```bash
   git clone https://github.com/Nasta-12/personal-website.git
Open the project folder.

Open index.html in your browser.

Navigate between pages using the navbar.

📌 Assignment Requirements Checklist
 HTML5 + CSS + JavaScript

 External data integration (Dev.to RSS feed)

 Interactive gallery with jQuery

 Weather information with API

 Live map with geolocation

 Multi-page navigation

 Organized folder structure

 README with explanation ✅

👩‍💻 Author
Nandana Stalin
3rd Year B.Tech, Artificial Intelligence & Data Science
Rajagiri School of Engineering and Technology
📧 Email: nandanastalin@gmail.com
🔗 LinkedIn
