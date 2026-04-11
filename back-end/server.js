const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());



app.use(express.json());

// Global database connection middleware for serverless reliability
app.use(async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (err) {
        console.error('Database middleware error:', err.message);
        // Only return error for API routes
        if (req.url.startsWith('/api')) {
            return res.status(503).json({ 
                success: false, 
                message: 'Database connection failed: ' + err.message 
            });
        }
        next();
    }
});
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Initial connection (background for hot startup)
connectDB().catch(err => console.error('Initial DB connect failed:', err.message));

// Routes
app.use('/api/donations', require('./routes/donationRoutes'));
app.use('/api/applications', require('./routes/applicationRoutes'));
app.use('/api/settings', require('./routes/settingsRoutes'));
app.use('/api/payment', require('./routes/paymentRoutes'));
app.use('/api/news', require('./routes/newsRoutes'));
app.use('/api/event-registrations', require('./routes/eventRegistrationRoutes'));
app.use('/api/contacts', require('./routes/contactRoutes'));
app.use('/api/admin', require('./routes/adminRoutes').router);

app.get('/', (req, res) => {
    res.send('Charity Backend API is running');
});

// Create uploads directory if it doesn't exist
try {
    const fs = require('fs');
    const uploadDir = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir);
    }
} catch (e) {
    console.log('Skipping uploads dir creation:', e.message);
}

module.exports = app;

if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
