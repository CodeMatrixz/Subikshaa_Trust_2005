const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'SubikshaaTrust@2005';
const JWT_SECRET = process.env.JWT_SECRET || 'KV_subi_2005';

// POST /api/admin/login
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        const token = jwt.sign({ role: 'admin' }, JWT_SECRET, { expiresIn: '8h' });
        return res.json({ success: true, token });
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
