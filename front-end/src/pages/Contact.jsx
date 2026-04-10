import React, { useState } from 'react';
import Section from '../components/Section';
import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';
import StaggeredHeading from '../components/StaggeredHeading';
import '../styles/Contact.css';

const Contact = () => {
    const [form, setForm] = useState({ firstName: '', lastName: '', email: '', subject: 'General Inquiry', message: '' });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const res = await fetch('/api/contacts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });
            const data = await res.json();
            if (data.success) {
                setSubmitted(true);
                setForm({ firstName: '', lastName: '', email: '', subject: 'General Inquiry', message: '' });
            } else {
                setError(data.message || 'Something went wrong.');
            }
        } catch (err) {
            setError('Failed to connect to server.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-page">
            <div className="page-header contact-header">
                <div className="container">
                    <span className="sub-heading">Get In Touch</span>
                    <StaggeredHeading text="Contact Us" />
                    <p>Get in touch with our team for partnerships, support, or inquiries.</p>
                </div>
            </div>

            <Section className="contact-content">
                <div className="contact-grid">
                    <div className="contact-info">
                        <h2>Contact Information</h2>
                        <p>Reach out to us through any of these channels.</p>

                        <div className="info-item">
                            <div className="icon"><MapPin /></div>
                            <div>
                                <h5>Address</h5>
                                <p>Pillaiyar kovil street, near pattu mahal, S.S colony, Madurai - 625018</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="icon"><Phone /></div>
                            <div>
                                <h5>Phone</h5>
                                <p>+91 9944894244</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="icon"><Mail /></div>
                            <div>
                                <h5>Email</h5>
                                <p>Care@subikshaa.trust.org</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="icon"><Clock /></div>
                            <div>
                                <h5>Office Hours</h5>
                                <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
                            </div>
                        </div>

                        <div className="map-placeholder">
                            {/* Integrating a real map would require an API key */}
                            <span>Interactive Map Component Placeholder</span>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <h2>Send a Message</h2>
                        {submitted ? (
                            <div className="contact-success-msg">
                                <CheckCircle size={48} />
                                <h3>Message Sent!</h3>
                                <p>Thank you for reaching out. We have received your message and will get back to you shortly.</p>
                                <button onClick={() => setSubmitted(false)} className="btn btn-outline">Send Another Message</button>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group-row">
                                    <div className="form-group">
                                        <label>First Name *</label>
                                        <input 
                                            type="text" 
                                            name="firstName" 
                                            placeholder="First Name" 
                                            value={form.firstName}
                                            onChange={handleChange}
                                            required 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name *</label>
                                        <input 
                                            type="text" 
                                            name="lastName" 
                                            placeholder="Last Name" 
                                            value={form.lastName}
                                            onChange={handleChange}
                                            required 
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Email Address *</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="email@example.com" 
                                        value={form.email}
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Subject *</label>
                                    <select name="subject" value={form.subject} onChange={handleChange} required>
                                        <option value="General Inquiry">General Inquiry</option>
                                        <option value="Volunteering">Volunteering</option>
                                        <option value="Donation Issue">Donation Issue</option>
                                        <option value="Partnership">Partnership</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Message *</label>
                                    <textarea 
                                        name="message" 
                                        rows="5" 
                                        placeholder="Your message here..." 
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                {error && <p className="form-api-error">{error}</p>}
                                <button type="submit" className="btn btn-primary" disabled={loading}>
                                    {loading ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Contact;
