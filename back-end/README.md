# Charity Backend

This is the backend component of the Charity Unified Application, built with Node.js, Express, and MongoDB.

For a comprehensive guide on the entire project, including frontend details and overall structure, please refer to the **[Root README](../README.md)**.

## 🛠️ Tech Stack

- **Framework**: Express.js
- **Database**: MongoDB (via Mongoose)
- **Security**: JWT (JSON Web Tokens) & BcryptJS
- **File Handling**: Multer
- **Email**: Nodemailer
- **Payments**: Stripe API

## 🛰️ API Endpoints

The backend exposes several REST endpoints:

- `POST /api/applications`: Submit a new charity course application.
- `GET /api/applications`: Retrieve all submitted applications.
- `POST /api/donations`: Process a donation (Stripe integration).
- `GET /api/donations`: Retrieve donation history.
- `GET /api/settings`: Fetch application settings.

## 🚀 Quick Start (Backend Only)

1. Ensure you have a `.env` file with the necessary credentials.
2. To run the backend in development mode (with watch mode):

```bash
npm run dev
```

The server will be reachable at `http://localhost:5000` by default.
