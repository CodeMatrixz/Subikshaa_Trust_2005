const mongoose = require('mongoose');

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development and serverless function invocations in production.
 */
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        const mongoUri = process.env.MONGO_URI;
        if (!mongoUri) {
            throw new Error('MONGO_URI is not defined in environment variables');
        }

        cached.promise = mongoose.connect(mongoUri, opts).then((mongoose) => {
            console.log('MongoDB Connected');
            global.dbConnected = true;
            return mongoose;
        }).catch(err => {
            console.error('MongoDB Connection Error:', err.message);
            cached.promise = null; // Reset promise on failure to allow retry
            throw err;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
}

module.exports = connectDB;
