import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import SEO from '../components/SEO';
import { Target, Eye, Heart, History, Award, Users, CheckCircle } from 'lucide-react';
import '../styles/AboutRefined.css';
import Team from './Team';
import StaggeredHeading from '../components/StaggeredHeading';

const About = () => {
    return (
        <div className="about-page">
            <SEO
                title="About Us"
                description="Learn about Subikshaa Trust's mission, vision and the team working tirelessly to make a positive impact in the world."
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
                <div className="container about-intro-content">
                    <span className="sub-heading">Who We Are</span>
                    <h2>
                        About Our NGO Trust - Leading Registered Non-Profit Organisation in Tamil Nadu, India
                    </h2>

                    <p>
                        We are a legally registered NGO trust in India dedicated to creating sustainable social impact through education, healthcare services, women empowerment, child welfare, rural development and poverty alleviation programs. As a trusted charitable organisation in Tamil Nadu, we focus on solving real-world problems by addressing the root causes of inequality, lack of access and socio-economic challenges faced by underprivileged communities.
                    </p>

                    <p>
                        Based in Madurai, we actively work across urban and rural regions of Tamil Nadu, delivering high impact NGO programs that improve lives and empower individuals. Our initiatives include free education support for children, healthcare camps, skill development training, and women self-help empowerment projects designed to create long-term independence and growth.
                    </p>

                    <p>
                        Recognised as a reliable and transparent NGO in India, we maintain strong accountability, ethical governance and measurable outcomes in all our projects. Our organisation collaborates with donors, volunteers, CSR partners and community leaders to build a better and more inclusive society. If you are looking to donate to a genuine NGO in Tamil Nadu or volunteer for social causes, our trust provides meaningful opportunities to make a real difference.
                    </p>

                    {/* Global Standards & NGO Definition */}
                    <p>
                        As defined by global organisations such as the UN and WHO, non-governmental organisations (NGOs) play a critical role in advancing sustainable development, protecting human rights and supporting vulnerable communities worldwide. Inspired by these globally accepted principles, our NGO trust functions as an independent, non-profit organisation committed to inclusive growth, social justice and community driven development.
                    </p>

                    <p>
                        We align our initiatives with internationally recognised frameworks such as the Sustainable Development Goals (SDGs), focusing on quality education, accessible healthcare, gender equality, and poverty reduction. By combining global development standards with grassroots action in Tamil Nadu, we ensure our programs are impactful, scalable and sustainable.
                    </p>

                    <p>
                        Our work reflects the core values promoted by leading global institutions—transparency, accountability, inclusiveness, and measurable impact. Through ethical governance and strong community participation, we aim to contribute meaningfully to both national development and global humanitarian efforts.
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
                                alt="NGO Mission for Education, Healthcare and Community Development in Tamil Nadu"
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

                            <p className="mv-main-text">
                                Our mission is to empower underprivileged individuals and communities in Tamil Nadu by providing access to quality education, affordable healthcare, sustainable livelihood opportunities and essential resources.
                            </p>

                            <p className="mv-sub-text">
                                Through strategic NGO initiatives, partnerships and grassroots engagement, we focus on long-term development rather than short-term aid—ensuring lasting social transformation across India.
                            </p>

                            <div className="mv-highlight-box">
                                <span className="mv-box-label">OUR CORE FOCUS AREAS:</span>
                                <ul className="mv-check-list">
                                    <li><CheckCircle size={18} /> Sustainable community development programs</li>
                                    <li><CheckCircle size={18} /> Free and accessible education initiatives for children</li>
                                    <li><CheckCircle size={18} /> Healthcare camps and medical assistance for rural areas</li>
                                    <li><CheckCircle size={18} /> Women empowerment and skill development training</li>
                                    <li><CheckCircle size={18} /> Child welfare, nutrition and protection programs</li>
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
                                alt="Vision of NGO for Poverty-Free and Empowered Society in India"
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

                            <p className="mv-main-text">
                                A world where poverty does not exist, and every person has access to the basic necessities of life, dignity and a promising future.
                            </p>

                            <p className="mv-sub-text">
                                Our vision is inspired by global frameworks established by leading international organizations, focusing on equality, human rights and sustainable development.
                            </p>

                            <p className="mv-sub-text">
                                By aligning with Sustainable Development Goals (SDGs), we aim to create lasting impact through education, healthcare and empowerment initiatives.
                            </p>

                            <div className="mv-highlight-box">
                                <span className="mv-box-label">THE IMPACT:</span>
                                <ul className="mv-check-list">
                                    <li><CheckCircle size={18} /> Eradicate extreme poverty globally</li>
                                    <li><CheckCircle size={18} /> Guarantee dignity and human rights</li>
                                    <li><CheckCircle size={18} /> Create promising futures for youth</li>
                                    <li><CheckCircle size={18} /> Ensure equal access to education and healthcare</li>
                                    <li><CheckCircle size={18} /> Promote sustainable community development</li>
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
                        { icon: <Award />, title: "Integrity", desc: "We are transparent, honest and accountable." },
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
                <div className="container history-container">
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
                        <p>Over the last decade, we have expanded our reach to over 50 communities, providing not just environmental support but critical aid in education, food security and healthcare.</p>

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
