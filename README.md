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
git clone https://github.com/jeslin07/taskmanagement.git
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
https://taskmanagement-phi-five.vercel.app
```

## Production Build

```bash
npm run build
npm start
```

---
## Folder Structure

```text
task-management-dashboard/
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
├── lib/
│
├── public/
│
├── types/
│   └── task.ts
│
├── README.md
├── tsconfig.json
├── next.config.ts
├── eslint.config.mjs
├── postcss.config.mjs
├── components.json
├── package.json
└── package-lock.json
```

## Folder Structure Explanation

### app/

Contains all application routes and pages using the Next.js App Router.

* `dashboard/page.tsx` → Main task dashboard
* `login/page.tsx` → Mock authentication page
* `layout.tsx` → Root layout
* `globals.css` → Global styles

### components/

Contains reusable UI components.

* `TaskCard.tsx` → Displays task information
* `TaskDialog.tsx` → Create/Edit task dialog
* `TaskFilters.tsx` → Search, filter and sorting controls
* `TaskStats.tsx` → Dashboard statistics cards
* `Pagination.tsx` → Pagination component
* `theme-provider.tsx` → Dark mode provider
* `theme-toggle.tsx` → Theme switcher

### components/ui/

Contains reusable shadcn/ui components.

### lib/

Contains utility/helper functions.

### public/

Stores static assets such as images and screenshots.

### types/

Contains TypeScript interfaces and type definitions.

* `task.ts` → Task interface definition

```
```


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

Shows mock authentication and login functionality.

<img width="1862" height="1049" alt="image" src="https://github.com/user-attachments/assets/b453ed27-63ae-4539-ad51-060f6d7843eb" />


Login Page

---

## Dashboard (Light Mode)

Main dashboard displaying tasks, statistics, filters, and actions.

<img width="1864" height="1045" alt="image" src="https://github.com/user-attachments/assets/75803523-12e5-4f41-8071-d8507a2d40a2" />


Dashboard Light

---

## Dashboard (Dark Mode)

Demonstrates dark mode support using next-themes.

<img width="1860" height="1043" alt="image" src="https://github.com/user-attachments/assets/299d6bad-ddde-42e8-bac8-9069e5ae315f" />


Dashboard Dark

---

## Create Task Modal

Modal form used to create a new task.

<img width="1863" height="1051" alt="image" src="https://github.com/user-attachments/assets/ae3f60dd-8881-499e-8e3b-2d9178a5f005" />


Create Task

---

## Edit Task Modal

Reusable modal component used for editing existing tasks.

<img width="1858" height="1043" alt="image" src="https://github.com/user-attachments/assets/2320b321-25fb-4a44-9392-426fbf45d306" />


Edit Task

---

## Search & Filtering

Demonstrates searching by title and filtering by status.

<img width="1862" height="1045" alt="image" src="https://github.com/user-attachments/assets/ae431400-3e23-4d33-ba0d-f740e75701f4" />


Filtering

---

## Pagination

Shows pagination implemented for better task navigation.

<img width="1841" height="1048" alt="image" src="https://github.com/user-attachments/assets/e9d73960-da0e-489b-991a-238445ce5bca" />

<img width="1848" height="897" alt="image" src="https://github.com/user-attachments/assets/433d08de-d018-4ce1-b133-9f529277c930" />


Pagination

---

## Unit Testing

Basic unit testing implemented using Jest and React Testing Library.

<img width="1919" height="1137" alt="image" src="https://github.com/user-attachments/assets/91c1d370-d537-499f-9f0f-2c95d4a42c98" />


Unit Testing

## Future Improvements

- Backend integration using Node.js and a database
- User-specific task management
- Email and push notifications
- Advanced filtering and sorting options
- Improved test coverage
- Task categories and tags
- Real authentication and authorization
---

# Author

Jeslin Gabriel A J
