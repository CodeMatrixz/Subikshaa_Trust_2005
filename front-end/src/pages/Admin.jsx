import React, { useState, useEffect } from 'react';
import {
    Lock,
    User,
    LogOut,
    Newspaper,
    Inbox,
    FileText,
    Calendar,
    Mail,
    Plus,
    Trash2,
    ToggleRight,
    ToggleLeft,
    CheckCircle2,
    LayoutDashboard,
    MessageSquare,
    Users,
    Phone,
    Eye
} from 'lucide-react';
import '../styles/Admin.css';

const Admin = () => {
    const [token, setToken] = useState(localStorage.getItem('adminToken') || '');
    const [loginForm, setLoginForm] = useState({ username: '', password: '' });
    const [loginError, setLoginError] = useState('');
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [news, setNews] = useState([]);
    const [applications, setApplications] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [registrations, setRegistrations] = useState([]);
    const [newForm, setNewForm] = useState({ title: '', description: '', category: 'General', isBreaking: false });
    const [tickerVisible, setTickerVisible] = useState(true);
    const [message, setMessage] = useState('');
    const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard', 'news', 'apps', 'events', 'contacts'
    const [selectedApp, setSelectedApp] = useState(null);

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

    const fetchApplications = async () => {
        const res = await fetch('/api/applications');
        const data = await res.json();
        setApplications(data.success ? data.data : []);
    };

    const fetchContacts = async () => {
        const res = await fetch('/api/contacts');
        const data = await res.json();
        setContacts(data.success ? data.data : []);
    };

    const fetchRegistrations = async () => {
        const res = await fetch('/api/event-registrations');
        const data = await res.json();
        setRegistrations(data.success ? data.data : []);
    };

    const refreshData = () => {
        fetchNews();
        fetchSettings();
        fetchApplications();
        fetchContacts();
        fetchRegistrations();
    };

    useEffect(() => {
        if (token) {
            refreshData();
        }
    }, [token]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoginError('');
        setIsLoggingIn(true);

        try {
            const res = await fetch('/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginForm)
            });
            const data = await res.json();

            if (data.success) {
                setLoginSuccess(true);
                // Artificial delay for professional feedback "Success"
                setTimeout(() => {
                    localStorage.setItem('adminToken', data.token);
                    setToken(data.token);
                    setIsLoggingIn(false);
                    setLoginSuccess(false);
                }, 1500);
            } else {
                setLoginError(data.message || 'Invalid credentials');
                setIsLoggingIn(false);
            }
        } catch (err) {
            setLoginError('Server connection failed');
            setIsLoggingIn(false);
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

    const handleDeleteApplication = async (id) => {
        if (!window.confirm('Are you sure you want to delete this application permanently?')) return;
        try {
            const res = await fetch(`/api/applications/${id}`, { method: 'DELETE', headers: authHeaders });
            if (res.ok) {
                setMessage('🗑️ Application deleted successfully.');
                fetchApplications();
                setSelectedApp(null);
                setTimeout(() => setMessage(''), 3000);
            }
        } catch (err) {
            console.error('Delete error:', err);
        }
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
                    <div className="admin-login-logo">
                        <div className="logo-outer-circle">
                            {loginSuccess ? (
                                <CheckCircle2 size={48} color="#10b981" />
                            ) : (
                                <img src="/images/assets/logo_v2.jpg" alt="Subikshaa Trust" className="login-brand-logo" />
                            )}
                        </div>
                    </div>
                    <h1>{loginSuccess ? 'Access Granted' : 'Admin Portal'}</h1>
                    <p>{loginSuccess ? 'Welcome back, Administrator' : 'Enter your credentials to manage the trust'}</p>

                    {!loginSuccess && (
                        <form onSubmit={handleLogin}>
                            <div className="admin-input-group">
                                <User size={18} />
                                <input
                                    type="text"
                                    placeholder="Username"
                                    value={loginForm.username}
                                    onChange={e => setLoginForm({ ...loginForm, username: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="admin-input-group">
                                <Lock size={18} />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={loginForm.password}
                                    onChange={e => setLoginForm({ ...loginForm, password: e.target.value })}
                                    required
                                />
                            </div>
                            {loginError && <p className="admin-error">{loginError}</p>}
                            <button type="submit" disabled={isLoggingIn}>
                                {isLoggingIn ? 'Authenticating...' : 'Sign In'}
                            </button>
                        </form>
                    )}

                    {loginSuccess && (
                        <div className="login-success-animation">
                            <div className="success-bar"></div>
                            <p className="success-msg">Login Successful. Redirecting...</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="admin-dashboard-container">
            {/* Professional Sidebar */}
            <aside className="admin-sidebar">
                <div className="sidebar-brand">
                    <img src="/images/assets/logo_v2.jpg" alt="Logo" className="sidebar-logo" />
                    <div className="brand-text">
                        <h3>Subikshaa Trust</h3>
                        <span>Admin Panel</span>
                    </div>
                </div>

                <nav className="sidebar-nav">
                    <button className={activeTab === 'dashboard' ? 'active' : ''} onClick={() => setActiveTab('dashboard')}>
                        <LayoutDashboard size={20} /> Dashboard
                    </button>
                    <button className={activeTab === 'news' ? 'active' : ''} onClick={() => setActiveTab('news')}>
                        <Newspaper size={20} /> News & Ticker
                    </button>
                    <div className="nav-divider">Management</div>
                    <button className={activeTab === 'apps' ? 'active' : ''} onClick={() => setActiveTab('apps')}>
                        <FileText size={20} /> Applications
                        {applications.length > 0 && <span className="sidebar-count">{applications.length}</span>}
                    </button>
                    <button className={activeTab === 'events' ? 'active' : ''} onClick={() => setActiveTab('events')}>
                        <Calendar size={20} /> Event Registrations
                        {registrations.length > 0 && <span className="sidebar-count">{registrations.length}</span>}
                    </button>
                    <button className={activeTab === 'contacts' ? 'active' : ''} onClick={() => setActiveTab('contacts')}>
                        <Mail size={20} /> Contact Messages
                        {contacts.length > 0 && <span className="sidebar-count">{contacts.length}</span>}
                    </button>
                </nav>

                <div className="sidebar-footer">
                    <button onClick={handleLogout} className="sidebar-logout">
                        <LogOut size={18} /> Logout
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="admin-main">
                <header className="main-header">
                    <div className="header-left">
                        <h1>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
                    </div>
                    <div className="header-right">
                        <span className="last-sync">Last updated: {new Date().toLocaleTimeString()}</span>
                        <div className="admin-profile">
                            <div className="admin-avatar">KV</div>
                            <span className="admin-name">Administrator</span>
                        </div>
                    </div>
                </header>

                <div className="content-body">
                    {message && <div className="admin-alert-toast"><CheckCircle2 size={16} /> {message}</div>}

                    {activeTab === 'dashboard' && (
                        <div className="dashboard-grid">
                            <div className="stat-card">
                                <div className="stat-icon blue"><Users size={24} /></div>
                                <div className="stat-info">
                                    <h4>Total Applications</h4>
                                    <p>{applications.length}</p>
                                </div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-icon gold"><Calendar size={24} /></div>
                                <div className="stat-info">
                                    <h4>Event Regs</h4>
                                    <p>{registrations.length}</p>
                                </div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-icon green"><MessageSquare size={24} /></div>
                                <div className="stat-info">
                                    <h4>Contact Inbox</h4>
                                    <p>{contacts.length}</p>
                                </div>
                            </div>
                            <div className="stat-card news-card">
                                <div className="stat-icon purple"><Newspaper size={24} /></div>
                                <div className="stat-info">
                                    <h4>Active News</h4>
                                    <p>{news.length}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'news' && (
                        <div className="news-management">
                            <div className="admin-card">
                                <div className="card-header">
                                    <ToggleRight size={20} />
                                    <h2>Homepage Ticker Settings</h2>
                                </div>
                                <div className="ticker-toggle-row">
                                    <div className="toggle-info">
                                        <p>Display scrolling headlines on the landing page</p>
                                        <span className="status-tag">{tickerVisible ? 'Currently Active' : 'Hidden'}</span>
                                    </div>
                                    <button
                                        className={`professional-toggle ${tickerVisible ? 'on' : 'off'}`}
                                        onClick={handleTickerToggle}
                                    >
                                        <div className="toggle-knob"></div>
                                    </button>
                                </div>
                            </div>

                            <div className="admin-card">
                                <div className="admin-card-header">
                                    <Plus size={20} />
                                    <h2>Publish New Bulletin</h2>
                                </div>
                                <form onSubmit={handleAddNews} className="professional-form">
                                    <input
                                        type="text"
                                        placeholder="Headline *"
                                        value={newForm.title}
                                        onChange={e => setNewForm({ ...newForm, title: e.target.value })}
                                        required
                                    />
                                    <textarea
                                        placeholder="Detailed Summary (Optional)"
                                        value={newForm.description}
                                        onChange={e => setNewForm({ ...newForm, description: e.target.value })}
                                        rows={3}
                                    />
                                    <div className="form-grid">
                                        <div className="select-container">
                                            <label>Category</label>
                                            <select value={newForm.category} onChange={e => setNewForm({ ...newForm, category: e.target.value })}>
                                                {categories.map(c => <option key={c}>{c}</option>)}
                                            </select>
                                        </div>
                                        <label className="checkbox-control">
                                            <input
                                                type="checkbox"
                                                checked={newForm.isBreaking}
                                                onChange={e => setNewForm({ ...newForm, isBreaking: e.target.checked })}
                                            />
                                            <span>Mark as Spotlight Content</span>
                                        </label>
                                    </div>
                                    <button type="submit" className="admin-btn-primary">
                                        <Plus size={18} /> Publish to Website
                                    </button>
                                </form>
                            </div>

                            <div className="admin-card">
                                <div className="admin-card-header">
                                    <Newspaper size={20} />
                                    <h2>Editorial History</h2>
                                </div>
                                {news.length === 0 ? (
                                    <p className="empty-state">No published news found.</p>
                                ) : (
                                    <div className="modern-list">
                                        {news.map(item => (
                                            <div key={item._id} className="modern-list-item">
                                                <div className="item-content">
                                                    <div className="item-meta">
                                                        {item.isBreaking && <span className="premium-badge-spotlight">Spotlight</span>}
                                                        <span className="premium-badge-cat">{item.category}</span>
                                                    </div>
                                                    <h3>{item.title}</h3>
                                                </div>
                                                <button className="btn-icon-delete" onClick={() => handleDeleteNews(item._id)}>
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {activeTab === 'apps' && (
                        <div className="admin-card full-card">
                            <div className="admin-card-header">
                                <FileText size={20} />
                                <h2>Membership & Volunteer Applications</h2>
                            </div>
                            {applications.length === 0 ? <p className="empty-state">No new applications found.</p> : (
                                <div className="modern-grid-list">
                                    {applications.map(app => (
                                        <div key={app._id} className="professional-item">
                                            <div className="item-header">
                                                <div className="user-info">
                                                    <div className="user-avatar">{app.fullName ? app.fullName.charAt(0) : '?'}</div>
                                                    <div>
                                                        <h3>{app.fullName}</h3>
                                                        <span className="app-course">{app.course}</span>
                                                    </div>
                                                </div>
                                                <span className="timestamp">{new Date(app.createdAt).toLocaleDateString()}</span>
                                            </div>
                                            <div className="item-details">
                                                <p><Mail size={14} /> {app.email}</p>
                                                <p><Phone size={14} /> {app.phone}</p>
                                            </div>
                                            {app.message && <div className="item-memo">{app.message}</div>}
                                            <div className="item-actions">
                                                <button className="admin-btn-premium-view" onClick={() => setSelectedApp(app)}>
                                                    <Eye size={16} /> View Full Details
                                                </button>
                                                <button className="admin-btn-delete-link" onClick={() => handleDeleteApplication(app._id)}>
                                                    <Trash2 size={16} /> Delete
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Detail Modal */}
                            {selectedApp && (
                                <div className="admin-modal-overlay">
                                    <div className="admin-modal-card animate-scale-in">
                                        <div className="modal-header">
                                            <h2>Application Details</h2>
                                            <button className="close-btn" onClick={() => setSelectedApp(null)}>&times;</button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="detail-section">
                                                <label>Full Name</label>
                                                <p>{selectedApp.fullName}</p>
                                            </div>
                                            <div className="detail-grid">
                                                <div className="detail-section">
                                                    <label>Email Address</label>
                                                    <p>{selectedApp.email}</p>
                                                </div>
                                                <div className="detail-section">
                                                    <label>Phone Number</label>
                                                    <p>{selectedApp.phone}</p>
                                                </div>
                                            </div>
                                            <div className="detail-section">
                                                <label>Applied For / Course</label>
                                                <p className="highlight-text">{selectedApp.course}</p>
                                            </div>
                                            <div className="detail-section">
                                                <label>Motivation / Message</label>
                                                <div className="detail-box">{selectedApp.message || 'No message provided.'}</div>
                                            </div>
                                            <div className="detail-section">
                                                <label>Submission Date</label>
                                                <p>{new Date(selectedApp.createdAt).toLocaleString()}</p>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button className="admin-btn-danger" onClick={() => handleDeleteApplication(selectedApp._id)}>
                                                Delete Application
                                            </button>
                                            <button className="admin-btn-secondary" onClick={() => setSelectedApp(null)}>Close</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'events' && (
                        <div className="admin-card full-card">
                            <div className="admin-card-header">
                                <Calendar size={20} />
                                <h2>Recent Event Registrations</h2>
                            </div>
                            {registrations.length === 0 ? <p className="empty-state">No event registrations.</p> : (
                                <div className="modern-table-container">
                                    <table className="modern-table">
                                        <thead>
                                            <tr>
                                                <th>Participant</th>
                                                <th>Event Name</th>
                                                <th>Contact Info</th>
                                                <th>Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {registrations.map(reg => (
                                                <tr key={reg._id}>
                                                    <td>
                                                        <div className="table-user">
                                                            <strong>{reg.name}</strong>
                                                        </div>
                                                    </td>
                                                    <td><span className="event-tag">{reg.eventTitle}</span></td>
                                                    <td>
                                                        <div className="table-contact">
                                                            <div className="contact-item"><Mail size={12} /> {reg.email}</div>
                                                            <div className="contact-item"><Phone size={12} /> {reg.phone}</div>
                                                        </div>
                                                    </td>
                                                    <td>{new Date(reg.createdAt).toLocaleDateString()}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'contacts' && (
                        <div className="admin-card full-card">
                            <div className="admin-card-header">
                                <Inbox size={20} />
                                <h2>Support Inbox</h2>
                            </div>
                            {contacts.length === 0 ? <p className="empty-state">Inbox is empty.</p> : (
                                <div className="modern-list">
                                    {contacts.map(msg => (
                                        <div key={msg._id} className="inbox-item">
                                            <div className="inbox-header">
                                                <div className="sender-info">
                                                    <strong>{msg.firstName} {msg.lastName}</strong>
                                                    <span>{msg.email}</span>
                                                </div>
                                                <div className="inbox-meta">
                                                    <span className="subject-badge">{msg.subject}</span>
                                                    <span className="timestamp">{new Date(msg.createdAt).toLocaleDateString()}</span>
                                                </div>
                                            </div>
                                            <div className="inbox-body">{msg.message}</div>
                                            <div className="inbox-footer">
                                                <button className="btn-link">Mark as Read</button>
                                                <button className="btn-link reply">Reply via Email</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Admin;
