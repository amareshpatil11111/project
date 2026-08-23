# Milan J - Portfolio Website (React, Express & Supabase)

Welcome to the full-stack developer portfolio for **Milan J**, a Lead Cloud & DevOps Engineer. This project features a clean, responsive, and secure dashboard-like layout styled in Vanilla CSS, utilizing React for the interactive UI, Node.js/Express for backend processing, and Supabase (PostgreSQL) for secure contact form storage.

---

## Architecture & Workflow

The architecture follows a decoupled Client-Server model running on a modern local stack:

1. **Frontend (React/Vite)**: 
   - Uses a **Modular Card Grid** dashboard layout that aggregates professional summaries, experiences, skills, education, projects, and a contact form into a single responsive grid.
   - Leverages **React Router** for focused page-level routing.
   - Submits contact requests via `fetch` to the Express backend and displays success/error **Toast Notifications**.
   
2. **Backend (Node.js/Express)**:
   - Exposes a REST API (`POST /api/contact`) to receive form submissions.
   - Validates user input (checks required fields and verifies email formats).
   - Secures connections with `cors` and `helmet` security headers.
   - Utilizes `.env` environment variables to protect database credentials.

3. **Database (Supabase PostgreSQL)**:
   - Receives contact form records securely using the Supabase Node Client.
   - Stores each entry inside a PostgreSQL `contacts` table.

---

## Supabase Database Setup

Follow these steps to initialize your database table in Supabase:

1. Navigate to your [Supabase Dashboard](https://supabase.com).
2. Open the **SQL Editor** from the left navigation bar.
3. Click **New Query** and paste the following SQL command:

```sql
-- Create contacts table to handle form submissions
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS (Row Level Security) if appropriate, or manage via API Client keys
```

4. Click **Run** to execute the query and create the table.

---

## Environment Variables Configuration

Copy the example configuration files and fill in your actual credentials.

### Backend Configurations (`backend/.env`)

Navigate to the `backend` folder and create a `.env` file:

```env
# Supabase Project Credentials (obtain from Project Settings -> API)
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.your-key-here

# Server Port Settings
PORT=5000
CLIENT_URL=http://localhost:5173
```

### Frontend Configurations (`frontend/.env`)

Navigate to the `frontend` folder and create a `.env` file:

```env
# API Server base URL
VITE_API_URL=http://localhost:5000
```

---

## Startup Commands

Follow these steps to run the frontend and backend locally:

### 1. Prerequisite
Ensure you have [Node.js](https://nodejs.org) (v18+ recommended) installed.

### 2. Startup the Backend Server
```bash
# Navigate to backend directory
cd backend

# Install dependencies (Express, Cors, Dotenv, Supabase Client, etc.)
npm install

# Start the server in Development mode (runs on port 5000)
npm run dev
```

### 3. Startup the Frontend Client
Open a new terminal window:
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies (React, React Router, Lucide Icons, etc.)
npm install

# Start the local development server (runs on port 5173)
npm run dev
```

The application will be accessible at [http://localhost:5173](http://localhost:5173).

---

## File Structure

```
portfolio/
├── frontend/                     # Vite React application
│   ├── public/
│   │   └── assets/
│   │       ├── profile.jpg       # Profile picture
│   │       └── Cloud_Engineer_Resume.pdf  # Downloadable PDF resume
│   └── src/
│       ├── components/           # Reusable components & sections
│       │   ├── Card.jsx
│       │   ├── Toast.jsx
│       │   ├── Header.jsx
│       │   ├── Footer.jsx
│       │   ├── HeroSection.jsx
│       │   └── ...
│       ├── pages/                # Page route components
│       │   ├── Dashboard.jsx
│       │   ├── About.jsx
│       │   └── ...
│       ├── App.jsx               # App routing
│       └── index.css             # Main styling system
├── backend/                      # Node.js/Express server
│   ├── server.js                 # API routes & Supabase connector
│   └── package.json
└── README.md                     # Documentation
```
