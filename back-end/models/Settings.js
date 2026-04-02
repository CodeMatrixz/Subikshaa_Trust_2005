const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
    socialLinks: {
        facebook: { type: String, default: '' },
        twitter: { type: String, default: '' },
        instagram: { type: String, default: '' },
        youtube: { type: String, default: '' }
    },
    contact: {
        address: { type: String, default: '' },
        phone: { type: String, default: '' },
        email: { type: String, default: '' }
    },
    siteInfo: {
        name: { type: String, default: 'Subikshaa Trust' },
        description: { type: String, default: '' }
    },
    tickerVisible: {
        type: Boolean,
        default: true
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Settings', settingsSchema);
