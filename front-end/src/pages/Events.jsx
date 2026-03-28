import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/Section';
import SEO from '../components/SEO';
import { MapPin, Clock, Users, Heart, Tag, X, CheckCircle, ShieldCheck } from 'lucide-react';
import '../styles/Events.css';

const categoryColors = {
    Community:  { bg: '#fef3c7', text: '#92400e', dot: '#f59e0b' },
    Education:  { bg: '#dbeafe', text: '#1e40af', dot: '#3b82f6' },
    Medical:    { bg: '#dcfce7', text: '#166534', dot: '#22c55e' },
    Water:      { bg: '#e0f2fe', text: '#0c4a6e', dot: '#0ea5e9' },
    Default:    { bg: '#f3e8ff', text: '#6b21a8', dot: '#a855f7' },
};

const Events = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [serverError, setServerError] = useState('');
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
    const [errors, setErrors] = useState({});

    const events = [
        {
            id: 1,
            title: 'Winter Blanket Distribution',
            date: 'Jan 25, 2026',
            month: 'JAN', day: '25', year: '2026',
            time: '08:00 AM – 02:00 PM',
            location: 'Downtown Community Center',
            image: '/images/assets/unsplash_5.jpg',
            price: 'Free',
            description: 'Supporting homeless and low-income families with warm clothing and blankets.',
            category: 'Community',
            volunteers: '50+ volunteers needed',
        },
        {
            id: 2,
            title: 'Charity Marathon for Education',
            date: 'Feb 10, 2026',
            month: 'FEB', day: '10', year: '2026',
            time: '06:00 AM – 12:00 PM',
            location: 'City Park Running Trail',
            image: '/images/assets/unsplash_70.jpg',
            price: '₹500 Registration',
            description: 'Fundraising for child education in India. Run for a cause that changes lives!',
            category: 'Education',
            volunteers: 'Runners & Support Staff',
        },
        {
            id: 3,
            title: 'Free Health Camp & Medical Checkup',
            date: 'Feb 18, 2026',
            month: 'FEB', day: '18', year: '2026',
            time: '09:00 AM – 05:00 PM',
            location: 'Riverside Community Hall',
            image: '/images/assets/unsplash_71.jpg',
            price: 'Free',
            description: 'Community healthcare outreach providing free checkups and consultations.',
            category: 'Medical',
            volunteers: 'Medical professionals welcome',
        },
        {
            id: 4,
            title: 'Food Bank Volunteer Day',
            date: 'Feb 22, 2026',
            month: 'FEB', day: '22', year: '2026',
            time: '10:00 AM – 04:00 PM',
            location: 'Subikshaa Trust Food Distribution Center',
            image: '/images/assets/unsplash_6.jpg',
            price: 'Free',
            description: 'Volunteer with NGO in Madurai to distribute food to those in need.',
            category: 'Community',
            volunteers: 'All ages welcome',
        },
        {
            id: 5,
            title: "Children's Education Workshop",
            date: 'Mar 05, 2026',
            month: 'MAR', day: '05', year: '2026',
            time: '02:00 PM – 06:00 PM',
            location: 'Hope Elementary School',
            image: '/images/assets/unsplash_7.jpg',
            price: 'Free',
            description: 'Learning support for school children through interactive and engaging workshops.',
            category: 'Education',
            volunteers: 'Teachers & mentors needed',
        },
        {
            id: 6,
            title: 'Water Initiative',
            date: 'Mar 15, 2026',
            month: 'MAR', day: '15', year: '2026',
            time: '11:00 AM – 03:00 PM',
            location: 'Rural Tamil Nadu',
            image: '/images/assets/unsplash_8.jpg',
            price: 'Free',
            description: 'Clean drinking water access in rural Tamil Nadu. Join our water initiative.',
            category: 'Water',
            volunteers: 'Open to all supporters',
        },
    ];

    const openModal = (event) => {
        setSelectedEvent(event);
        setSubmitted(false);
        setServerError('');
        setErrors({});
        setForm({ name: '', email: '', phone: '', message: '' });
    };

    const closeModal = () => {
        setSelectedEvent(null);
        setSubmitted(false);
        setServerError('');
        setErrors({});
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = 'Full name is required.';
        if (!form.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = 'Enter a valid email address.';
        }
        if (!form.phone.trim()) {
            newErrors.phone = 'Phone number is required.';
        } else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s|-/g, ''))) {
            newErrors.phone = 'Enter a valid 10-digit Indian mobile number.';
        }
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setServerError('');
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setLoading(true);
        try {
            const res = await fetch('/api/event-registrations', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    phone: form.phone,
                    eventTitle: selectedEvent.title,
                    message: form.message,
                }),
            });
            const data = await res.json();
            if (data.success) {
                setSubmitted(true);
            } else {
                setServerError(data.message || 'Something went wrong. Please try again.');
            }
        } catch (err) {
            setServerError('Unable to connect to the server. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="events-page">
            <SEO
                title="Events"
                description="Join Subikshaa Trust events — volunteer drives, health camps, education workshops and more across Tamil Nadu."
            />

            <div className="page-header events-header">
                <div className="container">
                    <motion.span className="sub-heading"
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        Upcoming Events
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                        Join Our Impact Activities
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
                        Participate in our initiatives and help us create a better world.
                    </motion.p>
                </div>
            </div>

            <Section className="events-section">
                <div className="tickets-list">
                    {events.map((event, index) => {
                        const colors = categoryColors[event.category] || categoryColors.Default;
                        return (
                            <motion.div
                                key={event.id}
                                className="ticket-card"
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08, duration: 0.5 }}
                            >
                                {/* Left: Date Column */}
                                <div className="ticket-date-col" style={{ background: 'linear-gradient(160deg, var(--color-primary) 0%, #3d1d25 100%)' }}>
                                    <span className="ticket-month">{event.month}</span>
                                    <span className="ticket-day">{event.day}</span>
                                    <span className="ticket-year">{event.year}</span>
                                </div>

                                {/* Perforation */}
                                <div className="ticket-perforation" />

                                {/* Middle: Image */}
                                <div className="ticket-image-col">
                                    <img src={event.image} alt={event.title} />
                                    <span className="ticket-cat-badge" style={{ background: colors.bg, color: colors.text }}>
                                        <span className="cat-dot" style={{ background: colors.dot }} />
                                        {event.category}
                                    </span>
                                </div>

                                {/* Right: Details */}
                                <div className="ticket-details-col">
                                    <div className="ticket-top">
                                        <h3>{event.title}</h3>
                                        <p>{event.description}</p>
                                    </div>
                                    <div className="ticket-meta">
                                        <span><Clock size={14} />{event.time}</span>
                                        <span><MapPin size={14} />{event.location}</span>
                                        <span><Users size={14} />{event.volunteers}</span>
                                    </div>
                                    <div className="ticket-actions">
                                        <span className={`ticket-price ${event.price === 'Free' ? 'free' : ''}`}>
                                            {event.price === 'Free' ? <Heart size={13} /> : <Tag size={13} />}
                                            {event.price}
                                        </span>
                                        <button
                                            className="btn btn-primary btn-sm ticket-btn"
                                            onClick={() => openModal(event)}
                                        >
                                            Register Now
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>

            {/* ── Registration Modal ── */}
            <AnimatePresence>
                {selectedEvent && (
                    <motion.div
                        className="reg-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="reg-modal"
                            initial={{ y: 60, opacity: 0, scale: 0.97 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 60, opacity: 0, scale: 0.97 }}
                            transition={{ type: 'spring', damping: 26, stiffness: 220 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="reg-modal-header">
                                <div>
                                    <span className="reg-modal-eyebrow">Event Registration</span>
                                    <h3>{selectedEvent.title}</h3>
                                    <div className="reg-modal-meta">
                                        <span><Clock size={13} /> {selectedEvent.time}</span>
                                        <span><MapPin size={13} /> {selectedEvent.location}</span>
                                    </div>
                                </div>
                                <button className="reg-close-btn" onClick={closeModal}><X size={20} /></button>
                            </div>

                            {/* Modal Body */}
                            {!submitted ? (
                                <form className="reg-form" onSubmit={handleSubmit} noValidate>
                                    <div className="reg-form-row">
                                        <div className="reg-field">
                                            <label htmlFor="reg-name">Full Name *</label>
                                            <input
                                                id="reg-name"
                                                name="name"
                                                type="text"
                                                placeholder="Enter your full name"
                                                value={form.name}
                                                onChange={handleChange}
                                                className={errors.name ? 'input-error' : ''}
                                            />
                                            {errors.name && <span className="field-error">{errors.name}</span>}
                                        </div>
                                        <div className="reg-field">
                                            <label htmlFor="reg-email">Email Address *</label>
                                            <input
                                                id="reg-email"
                                                name="email"
                                                type="email"
                                                placeholder="Enter your email"
                                                value={form.email}
                                                onChange={handleChange}
                                                className={errors.email ? 'input-error' : ''}
                                            />
                                            {errors.email && <span className="field-error">{errors.email}</span>}
                                        </div>
                                    </div>
                                    <div className="reg-form-row">
                                        <div className="reg-field">
                                            <label htmlFor="reg-phone">Phone Number *</label>
                                            <input
                                                id="reg-phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="10-digit mobile number"
                                                value={form.phone}
                                                onChange={handleChange}
                                                className={errors.phone ? 'input-error' : ''}
                                            />
                                            {errors.phone && <span className="field-error">{errors.phone}</span>}
                                        </div>
                                        <div className="reg-field">
                                            <label>Event</label>
                                            <input type="text" value={selectedEvent.title} disabled />
                                        </div>
                                    </div>
                                    <div className="reg-field">
                                        <label htmlFor="reg-message">Message / Note (Optional)</label>
                                        <textarea
                                            id="reg-message"
                                            name="message"
                                            rows={3}
                                            placeholder="Any specific requirements or questions?"
                                            value={form.message}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    {serverError && (
                                        <p className="server-error">{serverError}</p>
                                    )}
                                    <div className="reg-form-footer">
                                        <p className="reg-note"><ShieldCheck size={13} /> Your information is safe and used only for event coordination.</p>
                                        <button type="submit" className="btn btn-primary reg-submit-btn" disabled={loading}>
                                            {loading ? 'Submitting...' : 'Confirm Registration'}
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <div className="reg-success">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: 'spring', damping: 15, stiffness: 200 }}
                                    >
                                        <CheckCircle size={56} />
                                    </motion.div>
                                    <h4>Registration Confirmed!</h4>
                                    <p>Thank you, <strong>{form.name}</strong>! You're registered for <strong>{selectedEvent.title}</strong>.</p>
                                    <p className="reg-success-sub">We'll send details to <strong>{form.email}</strong> shortly.</p>
                                    <button className="btn btn-primary" onClick={closeModal}>Done</button>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Events;
