import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import '../styles/TrustedPartners.css';

const TrustedPartners = () => {
    // Partner organizations - you can replace these with actual partner names
    const partners = [
        "United Nations Foundation",
        "Red Cross International",
        "UNICEF",
        "World Health Organization",
        "Team Everest",
        "CRY (Child Rights and You)",
        "Oxfam International",
        "CARE International",
        "World Vision",
        "HelpAge India",
        "Tata Trusts",
        "The Global Fund"
    ];

    return (
        <section className="trusted-partners-section">
            <div className="container">
                <motion.div
                    className="section-header text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="header-icon">
                        <Award size={32} />
                    </div>
                    <h2>Trusted by Top Organizations</h2>
                    <p>Proudly partnering with renowned institutions to support humanitarian excellence and innovation in social service</p>
                </motion.div>

                <div className="partners-scroll-container">
                    <div className="partners-scroll-track">
                        {/* First set of partners */}
                        <div className="partners-scroll-content">
                            {partners.map((partner, index) => (
                                <div key={`partner-1-${index}`} className="partner-item">
                                    <span>{partner}</span>
                                </div>
                            ))}
                        </div>
                        {/* Duplicate set for seamless loop */}
                        <div className="partners-scroll-content" aria-hidden="true">
                            {partners.map((partner, index) => (
                                <div key={`partner-2-${index}`} className="partner-item">
                                    <span>{partner}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedPartners;
