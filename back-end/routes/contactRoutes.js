const express = require('express');
const router = express.Router();
const sendEmail = require('../utils/emailService');

let ContactMessage;
try {
    ContactMessage = require('../models/ContactMessage');
} catch (e) {
    ContactMessage = null;
}

const mockMessages = [];

// POST /api/contacts
router.post('/', async (req, res) => {
    const { firstName, lastName, email, subject, message } = req.body;

    if (!firstName || !lastName || !email || !subject || !message) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    try {
        if (global.dbConnected && ContactMessage) {
            const newMessage = new ContactMessage({ firstName, lastName, email, subject, message });
            await newMessage.save();

            // Send notification to Admin
            const adminUrl = process.env.ADMIN_URL || 'https://subikshaa-trust-2005.vercel.app/admin';
            await sendEmail({
                to: process.env.EMAIL_USER || 'subikshaatrust.org@gmail.com',
                subject: `New Contact Message: ${subject}`,
                html: `
                    <p>New message from <strong>${firstName} ${lastName}</strong>.</p>
                    <p>Email: ${email}</p>
                    <p>Subject: ${subject}</p>
                    <p>Message: ${message}</p>
                    <hr/>
                    <p><a href="${adminUrl}" style="color: #2563eb; font-weight: bold; text-decoration: none;">🔗 View in Admin Panel</a></p>
                `
            });

            return res.status(201).json({ success: true, message: 'Message sent successfully!', data: newMessage });
        } else {
            const entry = { id: Date.now(), firstName, lastName, email, subject, message, createdAt: new Date() };
            mockMessages.push(entry);
            
            // Mock notification
            await sendEmail({
                to: 'subikshaatrust.org@gmail.com',
                subject: `[MOCK] New Contact Message: ${subject}`,
                html: `<p>MOCK message from ${firstName} ${lastName}. Subject: ${subject}</p>`
            });

            console.log('Contact Message (Mock):', entry);
            return res.status(201).json({ success: true, message: 'Message sent successfully! (mock)', data: entry });
        }
    } catch (err) {
        console.error('Contact route error:', err.message);
        return res.status(500).json({ success: false, message: 'Server error. Please try again.' });
    }
});

// GET /api/contacts (Admin)
router.get('/', async (req, res) => {
    try {
        if (global.dbConnected && ContactMessage) {
            const messages = await ContactMessage.find().sort({ createdAt: -1 });
            return res.json({ success: true, data: messages });
        } else {
            return res.json({ success: true, data: mockMessages });
        }
    } catch (err) {
        return res.status(500).json({ success: false, message: 'Server error.' });
    }
});

module.exports = router;
