import React from 'react';
import Section from '../components/Section';
import SEO from '../components/SEO';
import '../styles/Legal.css';

const Cookies = () => {
    return (
        <div className="legal-page">
            <SEO
                title="Cookie Policy"
                description="Learn about how Subikshaa Trust uses cookies and tracking technologies to improve your experience."
            />
            <div className="page-header">
                <div className="container">
                    <h1>Cookie Policy</h1>
                    <p>Last Updated: January 20, 2026</p>
                </div>
            </div>
            <Section>
                <div className="container">
                    <div className="legal-content-wrapper">

                        <div className="legal-section">
                            <p>This Cookie Policy explains how Subikshaa Trust ("we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.</p>
                        </div>

                        <div className="legal-section">
                            <h2>1. What are cookies?</h2>
                            <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
                        </div>

                        <div className="legal-section">
                            <h2>2. Why do we use cookies?</h2>
                            <p>We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties.</p>
                            <ul>
                                <li><strong>Essential Cookies:</strong> These cookies are strictly necessary to provide you with services available through our Website.</li>
                                <li><strong>Performance & Functionality Cookies:</strong> These cookies are used to enhance the performance and functionality of our Website but are non-essential to their use.</li>
                                <li><strong>Analytics & Customization Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are.</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>3. How can I control cookies?</h2>
                            <p>You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.</p>
                        </div>

                        <div className="legal-section">
                            <h2>4. Google Analytics</h2>
                            <p>We use Google Analytics to help us understand how our customers use the Site -- you can read more about how Google uses your Personal Information here: https://www.google.com/intl/en/policies/privacy/. You can also opt-out of Google Analytics here: https://tools.google.com/dlpage/gaoptout.</p>
                        </div>

                        <div className="contact-info-box">
                            <h3>Questions about cookies?</h3>
                            <p>If you have any questions about our use of cookies or other technologies, please email us at:</p>
                            <p><strong>Email:</strong> Care@subikshaa.trust.org</p>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Cookies;
