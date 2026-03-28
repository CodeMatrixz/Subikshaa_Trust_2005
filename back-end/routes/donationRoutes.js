const express = require('express');
const router = express.Router();
const Donation = require('../models/Donation');
const sendEmail = require('../utils/emailService');

// POST /api/donations - Create a new donation intent
router.post('/', async (req, res) => {
    console.log('Donation Request Body:', req.body);
    try {
        const { amount, type, paymentMethod, transactionId } = req.body;

        if (global.dbConnected) {
            const newDonation = new Donation({
                amount,
                type,
                paymentMethod,
                transactionId,
                status: 'completed'
            });
            const savedDonation = await newDonation.save();

            // Send email notification
            await sendEmail({
                to: 'admin@charity.org', // Replace with admin email
                subject: 'New Donation Received',
                html: `<p>A new donation of $${amount} has been received.</p><p>Type: ${type}</p><p>Payment Method: ${paymentMethod}</p>`
            });

            res.status(201).json({ success: true, data: savedDonation });
        } else {
            const mockDonation = {
                amount,
                type,
                paymentMethod,
                status: 'completed',
                _id: 'mock_id_' + Date.now(),
                createdAt: new Date()
            };
            console.log('[MOCK DB] Donation received:', mockDonation);

            // Send email notification (Mock)
            await sendEmail({
                to: 'admin@charity.org',
                subject: 'New Donation Received (Mock)',
                html: `<p>A new donation of $${amount} has been received.</p><p>Type: ${type}</p><p>Payment Method: ${paymentMethod}</p>`
            });

            res.status(201).json({ success: true, data: mockDonation, message: 'Saved to mock DB' });
        }
    } catch (error) {
        console.error('Donation Error:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

// GET /api/donations - Get all donations (optional, for admin)
router.get('/', async (req, res) => {
    try {
        const donations = await Donation.find().sort({ createdAt: -1 });
        res.json({ success: true, data: donations });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

module.exports = router;
