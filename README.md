# Task Management Dashboard

A modern Task Management Dashboard built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

### Authentication (Mock)

* Login page with mock authentication
* Login state stored in localStorage
* Automatic redirect to dashboard after login
* Logout functionality

### Task Management

* Create Task
* Edit Task
* Delete Task
* Update Task Status
* Due Date Management
* Priority Management

### Filtering & Sorting

* Search tasks by title
* Filter tasks by status
* Sort tasks by due date

### Additional Features

* Pagination
* Dark Mode
* Responsive Design
* Reusable Components
* TypeScript Support

## Tech Stack

* Next.js 16
* TypeScript
* Tailwind CSS
* shadcn/ui
* next-themes
* Lucide React

---

# Setup Instructions

## Clone Repository

```bash
git clone <repository-url>
cd task-management-dashboard
```

## Install Dependencies

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

Application will run at:

```bash
http://localhost:3000
```

## Production Build

```bash
npm run build
npm start
```

---

# Folder Structure

```text
app/
├── dashboard/
│   └── page.tsx
├── login/
│   └── page.tsx
├── layout.tsx
├── page.tsx

components/
├── TaskCard.tsx
├── TaskDialog.tsx
├── TaskFilters.tsx
├── TaskStats.tsx
├── Pagination.tsx
├── theme-provider.tsx
├── theme-toggle.tsx

types/
└── task.ts
```

## Folder Explanation

### app/

Contains application routes and pages.

### components/

Contains reusable UI components used throughout the application.

### types/

Contains TypeScript interfaces and type definitions.

---

# Design Decisions

## Next.js App Router

Used App Router for modern routing and better scalability.

## TypeScript

Used TypeScript to ensure type safety and maintainable code.

## Reusable Components

Separated functionality into reusable components such as:

* TaskCard
* TaskDialog
* TaskFilters
* TaskStats
* Pagination

This improves maintainability and scalability.

## Local Storage

Used localStorage for:

* Authentication state
* Client-side persistence

This satisfies the assignment requirement without requiring a backend.

## Responsive Design

Used Tailwind CSS responsive utilities to ensure compatibility across:

* Mobile
* Tablet
* Desktop

## Dark Mode

Implemented dark mode using:

* next-themes
* Tailwind dark classes

Provides a better user experience.

---

# Screenshots

## Login Page

Add screenshot here:
<img width="1864" height="1046" alt="image" src="https://github.com/user-attachments/assets/401cb5b3-b111-4c68-82f7-fe528d521360" />


```md
![Login Page](./screenshots/login.png)
```

## Dashboard

Add screenshot here:

<img width="1867" height="1048" alt="image" src="https://github.com/user-attachments/assets/e14dd0e3-33c4-401a-8339-625481c13bc6" />


```md
![Dashboard](./screenshots/dashboard.png)
```

## Dark Mode

Add screenshot here:


<img width="1860" height="1035" alt="image" src="https://github.com/user-attachments/assets/0811155f-b981-4728-9c25-73564437eb96" />


```md
![Dark Mode](./screenshots/dark-mode.png)
```

## Task Creation Modal

Add screenshot here:

```md
![Task Modal](./screenshots/task-modal.png)
```

---

# Future Improvements

* Backend Integration
* User-specific Tasks
* Drag and Drop Kanban Board
* Unit Testing
* API Integration
* Notifications

---

# Author

Jeslin Gabriel A J
B.Tech Computer Science and Engineering
