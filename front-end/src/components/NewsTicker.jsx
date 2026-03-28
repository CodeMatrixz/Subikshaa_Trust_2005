import React, { useState, useEffect } from 'react';
import '../styles/NewsTicker.css';

const NewsTicker = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchNews = async () => {
        try {
            const response = await fetch('/api/news');
            if (!response.ok) {
                throw new Error('Failed to fetch news');
            }
            const data = await response.json();
            setNews(data);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching news:', err);
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNews();
        const interval = setInterval(fetchNews, 60000); // Refresh every 60s
        return () => clearInterval(interval);
    }, []);

    if (loading && news.length === 0) {
        return (
            <div className="news-ticker-container">
                <div className="ticker-label">Latest News</div>
                <div className="ticker-wrap">
                    <div className="ticker-item">Loading news...</div>
                </div>
            </div>
        );
    }

    if (error && news.length === 0) {
        return null; // Don't show ticker if there's an error and no news
    }

    if (news.length === 0) return null;

    // Duplicate news items for a seamless loop
    const tickerItems = [...news, ...news];

    return (
        <div className="news-ticker-container">
            <div className="ticker-label">Latest News</div>
            <div className="ticker-wrap">
                <div className="ticker-move">
                    {tickerItems.map((item, index) => (
                        <div key={`${item._id}-${index}`} className="ticker-item">
                            {item.isBreaking && <span className="breaking-badge">Spotlight</span>}
                            <span className="news-title">{item.title}</span>
                            <span className="news-dot">•</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsTicker;
