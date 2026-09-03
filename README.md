# Atik Hasan — Personal Portfolio & Resume Site

A single-page personal portfolio site featuring an interactive resume, animated skill bars, a filterable project gallery, and a working contact form.

**🔗 Live Site:** [atikhasandev.github.io](https://atikhasandev.github.io/)

![Portfolio preview](./img/portfolio/1.jpg)


---

## 📌 Overview

This is my personal developer portfolio — a single-page site with smooth section transitions that presents who I am, my education, my skillset, and a gallery of my work, plus a way to get in touch directly through the page.

## 🛠️ Built With

- **HTML5**
- **CSS3**
- **[Bootstrap](https://getbootstrap.com/)** — responsive grid & components
- **jQuery** — DOM interactions and section toggling
- **[Owl Carousel](https://owlcarousel2.github.io/OwlCarousel2/)** — carousel/slider functionality
- **[Magnific Popup](https://dimsemenov.com/plugins/magnific-popup/)** — portfolio image lightbox
- **[Linea Icons](https://linea.io/)** & **[Ionicons](https://ionic.io/ionicons)** — iconography
- **PHP** — contact form backend (`mail.php`)

## ✨ Features

- **Single-page navigation** with animated section transitions (no page reloads)
- **About section** with a personal intro and a quick-facts list
- **Animated skill bars** for technical and language proficiency
- **Education timeline** listing academic background
- **Filterable portfolio gallery** (All / Web / Tech / Photography) with a lightbox popup per project
- **Contact form** with client-side validation, submitting via PHP to email
- Fully responsive across desktop, tablet, and mobile

## 📦 Dependencies

This project has no package manager — all libraries are vendored directly inside the repo:

| Dependency | Purpose |
|---|---|
| Bootstrap | Responsive layout grid |
| jQuery | DOM manipulation, plugin support |
| Owl Carousel | Slider components |
| Magnific Popup | Portfolio lightbox |
| Validator.js | Contact form validation |
| Linea Icons / Ionicons | Icon sets |

## 🚀 Run Locally

This is a static frontend with a PHP contact form, so you'll need a local PHP server for the contact form to work (the rest of the site runs fine without it).

1. Clone the repository
   ```bash
   git clone https://github.com/AtikHasanDev/AtikHasanDev.github.io.git
   ```
2. Navigate into the project folder
   ```bash
   cd AtikHasanDev.github.io
   ```
3. **Option A — Static preview only** (no contact form):
   Open `index.html` directly in your browser, or use VS Code's **Live Server** extension.

4. **Option B — Full functionality (including contact form)**:
   Run PHP's built-in server from the project folder:
   ```bash
   php -S localhost:8000
   ```
   Then visit `http://localhost:8000` in your browser.

## 🔗 Links

- **Live Site:** [atikhasandev.github.io](https://atikhasandev.github.io/)
- **Repository:** [github.com/AtikHasanDev/AtikHasanDev.github.io](https://github.com/AtikHasanDev/AtikHasanDev.github.io)
- **LinkedIn:** [linkedin.com/in/atikhasan-](https://www.linkedin.com/in/atikhasan-)
- **Facebook:** [facebook.com/atikhasan.inbox](https://www.facebook.com/atikhasan.inbox)
