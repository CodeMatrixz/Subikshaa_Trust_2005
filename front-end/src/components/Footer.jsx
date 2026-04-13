import React from 'react';
import { Link } from 'react-router-dom';
import {
    Facebook,
    Instagram,
    Youtube,
    Mail,
    Phone,
    MapPin,
    ArrowRight
} from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">

            <div className="container footer-content">
                <div className="footer-main">
                    <div className="footer-brand">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', marginTop: '-0.5rem' }}>
                            <Link to="/" className="footer-logo" style={{ marginBottom: 0, flexShrink: 0 }}>
                                <img src="/images/assets/logo_v2.jpg" alt="Subikshaa Trust Logo" />
                            </Link>
                            <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', opacity: 0.8, fontWeight: 700, lineHeight: 1.3, margin: 0 }}>A Trust For Socio Economic<br />Development</p>
                        </div>
                        <p className="footer-description">
                            Empowering communities and changing lives through dedicated action since 2005.
                            Join us in creating lasting impact across the globe.
                        </p>
                        <div className="footer-social">
                            <a href="https://www.facebook.com/profile.php?id=61587760916465" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <Facebook size={18} strokeWidth={1.5} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-linkedin"
                                >
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect width="4" height="12" x="2" y="9" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/subikshaatrust/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <Instagram size={18} strokeWidth={1.5} />
                            </a>
                            <a href="https://www.youtube.com/channel/UCuPMRFTT1KgiCg9zBABLY9Q" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <Youtube size={18} strokeWidth={1.5} />
                            </a>
                        </div>
                    </div>

                    <div className="footer-nav">
                        <div className="footer-nav-col">
                            <h3>Organization</h3>
                            <ul>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/causes">Our Causes</Link></li>
                                <li><Link to="/events">Events</Link></li>
                                <li><Link to="/csr">CSR</Link></li>
                                <li><Link to="/volunteer">Volunteer</Link></li>
                            </ul>
                        </div>
                        <div className="footer-nav-col">
                            <h3>Resources</h3>
                            <ul>
                                <li><Link to="/financials">Financials</Link></li>
                                <li><Link to="/resources">Reports</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                                <li><Link to="/privacy">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-aside">
                    <div className="footer-contact-info">
                        <h3>Get in Touch</h3>
                        <ul className="contact-details">
                            <li>
                                <MapPin size={16} />
                                <span>Pillaiyar kovil street, near pattu mahal, S.S colony, Madurai - 625018</span>
                            </li>
                            <li>
                                <Phone size={16} />
                                <span>+91 9944894244</span>
                            </li>
                            <li>
                                <Mail size={16} />
                                <span>Care@subikshaa.trust.org</span>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-newsletter-section">
                        <h3>Stay Informed</h3>
                        <p>Subscribe for meaningful updates.</p>
                        <form className="newsletter-form-premium" onSubmit={(e) => e.preventDefault()}>
                            <div className="input-field">
                                <input type="email" placeholder="Email address" required />
                                <button type="submit" aria-label="Subscribe">
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="footer-bottom-premium">
                <div className="container footer-bottom-inner">
                    <p className="copyright">&copy; {new Date().getFullYear()} Subikshaa Trust. All rights reserved.</p>
                    <div className="footer-legal-links">
                        <Link to="/terms">Terms</Link>
                        <Link to="/privacy">Privacy</Link>
                        <Link to="/cookies">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
