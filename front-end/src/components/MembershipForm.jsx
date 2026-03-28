import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Mail, MessageSquare, Heart, Target } from 'lucide-react';
import '../styles/MembershipForm.css';

const MembershipForm = () => {
    const [formStatus, setFormStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('success');
        // Simulate form submission
        setTimeout(() => setFormStatus(null), 3000);
    };

    return (
        <section className="membership-section">
            <div className="container membership-container">
                <motion.div
                    className="membership-content"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="sub-heading">Wanna give a hand?</span>
                    <h2>Become Part of the Subikshaa Trust Family</h2>
                    <p>
                        Connect with like-minded individuals who are passionate about making a difference.
                        As a member, you'll receive updates, exclusive event invitations, and opportunities
                        to contribute to our causes.
                    </p>
                    <div className="membership-benefits">
                        <div className="benefit-item">
                            <div className="benefit-icon"><Heart size={20} /></div>
                            <span>Exclusive Impact Reports</span>
                        </div>
                        <div className="benefit-item">
                            <div className="benefit-icon"><UserPlus size={20} /></div>
                            <span>Networking Opportunities</span>
                        </div>
                        <div className="benefit-item">
                            <div className="benefit-icon"><MessageSquare size={20} /></div>
                            <span>Community Forums</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="membership-form-wrapper"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {formStatus === 'success' ? (
                        <div className="success-message">
                            <div className="success-icon">🎉</div>
                            <h3>Welcome Aboard!</h3>
                            <p>Thank you for becoming part of the moment. We've sent a welcome email to your inbox.</p>
                        </div>
                    ) : (
                        <form className="membership-form" onSubmit={handleSubmit}>
                            <h3>Membership Application</h3>
                            <div className="form-group">
                                <label>Full Name</label>
                                <div className="input-wrapper">
                                    <UserPlus size={18} />
                                    <input type="text" placeholder="Your Name" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <div className="input-wrapper">
                                    <Mail size={18} />
                                    <input type="email" placeholder="email@example.com" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Area of Interest</label>
                                <div className="input-wrapper">
                                    <Target size={18} />
                                    <select required>
                                        <option value="">Select an interest...</option>
                                        <option value="volunteering">Volunteering</option>
                                        <option value="donations">Contributions & Fundraising</option>
                                        <option value="education">Education Programs</option>
                                        <option value="events">Community Events</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group full">
                                <label>Tell us about yourself</label>
                                <textarea rows="3" placeholder="Why do you want to give a hand?"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">
                                Join the moment
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default MembershipForm;
