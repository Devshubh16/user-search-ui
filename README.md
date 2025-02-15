# User Search Frontend

## 📌 Overview
This is a **React-based Single Page Application (SPA)** that provides a **typeahead search** feature for users. It integrates with a **Spring Boot User API** to fetch user data and display detailed information upon selection.

## 🚀 Features
- **Typeahead Search**: Fetches users dynamically as you type.
- **User Details Page**: Displays user information, including an image.
- **Atomic Design**: Modular and reusable component structure.
- **Lazy Loading**: Optimized performance with on-demand loading.
- **Responsive Design**: Works across all screen sizes.
- **Exception Handling**: Graceful fallback for errors and missing data.
- **Environment Layering**: Configurable API base URL via `.env`.

## 📁 Project Structure
```
📦 user-search-frontend
├── 📂 src
│   ├── 📂 components (Reusable UI components)
│   ├── 📂 pages (Page-level components)
│   ├── 📂 hooks (Custom hooks like useDebounce)
│   ├── 📂 services (API integration layer)
│   ├── 📂 assets (Images, static files)
│   ├── App.js (Routing and main layout)
│   ├── index.js (Entry point)
├── .env (Environment variables)
├── package.json (Dependencies & scripts)
├── README.md (This document)
```

## 🛠️ Installation & Setup
### **1️⃣ Prerequisites**
- **Node.js** (Latest LTS version recommended)
- **npm or yarn** (Package manager)

### **2️⃣ Clone Repository**
```sh
git clone https://github.com/your-repo/user-search-frontend.git
cd user-search-frontend
```

### **3️⃣ Install Dependencies**
```sh
npm install
# OR
yarn install
```

### **4️⃣ Set Up Environment Variables**
Create a `.env` file in the root directory and configure API settings:
```
REACT_APP_API_BASE_URL=http://localhost:8080/api
```

### **5️⃣ Start Development Server**
```sh
npm start
# OR
yarn start
```
Runs the app in development mode at `http://localhost:3000/`.

## 📦 Build for Production
```sh
npm run build
# OR
yarn build
```
Creates an optimized production build in the `build/` folder.

## 🎨 Code Quality & Best Practices
- **Atomic Design** for maintainable components.
- **Code Linting** using ESLint & Prettier.
- **Lazy Loading** for optimized performance.
- **Responsive UI** with CSS Modules & Styled-components.

## 🤝 Contributing
1. **Fork** the repository.
2. **Create a new branch** (`feature-branch`).
3. **Commit your changes**.
4. **Push to GitHub** and open a **pull request**..

## 📬 Contact
For any queries or suggestions, reach out at **shubhanshu16116716@gmail.com**.


