# GitHub Issues Tracker

A responsive and interactive issue tracking web application built with **HTML**, **CSS**, and **Vanilla JavaScript**. The project provides a clean interface for viewing, searching, and filtering issues through a simple dashboard experience.

This project is designed to simulate a modern issue management system with a demo login page, issue status filters, search functionality, dynamic issue count, and detailed modal views for individual issues.

## Live Demo

[View Live Site](https://ahnaf-afif.github.io/Github-Issues-with-api/main.html)

## Repository Link

[GitHub Repository](https://github.com/Ahnaf-Afif/Github-Issues-with-api)

## Project Overview

This project was created to present:

- A simple issue tracking dashboard interface
- A demo login flow for accessing the tracker
- Dynamic issue loading from an external API
- Status-based filtering for **All**, **Open**, and **Closed** issues
- Search functionality for finding specific issues
- A modal-based detailed view for each issue

The main goal of this project is to build a clean and user-friendly frontend that demonstrates API integration, DOM manipulation, and responsive UI design using JavaScript.

## Features

- Demo login page with predefined credentials
- Responsive issue dashboard layout
- Dynamic issue fetching from an external API
- Filter buttons for **All**, **Open**, and **Closed** issues
- Search bar for issue lookup
- Dynamic issue count display
- Loading spinner while fetching data
- Issue cards with status, priority, labels, author, assignee, and timestamps
- Modal popup for detailed issue information
- Empty-state message when no matching issue is found
- Styled active filter button state

## Tech Stack

This project was built using the following technologies:

- **HTML5**
- **CSS3**
- **Vanilla JavaScript (ES6+)**
- **Tailwind CSS** (via browser CDN)
- **DaisyUI**
- **Font Awesome**
- **Google Fonts**

## Project Structure

```bash
Github-Issues-with-api/
├── assets/
├── README.md
├── index.html
├── main.html
├── main.js
├── script.js
├── style.css
└── tailwind.config.js
```

## How It Works

The project follows a simple two-page flow:

- **index.html** – Displays the login page for demo access
- **script.js** – Validates the demo credentials and redirects the user to the issue dashboard
- **main.html** – Renders the main issue tracker interface with search, filters, issue count, and issue cards
- **main.js** – Handles issue fetching, filtering, searching, modal rendering, loading state, and dynamic issue count updates
- **style.css** – Adds custom font styling and active button styles

### Application Flow

1. The user lands on the login page.
2. After entering the demo credentials, the user is redirected to the dashboard page.
3. The dashboard automatically fetches issues from the API.
4. Users can:
   - View all issues
   - Filter only open issues
   - Filter only closed issues
   - Search issues by keyword
5. Clicking on any issue card opens a modal with more details about that issue.

## API Usage

This project uses external API endpoints to load and search issues.

### Endpoints Used

#### Get All Issues

```bash
GET https://phi-lab-server.vercel.app/api/v1/lab/issues
```

#### Search Issues

```bash
GET https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=keyword
```

## Installation and Setup

Since this is a static frontend project, no package installation or build step is required.

### Prerequisites

Make sure you have:

- A modern web browser
- Optionally, **VS Code Live Server** for a smoother local development experience

### Clone the Repository

```bash
git clone https://github.com/Ahnaf-Afif/Github-Issues-with-api.git
```

### Navigate to the Project Folder

```bash
cd Github-Issues-with-api
```

### Run the Project

You can run the project in either of the following ways:

#### Option 1: Open Directly in Browser

Open `index.html` in your browser.

#### Option 2: Use Live Server

If you use VS Code, run the project with the **Live Server** extension by opening `index.html`.

## Demo Login Credentials

Use the following demo credentials to access the dashboard:

```txt
Email: admin
Password: admin123
```

## Customization

This project can be easily customized by updating:

- API endpoint URLs in `main.js`
- Demo login credentials in `script.js`
- Label styles and icons
- Issue card layout and modal design
- Search and filter UI behavior
- Custom assets and branding
- Typography and color theme

## Future Improvements

Possible future improvements for this project include:

- Integrating with the real **GitHub Issues API**
- Adding pagination for large issue lists
- Adding sorting by priority, date, or status
- Debouncing search input for better performance
- Adding issue creation and editing features
- Adding authentication with a backend
- Persisting login state
- Improving accessibility
- Adding dark mode support

## Author

**Afif Siddique**  
A frontend learner and aspiring developer passionate about building responsive and interactive web applications.

## Acknowledgements

This project uses modern frontend libraries and UI utilities such as Tailwind CSS, DaisyUI, Font Awesome, and browser-based JavaScript APIs to create a clean issue tracking experience.
