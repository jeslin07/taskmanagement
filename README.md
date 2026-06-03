# Task Management Dashboard

A responsive task management application built using Next.js, TypeScript, Tailwind CSS, and shadcn/ui. This project was developed as part of a frontend internship assignment to demonstrate CRUD operations, component-based architecture, state management, filtering, sorting, pagination, dark mode, and basic unit testing.

## Live Demo

https://taskmanagement-phi-five.vercel.app

## GitHub Repository

https://github.com/jeslin07/taskmanagement

---

# Features

### Authentication

* Mock login system
* Login state stored in localStorage
* Redirect to dashboard after login
* Logout functionality

### Task Management

* Create tasks
* Edit tasks
* Delete tasks
* Change task status
* Manage due dates
* Priority support

### Filtering & Sorting

* Search tasks by title
* Filter tasks by status
* Sort tasks by due date

### Additional Features

* Dark mode
* Pagination
* Responsive design
* Reusable components
* TypeScript support
* Basic unit testing

---

# Technologies Used

* Next.js 16
* TypeScript
* Tailwind CSS
* shadcn/ui
* next-themes
* Lucide React
* Jest
* React Testing Library

---

# Installation

Clone the repository:

```bash
git clone https://github.com/jeslin07/taskmanagement.git
cd taskmanagement
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Create a production build:

```bash
npm run build
npm start
```

Run tests:

```bash
npm test
```

---

# Project Structure

```text
taskmanagement/
│
├── app/
│   ├── dashboard/
│   │   └── page.tsx
│   ├── login/
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── ui/
│   ├── Pagination.tsx
│   ├── TaskCard.tsx
│   ├── TaskDialog.tsx
│   ├── TaskFilters.tsx
│   ├── TaskModal.tsx
│   ├── TaskStats.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
│
├── __tests__/
│   └── TaskCard.test.tsx
│
├── lib/
│
├── public/
│
├── types/
│   └── task.ts
│
├── .gitignore
├── components.json
├── eslint.config.mjs
├── jest.config.js
├── jest.setup.js
├── next-env.d.ts
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

---

# Folder Structure Explanation

### app/

Contains all application routes and pages using the Next.js App Router.

### components/

Contains reusable UI components used across the application.

* TaskCard
* TaskDialog
* TaskFilters
* TaskStats
* Pagination
* Theme Provider
* Theme Toggle

### components/ui/

Contains reusable shadcn/ui components.

### **tests**/

Contains unit tests written using Jest and React Testing Library.

* TaskCard.test.tsx

### lib/

Contains utility and helper functions.

### public/

Stores static assets and screenshots.

### types/

Contains TypeScript interfaces and type definitions.

* task.ts

---

# Design Decisions

### Component-Based Architecture

Instead of building the dashboard inside a single page, the application was divided into reusable components. This makes the code easier to maintain, reuse, and scale.

### TypeScript

TypeScript was used to improve type safety and reduce runtime errors during development.

### Local Storage Authentication

Since the assignment required mock authentication, localStorage was used to store login state without requiring a backend.

### Dark Mode

Dark mode was implemented using next-themes to provide a better user experience and demonstrate theme management in Next.js.

### Responsive Design

Tailwind CSS responsive utilities were used to ensure the application works across desktop, tablet, and mobile devices.

### Testing

Basic unit testing was implemented using Jest and React Testing Library to validate component rendering.

---

# Assignment Requirements Coverage

### Authentication

*  Login Page
*  Login State Persistence

### Dashboard

*  Display Tasks
*  Title
*  Description
*  Status
*  Due Date

### CRUD Functionality

*  Create Task
*  Edit Task
*  Delete Task
*  Change Status

### Filtering & Sorting

*  Search by Title
*  Filter by Status
*  Sort by Due Date

### UI Requirements

*  Responsive Design
*  Reusable Components
*  TypeScript
*  shadcn/ui Components

### Bonus Features

*  Pagination
*  Dark Mode
*  Basic Unit Testing

---

# Screenshots

## Login Page

<img width="1864" height="1046" alt="Screenshot 2026-06-03 224530" src="https://github.com/user-attachments/assets/d2dc3194-baff-40cf-bd0b-bce9fbe7bfeb" />


## Dashboard (Light Mode)

<img width="1867" height="1048" alt="Screenshot 2026-06-03 224713" src="https://github.com/user-attachments/assets/e4998b4d-c9e9-4c77-ad45-0f2a67c219f1" />


## Dashboard (Dark Mode)

<img width="1860" height="1035" alt="Screenshot 2026-06-03 225040" src="https://github.com/user-attachments/assets/a9282015-a388-435b-8571-d816fa6e0f60" />


## Create Task Modal

<img width="1863" height="1051" alt="Screenshot 2026-06-03 231251" src="https://github.com/user-attachments/assets/112b3e2b-ec92-41dc-8897-ea756e98cbdb" />


## Edit Task Modal

<img width="1858" height="1043" alt="Screenshot 2026-06-03 231352" src="https://github.com/user-attachments/assets/f3d1c060-7b6d-41f6-b0b9-ad309449bfd4" />


## Search & Filtering

<img width="1848" height="897" alt="Screenshot 2026-06-03 232412" src="https://github.com/user-attachments/assets/1c05ceeb-ec16-42fc-941b-9380e4495796" />


## Pagination

<img width="1841" height="1048" alt="Screenshot 2026-06-03 232308" src="https://github.com/user-attachments/assets/91285fe8-1456-456c-a864-88081d94159b" />

<img width="1839" height="909" alt="Screenshot 2026-06-03 232405" src="https://github.com/user-attachments/assets/feb4b510-d93d-4208-b7ee-f1c96b83d0cc" />


## Unit Testing

<img width="1919" height="1137" alt="Screenshot 2026-06-03 232931" src="https://github.com/user-attachments/assets/50141f95-374f-4cc0-9409-f808aaeff6b3" />


---

# Unit Testing

Jest and React Testing Library were used to implement basic unit testing.

### Test Coverage

* TaskCard Component

### Test Case

* Verifies task title rendering correctly

### Run Tests

```bash
npm test
```

Current Result:

* 1 Test Suite Passed
* 1 Test Passed

---

# Future Improvements

* Backend integration with a database
* User-specific task storage
* Drag-and-drop task management
* Email notifications and reminders
* More comprehensive test coverage
* Real authentication and authorization

---

# Author

Jeslin Gabriel A J

B.Tech Computer Science and Engineering
