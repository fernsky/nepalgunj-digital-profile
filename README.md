# Nepalgunj Digital Profile

This is a modern web application built with [Astro](https://astro.build/), designed to showcase the digital profile of Nepalgunj. It features English-Nepali internationalization (i18n), dark/light mode, dynamic animations using D3.js, and is styled with Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** [Astro](https://astro.build/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations/Data Viz:** [D3.js](https://d3js.org/)
- **Internationalization (i18n):** [astro-i18next](https://github.com/yassinedoghri/astro-i18next)
- **Version Control:** Git / GitLab

## 🛠️ Prerequisites

Before you begin, ensure you have **Node.js** installed on your machine. The latest version of Astro requires Node.js `v22.12.0` or higher.

1. **Check Node.js Installation:**
   Run the following command in your terminal to see if Node is installed:
   ```bash
   node -v
   ```
   *If it is not installed, download and install it from the [Node.js Official Website](https://nodejs.org/).*

## 📦 Installation Guide

Follow these steps to set up the project and install all required dependencies.

### 1. Initialize the Astro Project

If you are setting up this project from scratch locally and want to initialize Astro in this directory, run:

```bash
pnpm create astro@latest .
```
*(Follow the on-screen prompts to set up your project preference, such as TypeScript and project template).*

### 2. Install Tailwind CSS

Astro provides an automated utility to add Tailwind CSS. Run this command to install Tailwind and automatically configure the `astro.config.mjs` and `tailwind.config.mjs` files:

```bash
pnpm astro add tailwind
```
*This handles both the dependency installation and configuration for dark/light mode capabilities.*

### 3. Install i18n Dependencies

For the English-Nepali translation feature, we will use `astro-i18next`. Install it using Astro's integration command:

```bash
pnpm astro add astro-i18next
```

### 4. Install D3.js

For effects, data visualization, and animations, install D3.js. If you are using TypeScript, also install the types for development.

```bash
pnpm add d3
pnpm add -D @types/d3
```

### 5. Install All Dependencies (If cloning existing repo)

If you are simply pulling this repository from GitLab and the `package.json` is already set up by a collaborator, you only need to run:

```bash
pnpm install
```

## 💻 Development Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Installs all dependencies                        |
| `pnpm run dev`            | Starts local dev server at `localhost:4321`      |
| `pnpm run build`          | Builds your production site to `./dist/`         |
| `pnpm run preview`        | Previews your build locally                      |
| `pnpm astro ...`          | Run CLI commands like `astro add`, `astro check` |

## 🤝 Collaborating via GitLab

Since we are working via GitLab, please observe the `.gitignore` rules and follow a branch-based workflow:

1. Clone the repository:
   ```bash
   git clone <your-gitlab-repo-url>
   ```
2. Create your feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Merge Request on GitLab.
