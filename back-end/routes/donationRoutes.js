const express = require('express');
const router = express.Router();
const Donation = require('../models/Donation');
const sendEmail = require('../utils/emailService');

// POST /api/donations - Create a new donation intent
router.post('/', async (req, res) => {
    console.log('Donation Request Body:', req.body);
    try {
        const { amount, type, paymentMethod, transactionId } = req.body;

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
            to: 'subikshaatrust.org@gmail.com',
            subject: `New Donation Received: ₹${amount}`,
            html: `
                <h3>New Contribution Received</h3>
                <p><strong>Amount:</strong> ₹${amount}</p>
                <p><strong>Frequency:</strong> ${type}</p>
                <p><strong>Payment Method:</strong> ${paymentMethod.toUpperCase()}</p>
                <p><strong>Transaction ID:</strong> ${transactionId || 'Generated Automatically'}</p>
                <hr/>
                <p>Please log in to the Admin Panel to verify this transaction.</p>
            `
        });

        res.status(201).json({ success: true, data: savedDonation });
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
