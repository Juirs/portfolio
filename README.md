# 🚀 Modern React Portfolio | Ahmed Bestun

A high-performance personal portfolio built with the latest React ecosystem. This project is a showcase of modern front-end engineering, featuring automated email handling, and a sleek UI powered by Tailwind CSS v4.

Developed with precision using **WebStorm** and built for speed with **Vite**.

---

## 🌐 Live Demo
**COMING SOON**

---

## 🛠 The Tech Stack

This project utilizes the latest stable releases of the React ecosystem:

| Category | Technology | Implementation |
| :--- | :--- | :--- |
| **Framework** | **React 19** | Latest concurrent features and optimized rendering. |
| **Build Tool** | **Vite 7** | Lightning-fast HMR and optimized production bundling. |
| **Routing** | **React Router 7** | Modern routing architecture with improved navigation logic. |
| **Styling** | **Tailwind CSS v4** | Using the new `@tailwindcss/vite` engine. |
| **Forms** | **React Hook Form** | Performant and flexible form validation. |
| **Email Integration** | **EmailJS** | Client-side email delivery for the contact form. |
| **Iconography** | **Tech Stack Icons** | Specialized SVG icons for developer portfolios. |

---

## ✨ Key Features

* **⚡ React 19 + Vite 7:** Built on the cutting edge of web performance.
* **📧 Validated Contact Form:** Integrated with **EmailJS** and **React Hook Form** for reliable, validated messaging.
* **🎨 Tailwind v4 Styling:** Modern, responsive design using the latest CSS-first configuration.
* **🛤 Smooth Navigation:** Dynamic routing and page management via **React Router 7**.
* **🛠 Clean Codebase:** Developed in **WebStorm** with a modular directory structure and strict ESLint rules.

---

## How To Use

To to create your own portfolio, using this template, follow these steps:

- Clone the Repository
- Install Dependencies: `npm install`
- Start the Development Server: `npm run dev` (if using Vite)
- Create a free account on EmailJS to get your service id, template id, and public key. This step is very important as the email form will not work without it.
- Ensure all the values we send to the EmailJS API are reflected in the templates you create on EmailJS. (from_name, from_email, etc).
- Create a .env file in the root directory of your project.
- Add the following variables to the .env file: 
    - REACT_APP_EMAILJS_SERVICE_ID=your_service_id
    - REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
    - REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
- Replace the image assets in the images folder with your own images. (unless we look extremely identical)


## 📂 Project Structure

```text
├── public/              # Static assets (Resume, Favicon)
├── src/
│   ├── assets/          # Global images and media
│   ├── components/      # Reusable UI components (Navbar, ProjectCard)
│   ├── helpers/         # Utility functions and logic helpers
│   ├── pages/           # High-level page components (Home, Projects)
│   ├── styles/          # Tailwind v4 directives and global styles
│   ├── App.jsx          # Root component & Route definitions
│   └── main.jsx         # React 19 entry point
├── eslint.config.js     # Linting rules for code quality
├── vite.config.js       # Vite + Tailwind v4 configuration engine
└── package.json         # Dependencies and build scripts