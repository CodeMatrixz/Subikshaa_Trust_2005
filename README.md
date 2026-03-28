# Charity Unified Application

A comprehensive full-stack application for a charity organization, featuring a modern React frontend and a robust Node.js/Express backend. This project is unified to allow simultaneous development and deployment of both components.

## 🚀 Features

### Frontend
- **Modern UI**: Built with React and styled with modern CSS.
- **Dynamic Pages**: Over 20+ pages including Home, About, Programs, Donate, and Impact.
- **Interactive Forms**: Volunteer registration and donation application forms.
- **Responsive Design**: Optimized for all device sizes.
- **SEO Optimized**: Includes dynamic meta tags for better search engine visibility.

### Backend
- **RESTful API**: Clean API endpoints for donations, applications, and settings.
- **Database Integration**: Powered by MongoDB (Mongoose) with fallback mock support.
- **Authentication**: JWT-based security for protected routes.
- **Payment Integration**: Stripe support for processing donations.
- **Email Service**: Automated notifications for applications and donations via Nodemailer.
- **File Uploads**: Secure handling of photo uploads using Multer.

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, Framer Motion, Lucide React, React Router 7.
- **Backend**: Node.js, Express, MongoDB, Mongoose, JWT, Multer, Nodemailer, Stripe.
- **Development**: Concurrently for running both frontend and backend together.

## 📂 Project Structure

```text
Charity/
├── back-end/          # Express server, models, and routes
│   ├── models/        # Mongoose schemas (Application, Donation, etc.)
│   ├── routes/        # API route definitions
│   ├── uploads/       # Stored user-uploaded files
│   └── server.js      # Backend entry point
├── front-end/         # React application (Vite-powered)
│   ├── src/
│   │   ├── pages/     # Component pages (Home, About, etc.)
│   │   ├── components/# Reusable UI components
│   │   └── styles/    # CSS files
│   └── public/        # Static assets
├── package.json       # Unified scripts for the entire project
└── README.md          # This file
```

## 🏁 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (Running locally or via Atlas)

### Installation

1. Install dependencies for the entire project:
   ```bash
   npm run install-all
   ```

2. Set up environment variables:
   - Create a `.env` file in the `back-end` directory.
   - Add `MONGO_URI`, `PORT`, `STRIPE_SECRET_KEY`, and email credentials.

### Running the App

Start both the frontend and backend in development mode:
```bash
npm run dev
```

The frontend will usually be at `http://localhost:5173` and the backend at `http://localhost:5000`.

## 📜 License

This project is licensed under the ISC License.
