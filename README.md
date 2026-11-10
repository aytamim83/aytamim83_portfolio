# Mohammad Tamim — Software & Backend Engineering Portfolio

A modern, fast, zero-dependency portfolio designed specifically for **Software Engineering** and **Backend Engineering** roles.

---

## 🚀 Key Features

- **Backend & Systems Developer Theme**: Sleek dark-mode aesthetic inspired by Linear, Vercel, and GitHub.
- **Interactive Terminal Simulator**: A functional CLI console built right into the browser supporting commands like `help`, `whoami`, `skills`, `projects`, `battleship`, `edu`, `curl api/tamim`, and `clear`.
- **Dynamic & Centralized Data (`js/data.js`)**: All personal info, projects, skills, education, and links live in one clean configuration file. You never have to sift through dense HTML to update your content!
- **Featured Project Cards**: Highlights architecture decisions, state machines, algorithmic complexities, and tech tags.
- **Problem Solving & Competitive Programming Showcase**: Dedicated section emphasizing asymptotic complexity ($O(N)$, $O(\log N)$) and modern C++ STL proficiency.
- **Zero-Build, Pure Standards**: Runs instantly in any browser without needing Node.js or npm packages.
- **100% Responsive & Accessible**: Optimized for mobile screens, tablets, and desktop displays.

---

## 📂 Project Structure

```text
Portfolio/
├── index.html            # Main semantic HTML5 markup & SEO meta tags
├── assets/
│   └── favicon.svg       # Custom developer terminal favicon
├── css/
│   └── style.css         # Modern styling, glassmorphism, responsive grid & animations
├── js/
│   ├── data.js           # ⚙️ YOUR DATA CONFIG FILE (Edit this to customize!)
│   └── script.js         # Interactive terminal, project filtering, and navigation
└── README.md             # Documentation and deployment guide
```

---

## 🛠️ How to Customize Your Portfolio

Open **`js/data.js`** in your editor. You can easily modify:

1. **Personal Information**:
   - `name`: Your full name
   - `title`: Target role (e.g., Software Engineer, Backend Engineer)
   - `location`: Your country / city
   - `bio`: Your engineering elevator pitch

2. **Links**:
   - `github`: Your GitHub profile link (`https://github.com/aytamim83`)
   - `linkedin`: Your LinkedIn profile URL
   - `email`: Your direct email address
   - `resume`: Link to your resume or path to a PDF file in `assets/`

3. **Skills & Projects**:
   - Add new projects or update existing ones (title, description, highlights, tech tags, GitHub repository URL).

4. **Terminal Commands**:
   - Add your own custom commands inside `portfolioData.terminalCommands`!

---

## 🌐 How to Preview Locally

Simply double-click `index.html` to open it in your web browser (Chrome, Firefox, or Edge). No build step, compiler, or server required!

---

## 🚀 How to Deploy for Free (GitHub Pages)

You can publish this portfolio completely free on GitHub Pages under your own domain (`https://aytamim83.github.io`):

1. **Initialize Git & Commit**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   ```

2. **Create a GitHub Repository**:
   - Go to [GitHub](https://github.com/new) and create a repository named `aytamim83.github.io` (or `portfolio`).
   - If named `aytamim83.github.io`, your site will automatically be available at `https://aytamim83.github.io`.

3. **Push your code**:
   ```bash
   git branch -M main
   git remote add origin https://github.com/aytamim83/aytamim83.github.io.git
   git push -u origin main
   ```

4. **Enable GitHub Pages** (if using a repository other than `username.github.io`):
   - Go to Repository **Settings** -> **Pages**.
   - Under **Build and deployment**, set the source branch to `main` / `root` and click **Save**.
   - Your website will be live in 1–2 minutes!
