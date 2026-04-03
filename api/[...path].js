// Vercel catch-all API handler
module.exports = async (req, res) => {
    try {
        const app = require('../back-end/server');
        req.url = '/api' + req.url;
        return app(req, res);
    } catch (err) {
        console.error('API Handler Error:', err);
        res.status(500).json({ 
            error: err.message, 
            type: err.constructor.name,
            hint: 'Check Vercel function logs for full stack trace'
        });
    }
};
