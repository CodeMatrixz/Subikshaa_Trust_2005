// Vercel catch-all API handler
// Adds back the /api prefix that Vercel strips, then passes to Express
const app = require('../back-end/server');

module.exports = (req, res) => {
    req.url = '/api' + req.url;
    return app(req, res);
};
