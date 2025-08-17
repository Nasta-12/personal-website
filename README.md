[README.md](https://github.com/user-attachments/files/21820752/README.md)
# Personal Portfolio Website  

## 🔹 Overview  
This is my personal portfolio website created as part of **Web Programming Assignment 1**.  
It showcases my **profile, academic background, technical expertise, and projects**, along with **interactive features and live data integration**.  

The website is built using:  
- **HTML5** (structure)  
- **CSS** (styling & responsive layout)  
- **JavaScript & jQuery** (interactivity, API calls)  

Deployed on **GitHub Pages**:  
👉 [Live Website](https://Nasta-12.github.io/personal-website/)  

---

## 🔹 Features  

### 1. Profile & CV  
- Profile section with biography, goals, and interests.  
- CV with education, skills, certifications, and experience.  
- Embedded content using `<iframe>` (LinkedIn).  

### 2. Education & Technical Expertise  
- List of academic qualifications.  
- Programming languages, tools, and technologies.  

### 3. Projects Section  
- **Interactive Gallery using jQuery**  
  - Thumbnails for projects.  
  - Clicking a thumbnail updates the main display area with that project’s **title, description, and image** dynamically.  

### 4. External Data Integration  

#### 📌 Dev.to Articles Feed (RSS / API)  
- Uses `fetch()` to retrieve 5 latest Dev.to articles.  
- Displays titles as clickable links in **"My Articles"** section.  

#### 📌 Live Weather Information (OpenWeatherMap API)  
- User enters a **city name**.  
- On clicking **“Get Weather”**, live data is fetched from OpenWeatherMap API.  
- Displays:  
  - City name 🌍  
  - Current temperature (°C) 🌡  
  - Weather description ☀️🌧  
  - Weather icon ⛅  
- Includes error handling (invalid city, network errors).  

### 5. Contact Page  
- Contact form with validation (Name, Email, Message).  
- Clickable LinkedIn and Email links.  

---

## 🔹 Technical Requirements Met  

- ✅ Deployed on GitHub Pages  
- ✅ Clear navigation menu (Home, Profile, CV, Education, Projects, Contact)  
- ✅ HTML5 semantic tags used (`<header>`, `<nav>`, `<section>`, `<footer>`)  
- ✅ `<iframe>` for embedding external content  
- ✅ External CSS & JS files  
- ✅ Responsive design for mobile/desktop  
- ✅ jQuery used for DOM manipulation  
- ✅ RSS / REST API integration for live external data  
- ✅ Form validation and interactivity  

---

## 🔹 File Structure  

```
personal-website/
│── index.html
│── css/
│   └── style.css
│── js/
│   ├── script.js       # General scripts & validation
│   ├── articles.js     # Dev.to Articles Feed
│   ├── gallery.js      # Interactive Project Gallery (jQuery)
│   └── weather.js      # Live Weather API integration
│── images/
│   └── (profile pic, project screenshots)
│── README.md
```

---

## 🔹 How to Run Locally  
1. Clone this repo:  
   ```bash
   git clone https://github.com/Nasta-12/personal-website.git
   ```
2. Open `index.html` in any browser.  

---

✨ This project was created by **Nandana Stalin**, 3rd year B.Tech (AI & DS), Rajagiri School of Engineering & Technology.  
