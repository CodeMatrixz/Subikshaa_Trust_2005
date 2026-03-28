import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Section from '../components/Section';
import { CheckCircle, ArrowRight, Building, Users, Heart, BookOpen } from 'lucide-react';
import '../styles/CSR.css';

const CSR = () => {
    const complianceItems = [
        "12A Registered",
        "80G Tax Exemption",
        "FCRA Compliant",
        "NGO Darpan Registered",
        "CSR-1 Form Filed"
    ];

    const impactAreas = [
        {
            title: "Education",
            icon: <BookOpen size={24} />,
            desc: "School adoption, digital classrooms, and scholarship programs for underprivileged students."
        },
        {
            title: "Healthcare",
            icon: <Heart size={24} />,
            desc: "Free medical camps, rural health initiatives, and specialized care for the elderly."
        },
        {
            title: "Women Empowerment",
            icon: <Users size={24} />,
            desc: "Skill development training, livelihood support, and self-help group formation."
        },
        {
            title: "Community Development",
            icon: <Building size={24} />,
            desc: "Water sanitation projects, rural infrastructure, and disaster relief support."
        }
    ];

    return (
        <div className="csr-page">
            <SEO
                title="CSR Partner with a Trusted NGO in Tamil Nadu | 12A & 80G Registered"
                description="Partner with Subikshaa Trust for impactful CSR initiatives. We are a 12A, 80G & FCRA registered NGO in Tamil Nadu specializing in education, healthcare, and women empowerment."
            />

            {/* Hero Section */}
            <div className="page-header csr-header">
                <div className="container">
                    <motion.span
                        className="sub-heading"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Corporate Social Responsibility
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Partner for Sustainable Impact
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        We collaborate with corporates as an implementation partner for CSR initiatives, ensuring compliance, transparency, and measurable change.
                    </motion.p>
                </div>
            </div>

            {/* Introduction & Compliance */}
            <Section className="csr-intro">
                <div className="row align-items-center">
                    <motion.div
                        className="col-lg-6"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title">Trusted Implementation Partner</h2>
                        <p className="lead-text">
                            Subikshaa Trust is a registered non-profit organization committed to full transparency and impactful social work.
                        </p>
                        <p>
                            We help corporates fulfill their social responsibility goals through targeted interventions in education, healthcare, and community welfare. As a registered entity under NGO Darpan with all necessary legal approvals, we ensure your CSR funds create lasting value.
                        </p>

                        <div className="compliance-grid">
                            {complianceItems.map((item, index) => (
                                <div key={index} className="compliance-item">
                                    <CheckCircle size={20} className="check-icon" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        className="col-lg-6"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="csr-image-card">
                            <img src="/images/assets/unsplash_119.jpg" alt="CSR Impact" />
                            <div className="impact-badge">
                                <strong>20+ Years</strong>
                                <span>of Social Service</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Impact Areas */}
            <Section className="csr-proposals bg-light">
                <div className="section-header text-center">
                    <span className="sub-heading">Our Programs</span>
                    <h2>CSR Opportunities</h2>
                    <p className="section-desc">
                        Our CSR programs include school adoption, health camps, women livelihood training, rural development, and employee volunteering.
                    </p>
                </div>

                <div className="impact-areas-grid">
                    {impactAreas.map((area, index) => (
                        <motion.div
                            key={index}
                            className="impact-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="icon-wrapper">{area.icon}</div>
                            <h3>{area.title}</h3>
                            <p>{area.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* CTA Section */}
            <Section className="csr-cta-section">
                <motion.div
                    className="csr-cta-box"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2>Ready to Create Change?</h2>
                    <p>Partner with a trusted NGO in India to create sustainable social impact aligned with your CSR goals.</p>
                    <div className="cta-buttons">
                        <a href="/contact" className="btn btn-primary btn-lg">
                            Partner With Us for CSR Impact <ArrowRight size={20} />
                        </a>
                        <a href="/financials" className="btn btn-outline-white btn-lg">
                            View Financials
                        </a>
                    </div>
                </motion.div>
            </Section>
        </div>
    );
};

export default CSR;
