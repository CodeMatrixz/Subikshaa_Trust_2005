const express = require('express');
const router = express.Router();
const Settings = require('../models/Settings');

// GET /api/settings - Get current settings
router.get('/', async (req, res) => {
    try {
        if (global.dbConnected) {
            let settings = await Settings.findOne();
            if (!settings) {
                // Return default structure if no settings exist yet
                settings = new Settings();
                // Optionally save it: await settings.save();
            }
            res.json({ success: true, data: settings });
        } else {
            // Mock response
            const mockSettings = {
                socialLinks: {
                    facebook: 'https://www.facebook.com/profile.php?id=61587760916465',
                    linkedin: 'https://linkedin.com',
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
                }
            };
            res.json({ success: true, data: mockSettings });
        }
    } catch (error) {
        console.error('Error fetching settings:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

// POST /api/settings - Update settings
router.post('/', async (req, res) => {
    try {
        const { socialLinks, contact, siteInfo } = req.body;

        if (global.dbConnected) {
            let settings = await Settings.findOne();
            if (settings) {
                settings.socialLinks = { ...settings.socialLinks, ...socialLinks };
                settings.contact = { ...settings.contact, ...contact };
                settings.siteInfo = { ...settings.siteInfo, ...siteInfo };
                settings.updatedAt = Date.now();
                await settings.save();
            } else {
                settings = new Settings({
                    socialLinks,
                    contact,
                    siteInfo
                });
                await settings.save();
            }
            res.json({ success: true, message: 'Settings updated successfully', data: settings });
        } else {
            // Mock update
            console.log('[MOCK DB] Settings updated:', req.body);
            res.json({ success: true, message: 'Settings updated successfully (Mock)', data: req.body });
        }
    } catch (error) {
        console.error('Error updating settings:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

module.exports = router;
