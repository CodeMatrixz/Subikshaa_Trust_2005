import React, { useState, useEffect } from 'react';
import '../styles/NewsTicker.css';

const NewsTicker = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [tickerVisible, setTickerVisible] = useState(true);

    const fetchData = async () => {
        try {
            const [newsRes, settingsRes] = await Promise.all([
                fetch('/api/news'),
                fetch('/api/settings')
            ]);
            const newsData = await newsRes.json();
            const settingsData = await settingsRes.json();
            setNews(Array.isArray(newsData) ? newsData : []);
            if (settingsData?.data?.tickerVisible !== undefined) {
                setTickerVisible(settingsData.data.tickerVisible);
            }
            setLoading(false);
        } catch (err) {
            console.error('Error fetching ticker data:', err);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 60000);
        return () => clearInterval(interval);
    }, []);

    if (loading || !tickerVisible || news.length === 0) return null;

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
