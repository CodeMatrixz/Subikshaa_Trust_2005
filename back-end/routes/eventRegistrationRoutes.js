const express = require('express');
const router = express.Router();
const sendEmail = require('../utils/emailService');

// In-memory fallback store when DB is not connected
const mockRegistrations = [];

let EventRegistration;
try {
    EventRegistration = require('../models/EventRegistration');
} catch (e) {
    EventRegistration = null;
}

// POST /api/event-registrations
router.post('/', async (req, res) => {
    const { name, email, phone, eventTitle, message } = req.body;

    // Server-side validation
    if (!name || !email || !phone || !eventTitle) {
        return res.status(400).json({ success: false, message: 'Name, email, phone and event are required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ success: false, message: 'Invalid email address.' });
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone.replace(/\s|-/g, ''))) {
        return res.status(400).json({ success: false, message: 'Enter a valid 10-digit Indian phone number.' });
    }

    try {
        if (global.dbConnected && EventRegistration) {
            const registration = new EventRegistration({ name, email, phone, eventTitle, message });
            await registration.save();
            
            // Send email to user
            await sendEmail({
                to: email,
                subject: `Registration Confirmed: ${eventTitle}`,
                html: `<p>Hi ${name},</p><p>You have successfully registered for <strong>${eventTitle}</strong>. We look forward to seeing you there!</p>`
            });

            // Notify Admin
            const adminUrl = process.env.ADMIN_URL || 'https://subikshaa-trust-2005.vercel.app/admin';
            await sendEmail({
                to: process.env.EMAIL_USER || 'subikshaatrust.org@gmail.com',
                subject: `New Event Registration: ${eventTitle}`,
                html: `
                    <p>New registration for <strong>${eventTitle}</strong>.</p>
                    <p>Name: ${name}</p>
                    <p>Email: ${email}</p>
                    <p>Phone: ${phone}</p>
                    <p>Note: ${message || 'None'}</p>
                    <hr/>
                    <p><a href="${adminUrl}" style="color: #2563eb; font-weight: bold; text-decoration: none;">🔗 View in Admin Panel</a></p>
                `
            });

            return res.status(201).json({ success: true, message: 'Registration successful!', data: registration });
        } else {
            // Fallback mock store
            const entry = { id: Date.now(), name, email, phone, eventTitle, message, createdAt: new Date() };
            mockRegistrations.push(entry);
            
            // Mock notification
            await sendEmail({
                to: 'subikshaatrust.org@gmail.com',
                subject: `[MOCK] New Event Registration: ${eventTitle}`,
                html: `<p>MOCK registration for ${eventTitle}. Name: ${name}</p>`
            });

            console.log('Event Registration (Mock):', entry);
            return res.status(201).json({ success: true, message: 'Registration successful! (mock)', data: entry });
        }
    } catch (err) {
        console.error('Event registration error:', err.message);
        return res.status(500).json({ success: false, message: 'Server error. Please try again.' });
    }
});

// GET /api/event-registrations  (admin view)
router.get('/', async (req, res) => {
    try {
        if (global.dbConnected && EventRegistration) {
            const registrations = await EventRegistration.find().sort({ createdAt: -1 });
            return res.json({ success: true, data: registrations });
        } else {
            return res.json({ success: true, data: mockRegistrations });
        }
    } catch (err) {
        return res.status(500).json({ success: false, message: 'Server error.' });
    }
});

module.exports = router;
