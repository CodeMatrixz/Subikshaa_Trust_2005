import React, { useState, useEffect } from 'react';
import '../styles/Admin.css';

const Admin = () => {
    const [token, setToken] = useState(localStorage.getItem('adminToken') || '');
    const [loginForm, setLoginForm] = useState({ username: '', password: '' });
    const [loginError, setLoginError] = useState('');
    const [news, setNews] = useState([]);
    const [newForm, setNewForm] = useState({ title: '', description: '', category: 'General', isBreaking: false });
    const [tickerVisible, setTickerVisible] = useState(true);
    const [message, setMessage] = useState('');

    const categories = ['General', 'Health', 'Education', 'Environment', 'Celebration', 'Community'];

    const authHeaders = { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` };

    const fetchNews = async () => {
        const res = await fetch('/api/news');
        const data = await res.json();
        setNews(Array.isArray(data) ? data : []);
    };

    const fetchSettings = async () => {
        const res = await fetch('/api/settings');
        const data = await res.json();
        if (data?.data?.tickerVisible !== undefined) setTickerVisible(data.data.tickerVisible);
    };

    useEffect(() => {
        if (token) { fetchNews(); fetchSettings(); }
    }, [token]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoginError('');
        const res = await fetch('/api/admin/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginForm)
        });
        const data = await res.json();
        if (data.success) {
            localStorage.setItem('adminToken', data.token);
            setToken(data.token);
        } else {
            setLoginError(data.message || 'Invalid credentials');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        setToken('');
    };

    const handleAddNews = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/news', {
            method: 'POST',
            headers: authHeaders,
            body: JSON.stringify(newForm)
        });
        if (res.ok) {
            setNewForm({ title: '', description: '', category: 'General', isBreaking: false });
            setMessage('✅ News added successfully!');
            fetchNews();
            setTimeout(() => setMessage(''), 3000);
        }
    };

    const handleDeleteNews = async (id) => {
        if (!window.confirm('Delete this news item?')) return;
        await fetch(`/api/news/${id}`, { method: 'DELETE', headers: authHeaders });
        setMessage('🗑️ News deleted.');
        fetchNews();
        setTimeout(() => setMessage(''), 3000);
    };

    const handleTickerToggle = async () => {
        const newVal = !tickerVisible;
        const res = await fetch('/api/settings/ticker', {
            method: 'PATCH',
            headers: authHeaders,
            body: JSON.stringify({ visible: newVal })
        });
        if (res.ok) {
            setTickerVisible(newVal);
            setMessage(`✅ News ticker turned ${newVal ? 'ON' : 'OFF'}`);
            setTimeout(() => setMessage(''), 3000);
        }
    };

    if (!token) {
        return (
            <div className="admin-login-page">
                <div className="admin-login-card">
                    <div className="admin-logo">🔐</div>
                    <h1>Admin Login</h1>
                    <p>Subikshaa Trust Admin Panel</p>
                    <form onSubmit={handleLogin}>
                        <input
                            type="text"
                            placeholder="Username"
                            value={loginForm.username}
                            onChange={e => setLoginForm({ ...loginForm, username: e.target.value })}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={loginForm.password}
                            onChange={e => setLoginForm({ ...loginForm, password: e.target.value })}
                            required
                        />
                        {loginError && <p className="admin-error">{loginError}</p>}
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="admin-page">
            <div className="admin-header">
                <h1>🛡️ Admin Panel</h1>
                <button className="admin-logout-btn" onClick={handleLogout}>Logout</button>
            </div>

            {message && <div className="admin-message">{message}</div>}

            {/* Ticker Toggle */}
            <div className="admin-card">
                <h2>📢 News Ticker</h2>
                <div className="ticker-toggle-row">
                    <span>Show news ticker on homepage</span>
                    <button
                        className={`toggle-btn ${tickerVisible ? 'on' : 'off'}`}
                        onClick={handleTickerToggle}
                    >
                        {tickerVisible ? '✅ ON' : '❌ OFF'}
                    </button>
                </div>
            </div>

            {/* Add News */}
            <div className="admin-card">
                <h2>➕ Add News</h2>
                <form onSubmit={handleAddNews} className="admin-form">
                    <input
                        type="text"
                        placeholder="News Title *"
                        value={newForm.title}
                        onChange={e => setNewForm({ ...newForm, title: e.target.value })}
                        required
                    />
                    <textarea
                        placeholder="Short description (optional)"
                        value={newForm.description}
                        onChange={e => setNewForm({ ...newForm, description: e.target.value })}
                        rows={2}
                    />
                    <div className="admin-form-row">
                        <select value={newForm.category} onChange={e => setNewForm({ ...newForm, category: e.target.value })}>
                            {categories.map(c => <option key={c}>{c}</option>)}
                        </select>
                        <label className="admin-checkbox">
                            <input
                                type="checkbox"
                                checked={newForm.isBreaking}
                                onChange={e => setNewForm({ ...newForm, isBreaking: e.target.checked })}
                            />
                            Mark as Spotlight
                        </label>
                    </div>
                    <button type="submit" className="admin-btn-primary">Add News</button>
                </form>
            </div>

            {/* News List */}
            <div className="admin-card">
                <h2>📰 Current News ({news.length})</h2>
                {news.length === 0 ? (
                    <p className="admin-empty">No news yet. Add some above!</p>
                ) : (
                    <div className="admin-news-list">
                        {news.map(item => (
                            <div key={item._id} className="admin-news-item">
                                <div className="admin-news-info">
                                    {item.isBreaking && <span className="admin-badge">Spotlight</span>}
                                    <span className="admin-news-cat">{item.category}</span>
                                    <p>{item.title}</p>
                                </div>
                                <button className="admin-delete-btn" onClick={() => handleDeleteNews(item._id)}>🗑️</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Admin;
