// Vercel catch-all API handler
module.exports = async (req, res) => {
    try {
        // Ensure we are requiring the server correctly
        const app = require('../back-end/server');
        
        // Vercel strips the /api prefix, so we add it back for Express routing
        if (!req.url.startsWith('/api')) {
            req.url = '/api' + req.url;
        }
        
        return app(req, res);
    } catch (err) {
        console.error('API Handler Error:', err);
        res.status(500).json({ 
            error: err.message, 
            type: err.constructor.name,
            stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
            hint: 'Check Vercel function logs for full stack trace'
        });
    }
};
