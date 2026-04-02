const express = require('express');
const router = express.Router();
const Settings = require('../models/Settings');
const { verifyAdmin } = require('./adminRoutes');

// GET /api/settings - Get current settings (public)
router.get('/', async (req, res) => {
    try {
        if (global.dbConnected) {
            let settings = await Settings.findOne();
            if (!settings) {
                settings = new Settings();
            }
            res.json({ success: true, data: settings });
        } else {
            const mockSettings = {
                socialLinks: {
                    facebook: 'https://www.facebook.com/profile.php?id=61587760916465',
                    instagram: 'https://www.instagram.com/subikshaatrust/',
                    youtube: 'https://www.youtube.com/channel/UCuPMRFTT1KgiCg9zBABLY9Q'
                },
                contact: {
                    address: '123 Charity Way, Giving City',
                    phone: '+1 (234) 567-890',
                    email: 'hello@subikshaatrust.org'
                },
                siteInfo: {
                    name: 'Subikshaa Trust',
                    description: 'Empowering communities and changing lives.'
                },
                tickerVisible: true
            };
            res.json({ success: true, data: mockSettings });
        }
    } catch (error) {
        console.error('Error fetching settings:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

// POST /api/settings - Update settings (admin only)
router.post('/', verifyAdmin, async (req, res) => {
    try {
        const { socialLinks, contact, siteInfo } = req.body;
        if (global.dbConnected) {
            let settings = await Settings.findOne();
            if (settings) {
                if (socialLinks) settings.socialLinks = { ...settings.socialLinks, ...socialLinks };
                if (contact) settings.contact = { ...settings.contact, ...contact };
                if (siteInfo) settings.siteInfo = { ...settings.siteInfo, ...siteInfo };
                settings.updatedAt = Date.now();
                await settings.save();
            } else {
                settings = new Settings({ socialLinks, contact, siteInfo });
                await settings.save();
            }
            res.json({ success: true, message: 'Settings updated successfully', data: settings });
        } else {
            res.json({ success: true, message: 'Settings updated (Mock)', data: req.body });
        }
    } catch (error) {
        console.error('Error updating settings:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

// PATCH /api/settings/ticker - Toggle ticker visibility (admin only)
router.patch('/ticker', verifyAdmin, async (req, res) => {
    try {
        const { visible } = req.body;
        if (global.dbConnected) {
            let settings = await Settings.findOne();
            if (!settings) settings = new Settings();
            settings.tickerVisible = visible;
            settings.updatedAt = Date.now();
            await settings.save();
            res.json({ success: true, tickerVisible: settings.tickerVisible });
        } else {
            res.json({ success: true, tickerVisible: visible });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

module.exports = router;
