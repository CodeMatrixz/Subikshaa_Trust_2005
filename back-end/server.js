const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env') });

console.log('Starting server...');
const app = express();
const PORT = process.env.PORT || 5000;
console.log('PORT set to:', PORT);

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to MongoDB
// Connect to MongoDB
// Connect to MongoDB
console.log('Attempting to connect to MongoDB with URI:', process.env.MONGO_URI ? 'Defined' : 'Undefined');
mongoose.connect(process.env.MONGO_URI || '')
    .then(() => {
        console.log('MongoDB connected');
        global.dbConnected = true;
    })
    .catch(err => {
        console.error('MongoDB connection error:', err.message);
        console.log('Running in fallback mode (Mock DB)');
        global.dbConnected = false;
    });

// Routes
const donationRoutes = require('./routes/donationRoutes');
const applicationRoutes = require('./routes/applicationRoutes');

app.use('/api/donations', donationRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/settings', require('./routes/settingsRoutes'));
app.use('/api/payment', require('./routes/paymentRoutes'));
app.use('/api/news', require('./routes/newsRoutes'));
app.use('/api/event-registrations', require('./routes/eventRegistrationRoutes'));

app.get('/', (req, res) => {
    res.send('Charity Backend API is running');
});

// Create uploads directory if it doesn't exist
const fs = require('fs');
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Export the app for Vercel
module.exports = app;

// Only start the server if not running on Vercel
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
