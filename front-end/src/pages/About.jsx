import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import SEO from '../components/SEO';
import { Target, Eye, Heart, History, Award, Users, CheckCircle } from 'lucide-react';
import '../styles/About.css';
import Team from './Team';
import StaggeredHeading from '../components/StaggeredHeading';

const About = () => {
    return (
        <div className="about-page">
            <SEO
                title="About Us"
                description="Learn about Subikshaa Trust's mission, vision, and the team working tirelessly to make a positive impact in the world."
            />
            {/* Page Header */}
            <div className="page-header about-header">
                <motion.div
                    className="container"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="sub-heading">Who We Are</span>
                    <StaggeredHeading text="Dedicated in changing the world." />
                    <p>We are a non-profit organization focused on making a tangible difference in the lives of those who need it most.</p>
                </motion.div>
            </div>


            {/* About Our NGO Trust - Introduction */}
            <Section className="about-intro-section">
                <div className="container text-center" style={{ maxWidth: '900px' }}>
                    <span className="sub-heading">Who We Are</span>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                        About Our NGO Trust – A Registered Non-Profit Organisation in India
                    </h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'var(--text-color)' }}>
                        We are a registered NGO in India committed to social transformation through education, healthcare, women empowerment, child welfare, and community development. As a charitable trust in Tamil Nadu, our mission is to uplift underprivileged communities by addressing root causes of poverty and inequality.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-color)' }}>
                        Recognised as a genuine charity organisation in India, we work closely with local communities across Madurai and other regions of Tamil Nadu. Our programs are impact-driven, transparent, and aligned with national development goals, making us a trusted NGO in Tamil Nadu for donors, volunteers, and partners.
                    </p>
                </div>
            </Section>

            {/* Mission & Vision */}
            <Section className="mission-vision-section">
                <div className="container">
                    {/* Mission Row */}
                    <div className="mv-feature-row">
                        <motion.div
                            className="mv-feature-image"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src="/images/assets/unsplash_1.jpg"
                                alt="Our Mission"
                            />
                            <div className="mv-floating-icon">
                                <Target size={32} strokeWidth={1.5} />
                            </div>
                        </motion.div>
                        <motion.div
                            className="mv-feature-content"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h3>Our Mission</h3>
                            <p className="mv-main-text">To empower underprivileged communities by providing sustainable resources, education, and healthcare, ensuring every individual has the opportunity to thrive.</p>

                            <div className="mv-highlight-box">
                                <span className="mv-box-label">OUR FOCUS:</span>
                                <ul className="mv-check-list">
                                    <li><CheckCircle size={18} /> Provide sustainable community resources</li>
                                    <li><CheckCircle size={18} /> Ensure accessible education for all</li>
                                    <li><CheckCircle size={18} /> Deliver critical healthcare support</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                    {/* Vision Row */}
                    <div className="mv-feature-row reverse">
                        <motion.div
                            className="mv-feature-image"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src="/images/assets/unsplash_2.jpg"
                                alt="Our Vision"
                            />
                            <div className="mv-floating-icon">
                                <Eye size={32} strokeWidth={1.5} />
                            </div>
                        </motion.div>
                        <motion.div
                            className="mv-feature-content"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h3>Our Vision</h3>
                            <p className="mv-main-text">A world where poverty does not exist, and every person has access to the basic necessities of life, dignity, and a promising future.</p>

                            <div className="mv-highlight-box">
                                <span className="mv-box-label">THE IMPACT:</span>
                                <ul className="mv-check-list">
                                    <li><CheckCircle size={18} /> Eradicate extreme poverty globally</li>
                                    <li><CheckCircle size={18} /> Guarantee dignity and human rights</li>
                                    <li><CheckCircle size={18} /> Create promising futures for youth</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* Core Values */}
            <Section className="values-section bg-light">
                <motion.div
                    className="text-center mb-5"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="sub-heading">Our Culture</span>
                    <h2>Core Values</h2>
                </motion.div>
                <div className="values-grid">
                    {[
                        { icon: <Heart />, title: "Compassion", desc: "We lead with empathy and kindness in everything we do." },
                        { icon: <Users />, title: "Community", desc: "We believe in the power of working together." },
                        { icon: <Award />, title: "Integrity", desc: "We are transparent, honest, and accountable." },
                        { icon: <History />, title: "Dedication", desc: "We are committed to long-term impact." }
                    ].map((val, i) => (
                        <motion.div
                            key={i}
                            className="value-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10, scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="value-icon">{val.icon}</div>
                            <h4>{val.title}</h4>
                            <p>{val.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* History / Story */}
            <Section className="history-section">
                <div className="history-container">
                    <motion.div
                        className="history-image"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src="/images/assets/unsplash_3.jpg" alt="Founding Story" />
                    </motion.div>
                    <motion.div
                        className="history-content"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="sub-heading">Our Story</span>
                        <h2>How It All Started</h2>
                        <p>Founded in 2005, Subikshaa Trust began as a small group of volunteers determined to clear a local river. What started as a monthly cleanup evolved into a comprehensive community support organization.</p>
                        <p>Over the last decade, we have expanded our reach to over 50 communities, providing not just environmental support but critical aid in education, food security, and healthcare.</p>

                        <div className="stats-row">
                            <div className="stat">
                                <strong>2005</strong>
                                <span>Founded</span>
                            </div>
                            <div className="stat">
                                <strong>50+</strong>
                                <span>Communities</span>
                            </div>
                            <div className="stat">
                                <strong>100%</strong>
                                <span>Commitment</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Team Section */}
            <Team />
        </div>
    );
};

export default About;
