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

        const newApplication = new Application({
            fullName,
            email,
            phone,
            course,
            message,
            photoPath
        });
        const savedApplication = await newApplication.save();

        // Send email notification to User
        await sendEmail({
            to: email,
            subject: 'Application Received',
            html: `<p>Hi ${fullName},</p><p>Thank you for applying to ${course}. We will review your application and get back to you shortly.</p>`
        });

        // Notify Admin
        const adminUrl = process.env.ADMIN_URL || 'https://subikshaa-trust-2005.vercel.app/admin';
        await sendEmail({
            to: process.env.EMAIL_USER || 'subikshaatrust.org@gmail.com',
            subject: 'New Application Submitted',
            html: `
                <p>New application from <strong>${fullName}</strong> for <strong>${course}</strong>.</p>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Message: ${message}</p>
                <hr/>
                <p><a href="${adminUrl}" style="color: #2563eb; font-weight: bold; text-decoration: none;">🔗 View in Admin Panel</a></p>
            `
        });

        res.status(201).json({ success: true, message: 'Application submitted successfully', data: savedApplication });
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
