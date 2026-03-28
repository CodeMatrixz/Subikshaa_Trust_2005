import React from 'react';
import Section from '../components/Section';
import SEO from '../components/SEO';
import '../styles/Legal.css';

const Terms = () => {
    return (
        <div className="legal-page">
            <SEO
                title="Terms of Service"
                description="Review the Terms of Service for using the Subikshaa Trust website and our services."
            />
            <div className="page-header">
                <div className="container">
                    <h1>Terms of Service</h1>
                    <p>Last Updated: January 20, 2026</p>
                </div>
            </div>
            <Section>
                <div className="container">
                    <div className="legal-content-wrapper">

                        <div className="legal-section">
                            <p>Welcome to Subikshaa Trust. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.</p>
                        </div>

                        <div className="legal-section">
                            <h2>1. Use of Website</h2>
                            <p>You may use our website only for lawful purposes and in accordance with these Terms. You agree not to use the website:</p>
                            <ul>
                                <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
                                <li>To exploit, harm, or attempt to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.</li>
                                <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter", "spam", or any other similar solicitation.</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>2. Intellectual Property Rights</h2>
                            <p>The website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Subikshaa Trust, its licensors, or other providers of such material and are protected by copyright, trademark, and other intellectual property or proprietary rights laws.</p>
                        </div>

                        <div className="legal-section">
                            <h2>3. Donations</h2>
                            <p>All donations made to Subikshaa Trust are voluntary and non-refundable. We take great care to ensure that your donation is used for the intended purpose. However, we reserve the right to redirect funds to other areas of need if specific programs are fully funded or cannot be carried out.</p>
                        </div>

                        <div className="legal-section">
                            <h2>4. User Accounts</h2>
                            <p>To access certain features of the website, you may be asked to create an account. You are responsible for maintaining the confidentiality of your account information, including your password, and for all activity that occurs under your account.</p>
                        </div>

                        <div className="legal-section">
                            <h2>5. Limitation of Liability</h2>
                            <p>In no event will Subikshaa Trust, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the website, any websites linked to it, any content on the website or such other websites, including any direct, indirect, special, incidental, consequential, or punitive damages.</p>
                        </div>

                        <div className="legal-section">
                            <h2>6. Changes to Terms</h2>
                            <p>We may revise and update these Terms from time to time in our sole discretion. All changes are effective immediately when we post them. Your continued use of the website following the posting of revised Terms means that you accept and agree to the changes.</p>
                        </div>

                        <div className="contact-info-box">
                            <h3>Contact Us</h3>
                            <p>For questions regarding these Terms, please reach out:</p>
                            <p><strong>Email:</strong> Care@subikshaa.trust.org</p>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Terms;
