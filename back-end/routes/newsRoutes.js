const express = require('express');
const router = express.Router();
const News = require('../models/News');

// Mock data for fallback
const mockNews = [
    {
        _id: 'mock1',
        title: "Happy International Women's Day! Empowering women today and every day.",
        description: "Celebrating the strength, resilience, and achievements of women worldwide.",
        category: "Celebration",
        isBreaking: true,
        createdAt: new Date()
    },
    {
        _id: 'mock2',
        title: "Free medical camp this Sunday at Subikshaa Trust",
        description: "Join us for a free health check-up and consultation.",
        category: "Health",
        isBreaking: false,
        createdAt: new Date()
    },
    {
        _id: 'mock2',
        title: "Scholarship applications open for 2026 academic year",
        description: "Empowering students through financial aid.",
        category: "Education",
        isBreaking: false,
        createdAt: new Date()
    },
    {
        _id: 'mock3',
        title: "Tree plantation drive next week - Volunteer now!",
        description: "Help us make the city greener.",
        category: "Environment",
        isBreaking: false,
        createdAt: new Date()
    }
];

// GET /api/news - Fetch latest 10 news items
router.get('/', async (req, res) => {
    try {
        let news = await News.find()
            .sort({ createdAt: -1 })
            .limit(10);
        
        // If empty, seed the DB with mock data so they are "already there" permanently
        if (news.length === 0) {
            console.log('Seeding initial news items into database...');
            const seedData = mockNews.map(item => {
                const { _id, ...rest } = item; // Remove mock IDs to let Mongo generate real ones
                return rest;
            });
            await News.insertMany(seedData);
            news = await News.find().sort({ createdAt: -1 }).limit(10);
        }
        
        res.json(news);
    } catch (err) {
        console.error('Database error in news route:', err.message);
        res.json(mockNews); // Extreme fallback
    }
});

// POST /api/news - Add news item
router.post('/', async (req, res) => {
    const news = new News({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        isBreaking: req.body.isBreaking
    });

    try {
        const newNews = await news.save();
        res.status(201).json(newNews);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE /api/news/:id - Remove news item
router.delete('/:id', async (req, res) => {
    try {
        const news = await News.findById(req.params.id);
        if (!news) return res.status(404).json({ message: 'News not found' });

        await news.deleteOne();
        res.json({ message: 'News deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
