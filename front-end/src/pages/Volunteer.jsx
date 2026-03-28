import React, { useState } from 'react';
import Section from '../components/Section';
import { UserPlus, Heart, Users, Calendar, CheckCircle, Award, Clock, Smile } from 'lucide-react';
import { motion } from 'framer-motion';
import StaggeredHeading from '../components/StaggeredHeading';
import '../styles/Volunteer.css';

const Volunteer = () => {
    const roles = [
        {
            title: "Teaching Assistant",
            commitment: "5-10 hours/week",
            desc: "Help children with homework and organize educational activities.",
            icon: <Users />
        },
        {
            title: "Event Coordinator",
            commitment: "Flexible",
            desc: "Assist in planning and executing fundraising events.",
            icon: <Calendar />
        },
        {
            title: "Community Outreach",
            commitment: "Weekends",
            desc: "Spread awareness and distribute supplies in local communities.",
            icon: <Heart />
        }
    ];

    const benefits = [
        { icon: <Heart />, text: "Make a real difference in your community" },
        { icon: <Users />, text: "Connect with like-minded individuals" },
        { icon: <Award />, text: "Gain valuable experience and skills" },
        { icon: <Smile />, text: "Personal growth and fulfillment" }
    ];

    const stats = [
        { number: "500+", label: "Active Volunteers" },
        { number: "10k+", label: "Hours Contributed" },
        { number: "95%", label: "Satisfaction Rate" }
    ];

    const [formStatus, setFormStatus] = useState(null);

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus(null);

        const formData = new FormData(e.target);
        const data = {
            fullName: formData.get('fullName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            course: formData.get('role'), // Mapping 'role' to 'course' as per backend model
            message: `Availability: ${formData.get('availability')}\n\nMotivation: ${formData.get('message')}`
        };

        try {
            const response = await fetch('/api/applications', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            if (result.success) {
                setFormStatus('success');
                e.target.reset();
            } else {
                setFormStatus('error');
                alert(result.message || 'Submission failed');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setFormStatus('error');
            alert('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
            if (formStatus === 'success') {
                setTimeout(() => setFormStatus(null), 5000);
            }
        }
    };

    return (
        <div className="volunteer-page">
            <div className="page-header volunteer-header">
                <div className="container">
                    <span className="sub-heading">Get Involved</span>
                    <StaggeredHeading text="Become a Volunteer" />
                    <p>Explore NGO volunteer opportunities in Madurai. Join us and volunteer with an NGO in Tamil Nadu to create real impact.</p>
                </div>
            </div>

            <Section className="roles-section">
                <div className="section-title text-center mb-5">
                    <h2>Open Roles</h2>
                    <p>Find the perfect way to contribute your time and skills.</p>
                </div>
                <div className="roles-grid">
                    {roles.map((role, i) => (
                        <motion.div
                            key={i}
                            className="role-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="role-icon">{role.icon}</div>
                            <h3>{role.title}</h3>
                            <span className="commitment badge">{role.commitment}</span>
                            <p>{role.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Volunteer Stats */}
            <Section className="volunteer-stats-section">
                <div className="stats-container">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            className="stat-box"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <h3>{stat.number}</h3>
                            <p>{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Application Section with Content */}
            <Section className="application-section bg-light">
                <div className="container">
                    <div className="application-wrapper">
                        {/* Left Side - Engaging Content */}
                        <motion.div
                            className="application-content"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="content-header">
                                <span className="sub-heading">Join Our Team</span>
                                <h2>Ready to Make an Impact?</h2>
                                <p className="lead-text">
                                    Your time and dedication can transform lives. Join hundreds of volunteers
                                    who are already making a difference in our community.
                                </p>
                            </div>

                            {/* Volunteer Testimonial */}
                            <div className="volunteer-testimonial">
                                <div className="testimonial-image">
                                    <img src="/images/assets/unsplash_133.jpg" alt="Volunteer" />
                                </div>
                                <div className="testimonial-content">
                                    <p>"Volunteering with Subikshaa Trust has been one of the most rewarding experiences of my life. The impact we make together is truly incredible."</p>
                                    <strong>Sarah Mitchell</strong>
                                    <span>Volunteer since 2022</span>
                                </div>
                            </div>

                            {/* Benefits */}
                            <div className="benefits-list">
                                <h3>Why Volunteer With Us?</h3>
                                <div className="benefits-grid">
                                    {benefits.map((benefit, i) => (
                                        <motion.div
                                            key={i}
                                            className="benefit-item"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            <div className="benefit-icon">{benefit.icon}</div>
                                            <span>{benefit.text}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="cta-box">
                                <CheckCircle size={24} />
                                <p>Fill out the application form and our team will reach out to you within 48 hours!</p>
                            </div>
                        </motion.div>

                        {/* Right Side - Application Form */}
                        <motion.div
                            className="application-form-wrapper"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="form-header">
                                <UserPlus size={32} />
                                <h3>Application Form</h3>
                                <p>Start your volunteer journey today</p>
                            </div>

                            {formStatus === 'success' ? (
                                <div className="success-msg">
                                    <CheckCircle size={48} />
                                    <h3>Thank you!</h3>
                                    <p>Your application has been received. We will contact you shortly.</p>
                                </div>
                            ) : formStatus === 'error' ? (
                                <div className="error-msg">
                                    <p>Something went wrong. Please try again.</p>
                                    <button onClick={() => setFormStatus(null)} className="btn btn-outline btn-sm">Try Again</button>
                                </div>
                            ) : (
                                <form className="volunteer-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>Full Name *</label>
                                        <input type="text" name="fullName" placeholder="John Doe" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Email Address *</label>
                                        <input type="email" name="email" placeholder="john@example.com" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone Number</label>
                                        <input type="tel" name="phone" placeholder="+1 (555) 000-0000" />
                                    </div>
                                    <div className="form-group">
                                        <label>Preferred Role *</label>
                                        <select name="role" required>
                                            <option value="">Select a role</option>
                                            <option>Teaching Assistant</option>
                                            <option>Event Coordinator</option>
                                            <option>Community Outreach</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Availability *</label>
                                        <select name="availability" required>
                                            <option value="">Select availability</option>
                                            <option>Weekdays</option>
                                            <option>Weekends</option>
                                            <option>Flexible</option>
                                        </select>
                                    </div>
                                    <div className="form-group full">
                                        <label>Why do you want to volunteer? *</label>
                                        <textarea name="message" rows="4" placeholder="Tell us about your motivation..." required></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting}>
                                        {isSubmitting ? 'Submitting...' : 'Submit Application'} <UserPlus size={18} />
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Volunteer;
