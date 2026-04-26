const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');


const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'SubikshaaTrust@2005';
const JWT_SECRET = process.env.JWT_SECRET || 'KV_subi_2005';

const bcrypt = require('bcryptjs');
const rateLimit = require('express-rate-limit');

// Strict rate limiter for brute-force protection
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 mins
    max: 5, // 5 attempts
    message: { success: false, message: 'Too many login attempts. Please try again after 15 minutes.' }
});

// POST /api/admin/login
router.post('/login', loginLimiter, async (req, res) => {
    const { username, password } = req.body;
    
    // Convert the known password to a secure hash in memory so we can compare the incoming password cryptographically safely.
    const expectedHash = await bcrypt.hash(ADMIN_PASSWORD, 10);
    
    if (username === ADMIN_USERNAME) {
        const isMatch = await bcrypt.compare(password, expectedHash);
        if (isMatch) {
            const token = jwt.sign({ role: 'admin' }, JWT_SECRET, { expiresIn: '8h' });
            return res.json({ success: true, token });
        }
    }
    
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
});

// Middleware to verify admin token
const verifyAdmin = (req, res, next) => {
    const auth = req.headers.authorization;
    if (!auth || !auth.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
    }
    try {
        jwt.verify(auth.split(' ')[1], JWT_SECRET);
        next();
    } catch {
        return res.status(403).json({ success: false, message: 'Invalid token' });
    }
};

module.exports = { router, verifyAdmin };
