const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Application = require('../models/Application');
const sendEmail = require('../utils/emailService');

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|webp/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        }
        cb(new Error('Only image files are allowed!'));
    }
});

// POST /api/applications - Submit a new application
router.post('/', upload.single('photo'), async (req, res) => {
    try {
        const { fullName, email, phone, course, message } = req.body;
        const photoPath = req.file ? req.file.path : null;

        if (global.dbConnected) {
            const newApplication = new Application({
                fullName,
                email,
                phone,
                course,
                message,
                photoPath
            });
            const savedApplication = await newApplication.save();

            // Send email notification
            await sendEmail({
                to: email,
                subject: 'Application Received',
                html: `<p>Hi ${fullName},</p><p>Thank you for applying to ${course}. We will review your application and get back to you shortly.</p>`
            });

            // Notify Admin
            await sendEmail({
                to: process.env.EMAIL_USER || 'subikshaatrust.org@gmail.com',
                subject: 'New Application Submitted',
                html: `<p>New application from ${fullName} for ${course}.</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Message: ${message}</p>`
            });

            res.status(201).json({ success: true, message: 'Application submitted successfully', data: savedApplication });
        } else {
            const mockApplication = {
                fullName,
                email,
                phone,
                course,
                message,
                photoPath,
                _id: 'mock_app_id_' + Date.now(),
                createdAt: new Date()
            };
            console.log('[MOCK DB] Application received:', mockApplication);

            // Send email notification (Mock)
            await sendEmail({
                to: email,
                subject: 'Application Received (Mock)',
                html: `<p>Hi ${fullName},</p><p>Thank you for applying to ${course}. We will review your application and get back to you shortly.</p>`
            });

            // Notify Admin (Mock)
            await sendEmail({
                to: 'admin@charity.org',
                subject: 'New Application Submitted (Mock)',
                html: `<p>New application from ${fullName} for ${course}.</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Message: ${message}</p>`
            });

            res.status(201).json({ success: true, message: 'Application submitted successfully (Mock)', data: mockApplication });
        }
    } catch (error) {
        console.error('Application Submit Error:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

// GET /api/applications - List applications (optional)
router.get('/', async (req, res) => {
    try {
        const applications = await Application.find().sort({ createdAt: -1 });
        res.json({ success: true, data: applications });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

module.exports = router;
