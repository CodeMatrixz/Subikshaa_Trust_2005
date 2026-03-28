import React from 'react';
import Section from '../components/Section';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import StaggeredHeading from '../components/StaggeredHeading';
import '../styles/Contact.css';

const Contact = () => {
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
                        <form className="contact-form">
                            <div className="form-group-row">
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" placeholder="First Name" />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="email@example.com" />
                            </div>
                            <div className="form-group">
                                <label>Subject</label>
                                <select>
                                    <option>General Inquiry</option>
                                    <option>Volunteering</option>
                                    <option>Donation Issue</option>
                                    <option>Partnership</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="5" placeholder="Your message here..."></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Contact;
