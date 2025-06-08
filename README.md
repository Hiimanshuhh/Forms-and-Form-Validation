# React Form with Validation and Success Route

A simple yet comprehensive React-based form with built-in validation, error messaging, and a success route displaying the submitted data. This project demonstrates core React concepts, including state management, form handling, routing, and conditional rendering — **without using any third-party libraries** for validation.

## ✨ Features

- **Validation:** Required field checks with real-time error messages.
- **Password Field:** Toggle visibility (show/hide password).
- **Phone Number:** Country code and number input handling.
- **Country & City Dropdowns:** Populate cities based on the selected country.
- **PAN & Aadhar:** Required fields with validation.
- **Form Submission:** Submit button is disabled until all fields are valid.
- **Success Route:** Displays all the entered details on a new route after successful submission.
- **Clean UI:** Simple, user-friendly design with React best practices.

## 🚀 Tech Stack

- **React** (functional components & hooks)
- **React Router DOM** (for routing between form and success pages)
- **CSS** 

## 📝 Form Fields

| Field | Type | Validation |
|-------|------|------------|
| First Name | Text | Required |
| Last Name | Text | Required |
| Username | Text | Required |
| E-mail | Email | Required, valid format |
| Password | Password | Required, toggle visibility |
| Phone No. | Text | Required, format: country code and number |
| Country | Dropdown | Required |
| City | Dropdown | Required |
| PAN No. | Text | Required |
| Aadhar No. | Text | Required |

## 🛠️ How to Run

Follow these steps to run the project locally:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Hiimanshuhh/Forms-and-Form-Validation]
   cd FORM
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start The Server**
   ```bash
   npm run dev
   ```

## 📂 Project Structure

```bash
FORM/
├── Images/
│   └── background.jpg
├── node_modules/ (Directory, content not shown)
├── src/
│   ├── Components/
│   │   ├── FormPage.jsx
│   │   └── SuccessPage.jsx
│   ├── Styles/
│   │   └── FormPage.css
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js



