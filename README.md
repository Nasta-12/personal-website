Personal Portfolio Website
📌 Overview

This is my Personal Portfolio Website created as part of the Web Programming Assignment.
The website showcases my profile, education, technical expertise, projects, and contact details, along with external data integration and interactive features.

The site is live at:
👉 https://Nasta-12.github.io/personal-website/

📂 Project Structure
personal-website/
│
├── index.html            # Homepage
├── profile.html          # Biography, career goals
├── cv.html               # Education, skills, certifications
├── education.html        # Academic qualifications & technical expertise
├── projects.html         # Interactive projects gallery
├── contact.html          # Contact form with LinkedIn & Email links
│
├── css/
│   └── style.css         # External stylesheet
│
├── js/
│   └── script.js         # JavaScript for interactivity & API integrations
│
├── images/               # Screenshots & project images
│
└── README.md             # Documentation

🖥️ Website Features
✅ Core Pages

Home – Welcome message + profile picture (to be added).

Profile – Biography, career goals, and interests.

CV – Education, skills, certifications, and internship details.

Education & Technical Expertise – Details of academic background, tools, and technologies.

Projects – Contains at least two projects with descriptions and screenshots.

Contact – Contact form (with validation) + clickable links to LinkedIn & Email.

✅ HTML5 Features

Used semantic tags: <header>, <nav>, <section>, <article>, <footer>.

Included an <iframe> to embed Google Maps (live location).

✅ CSS Styling

Fully responsive layout (mobile + desktop).

Styled navigation bar, headers, and sections for consistency.

External style.css ensures maintainability.

✅ JavaScript Interactivity

Form Validation → Ensures all fields are filled before submitting.

Dynamic Greeting → Displays greeting message based on the time of day.

jQuery Projects Gallery → Clicking a project thumbnail updates the main display with project details dynamically.

🌍 External Data Integration
1. Dev.to RSS Feed

Articles are fetched using the Dev.to API (no API key required).

Displays the 5 most recent articles with clickable links in the “My Articles” section.

Implemented using JavaScript fetch().

2. Interactive Projects Gallery (jQuery)

jQuery is used to select and update DOM elements.

Clicking a project thumbnail updates the main display area with the title, description, and screenshot.

3. Live Weather Information (Open-Meteo API)

Integrated the Open-Meteo API (no API key needed).

Features:

Input box for entering a city name.

On clicking “Get Weather”, data is fetched and displayed:

City name

Current temperature (°C)

Weather description

Weather icon

Errors are handled (e.g., invalid city).

4. Live Location Map (OpenStreetMap)

Embedded a map using <iframe> that shows the user’s city.

Integrated with geolocation so the user can view their current location dynamically.

📑 Deployment

The website is hosted on GitHub Pages.

Repository: https://github.com/Nasta-12/personal-website

Live Site: https://Nasta-12.github.io/personal-website/

🚀 How to Run Locally

Clone the repository:

git clone https://github.com/Nasta-12/personal-website.git


Open the project folder:

cd personal-website


Open index.html in your browser.

✨ Key Learnings

Using HTML5 semantic elements for structured design.

Applying CSS3 for responsive, mobile-first styling.

Implementing JavaScript fetch() to integrate live data (weather & RSS feeds).

Using jQuery for dynamic DOM updates and interactive UI.

Deploying a static website using GitHub Pages.

📧 Contact

Name: Nandana Stalin

Email: nandanastalin@gmail.com

LinkedIn: https://www.linkedin.com/in/nandana-stalin-970834284
