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
        const dbNews = await News.find()
            .sort({ createdAt: -1 })
            .limit(10);
        
        // Ensure mock news items are always mixed in if they aren't in the DB yet
        const dbTitles = dbNews.map(n => n.title);
        const missingMockNews = mockNews.filter(m => !dbTitles.includes(m.title));
        
        // Combine and limit to latest 10
        const combined = [...dbNews, ...missingMockNews]
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, 10);
        
        res.json(combined);
    } catch (err) {
        console.error('Database error in news route:', err.message);
        res.json(mockNews);
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
