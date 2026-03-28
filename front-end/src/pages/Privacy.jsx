import React from 'react';
import Section from '../components/Section';
import SEO from '../components/SEO';
import '../styles/Legal.css';

const Privacy = () => {
    return (
        <div className="legal-page">
            <SEO
                title="Privacy Policy"
                description="Read Subikshaa Trust's Privacy Policy to understand how we collect, use, and protect your personal information."
            />
            <div className="page-header">
                <div className="container">
                    <h1>Privacy Policy</h1>
                    <p>Last Updated: January 20, 2026</p>
                </div>
            </div>
            <Section>
                <div className="container">
                    <div className="legal-content-wrapper">

                        <div className="legal-section">
                            <p>At Subikshaa Trust, we are committed to maintaining the trust and confidence of our visitors to our web site. In this Privacy Policy, we’ve provided detailed information on when and why we collect your personal information, how we use it, the limited conditions under which we may disclose it to others and how we keep it secure.</p>
                        </div>

                        <div className="legal-section">
                            <h2>1. Information We Collect</h2>
                            <p>We collect information you provide directly to us. For example, we collect information when you donate, sign up for a newsletter, request information, create an account, or otherwise communicate with us.</p>
                            <h3>Personal Data</h3>
                            <ul>
                                <li>Identity Data: includes first name, last name, username or similar identifier.</li>
                                <li>Contact Data: includes billing address, delivery address, email address and telephone numbers.</li>
                                <li>Financial Data: includes bank account and payment card details.</li>
                                <li>Transaction Data: includes details about payments to and from you and other details of products and services you have purchased from us.</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>2. How We Use Your Information</h2>
                            <p>We use the information we collect to operate, maintain, and provide you with the features and functionality of the Service. We may use your email address to send you marketing emails. You may opt-out of these communications at any time.</p>
                            <ul>
                                <li>To process your donations and issue receipts.</li>
                                <li>To send you updates about our work and impact.</li>
                                <li>To improved our website and user experience.</li>
                                <li>To comply with legal obligations.</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>3. Data Security</h2>
                            <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>
                        </div>

                        <div className="legal-section">
                            <h2>4. Third-Party Links</h2>
                            <p>This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.</p>
                        </div>

                        <div className="legal-section">
                            <h2>5. Your Legal Rights</h2>
                            <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to access, correct, erase, restrict, transfer, or object to the processing of your personal data.</p>
                        </div>

                        <div className="contact-info-box">
                            <h3>Contact Us</h3>
                            <p>If you have any questions about this Privacy Policy, please contact us:</p>
                            <p><strong>Email:</strong> Care@subikshaa.trust.org</p>
                            <p><strong>Address:</strong> Pillaiyar kovil street, near pattu mahal, S.S colony, Madurai - 625018</p>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Privacy;
