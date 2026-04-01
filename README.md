# 🚀 Kuei Poch Kuei, Developer Portfolio

## ✨ Overview

A **modern, high-performance, and recruiter-focused portfolio** designed with a strong emphasis on:

* Clean UI/UX
* Fast performance
* Full responsiveness
* Professional engineering standards

---

## 🎯 Purpose

Built to showcase:

* 👨‍💻 Technical expertise
* 🧠 Problem-solving skills
* 🏗️ Real-world project experience
* 🔐 Professional engineering mindset

---

## 🛠️ Tech Stack

| Category      | Technologies          |
| ------------- | --------------------- |
| Frontend      | React (Vite) ⚛️       |
| Styling       | Tailwind CSS 🎨       |
| Animation     | Framer Motion 🎬      |
| Icons         | React Icons 🎯        |
| Email Service | EmailJS 📩            |
| SEO           | React Helmet Async 🔍 |
| Background FX | tsParticles ✨         |

---

## 🌟 Features

* 🌗 Dark / Light theme toggle
* ✍️ Animated signature loading screen
* 🧭 Smooth navigation & scroll animations
* 📱 Fully responsive (mobile → desktop)
* 📊 Scroll progress indicator
* ✨ Micro-interactions and transitions
* 🔍 SEO optimized (Open Graph + Twitter cards)
* 📬 Functional contact form
* ⚡ High performance & optimized assets

---

## 📁 Project Structure

```
src/
├── components/
├── hooks/
├── data/
├── App.jsx
└── main.jsx
```

---

## ⚙️ Getting Started

### 📌 Requirements

* Node.js (v18+)
* npm (v9+)

---

### 📥 Installation

```bash
npm install
```

---

### ▶️ Run Development Server

```bash
npm run dev
```

---

### 🏗️ Build for Production

```bash
npm run build
```

---

### 🔍 Preview Build

```bash
npm run preview
```

---

## 🔐 Environment Variables

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

---

## 🚀 CI/CD with GitHub Actions

This project includes automated CI/CD using **GitHub Actions**.

### 📂 Workflow File

```
.github/workflows/ci.yml
```

### ⚡ CI/CD Pipeline Features

* ✅ Install dependencies
* 🧪 Run tests (if added)
* 🏗️ Build production bundle
* 🚀 Deploy (optional: Vercel/Netlify integration)

---

### 🧩 Example GitHub Actions Workflow

```yaml
name: CI Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Build project
        run: npm run build
```

---

## 🌍 Deployment

### 🔵 Vercel

1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy 🚀

### 🟢 Netlify

1. Connect repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variables

---

## 🎨 Customization

* All content → `portfolioData.js`
* Styling → Tailwind CSS
* Animations → Framer Motion
* Theme → `useTheme.js`
* Scroll effects → `useSectionInView.js`

---

## ⚡ Performance

* Lazy-loaded sections
* Optimized animations
* Mobile-first responsiveness
* Lightweight production build

---

## ♿ Accessibility

* Semantic structure
* Readable typography
* Touch-friendly UI
* Cross-device compatibility

---

## 📬 Contact

* 📧 Email: **[kueiyiee@gmail.com](mailto:kueiyiee@gmail.com)**
* 💼 LinkedIn: linkedin.com/in/kueiyiee
* 💻 GitHub: github.com/kueiyiee
* 🌐 Website: kueiyiee.tech

---

## 📄 License

This project is licensed for **personal portfolio use**.
Feel free to adapt it with proper attribution.

---

## 👨‍💻 Author

**Kuei Poch Kuei**
Full-Stack Developer | Security Engineer

> Building secure, scalable, and modern systems with precision and purpose.
