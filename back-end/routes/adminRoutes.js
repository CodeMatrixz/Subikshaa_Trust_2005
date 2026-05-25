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
    
    const inputUser = (username || '').trim();
    const envUser = (ADMIN_USERNAME || '').trim();
    const inputPass = (password || '').trim();
    const envPass = (ADMIN_PASSWORD || '').trim();
    
    // Convert the known password to a secure hash in memory so we can compare the incoming password cryptographically safely.
    const expectedHash = await bcrypt.hash(envPass, 10);
    
    if (inputUser === envUser) {
        const isMatch = await bcrypt.compare(inputPass, expectedHash);
        if (isMatch) {
            const token = jwt.sign({ role: 'admin' }, JWT_SECRET, { expiresIn: '8h' });
            return res.json({ success: true, token });
        }
    }
    
    // Return detailed error for debugging since it fails on live
    return res.status(401).json({ 
        success: false, 
        message: `Invalid credentials. Debug: user='${inputUser}' env='${envUser}' passMatch=${inputPass === envPass}` 
    });
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
