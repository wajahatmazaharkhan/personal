# WM Khan — Personal Portfolio

A modern, single-page portfolio website for **WM Khan**, built with React, TypeScript, and Vite. Designed to showcase research, professional experience, public engagement, and academic contributions.

---

## ✨ Features

- **Single-page scrolling layout** with smooth anchor navigation
- **Floating pill-style header** with dark mode toggle
- **Hero section** with portrait, social links, and CTAs
- **Journey timeline** — an interactive vertical timeline of career milestones
- **Research section** — research interests, methods, and publication cards
- **Experience section** — professional roles and organizational affiliations
- **Engagement section** — public speaking, fellowships, and conference highlights
- **Testimonials carousel** — interactive slider with thumbnail navigation
- **Newsletter subscription** form
- **Responsive design** — works across desktop and mobile
- **Dark / Light mode** theming via CSS custom properties

---

## 🛠 Tech Stack

| Layer       | Technology                          |
| ----------- | ----------------------------------- |
| Framework   | [React 19](https://react.dev)       |
| Language    | TypeScript                          |
| Build Tool  | [Vite](https://vite.dev)            |
| Styling     | Tailwind CSS v4 + CSS Variables     |
| Routing     | React Router DOM (anchor links)     |
| Animations  | Framer Motion                       |
| Icons       | Lucide React + custom SVGs          |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/wajahatmazaharkhan/personal.git
cd personal

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be live at **http://localhost:5173**.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── assets/          # Images & portraits
├── components/
│   ├── Header.tsx   # Floating navigation bar
│   └── Footer.tsx   # Footer with logo & contact
├── pages/
│   └── Home.tsx     # Main single-page layout (all sections)
├── App.tsx          # Router wrapper
├── main.tsx         # Entry point
└── index.css        # Global styles & theme variables
```

---

## 📄 License

This project is private. All rights reserved.
