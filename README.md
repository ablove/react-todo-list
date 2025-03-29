Todo List Application with React & TypeScript
Todo List App Screenshot (Add your actual screenshot path here)

Description
A modern, responsive Todo List application built with React and TypeScript featuring persistent storage using localStorage. This application helps you manage your daily tasks efficiently with a clean and intuitive interface.

Features
Task Management:

Add new tasks

Mark tasks as complete/incomplete

Edit existing tasks

Delete tasks

View task creation dates

Organization:

Filter tasks (All/Active/Completed)

Task counter

Clean and modern UI

Technical:

Persistent storage using localStorage

Fully responsive design

Type-safe with TypeScript

Keyboard-friendly operations

Technologies Used
Frontend:

React 18

TypeScript

CSS Modules for styling

date-fns for date formatting

Development Tools:

Vite (for fast development)

ESLint & Prettier (for code quality)

Screenshots
All Tasks View
Viewing all tasks

Active Tasks Filter
Filtering active tasks

Completed Tasks
Viewing completed tasks

Mobile View
Responsive mobile design

How to Run
Development Mode
Clone the repository:

bash
Copy
git clone https://github.com/yourusername/react-todo-ts.git
Navigate to project directory:

bash
Copy
cd react-todo-ts
Install dependencies:

bash
Copy
npm install
Start development server:

bash
Copy
npm run dev
Open http://localhost:5173 in your browser

Production Build
Create optimized production build:

bash
Copy
npm run build
Serve the production files:

bash
Copy
npm run preview
Usage Guide
Adding Tasks
Type your task in the input field at the top

Press Enter or click the "Add" button

Managing Tasks
Complete/Incomplete: Click the checkbox

Edit: Double-click the task text or click the edit button

Delete: Click the delete (trash) button

Filtering Tasks
Use the filter buttons at the bottom:

All: Shows all tasks (default)

Active: Shows only incomplete tasks

Completed: Shows only finished tasks

Project Structure
Copy
react-todo-ts/
├── src/
│ ├── components/ # React components
│ │ ├── AddTodo.tsx
│ │ ├── TodoItem.tsx
│ │ └── TodoList.tsx
│ ├── interfaces/ # TypeScript interfaces
│ │ └── Todo.ts
│ ├── styles/ # CSS modules
│ │ ├── AddTodo.css
│ │ ├── App.css
│ │ ├── TodoItem.css
│ │ └── TodoList.css
│ ├── App.tsx # Main application component
│ └── main.tsx # Application entry point
├── public/ # Static files
├── package.json # Project configuration
├── tsconfig.json # TypeScript configuration
├── vite.config.ts # Vite configuration
└── README.md # Project documentation
