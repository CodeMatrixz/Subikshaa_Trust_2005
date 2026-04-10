import React from 'react';
import Section from '../components/Section';
import SEO from '../components/SEO';
import StaggeredHeading from '../components/StaggeredHeading';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, ArrowLeft, CheckCircle } from 'lucide-react';
import '../styles/WomenSkillDev.css';

const WomenSkillDev = () => {
    const mainSkills = [
        {
            id: 'aari-work',
            title: "Aari Work",
            image: "/images/aari-work.png"
        },
        {
            id: 'beautician',
            title: "Beautician",
            image: "/images/assets/unsplash_134.jpg"
        },
        {
            id: 'doll-making',
            title: "Doll Making",
            image: "/images/assets/unsplash_135.jpg"
        },
        {
            id: 'fabric-painting',
            title: "Fabric Painting",
            image: "/images/assets/unsplash_136.jpg"
        },
        {
            id: 'jewellery-making',
            title: "Jewellery Making",
            image: "/images/assets/unsplash_137.jpg"
        },
        {
            id: 'mehandi',
            title: "Mehandi",
            image: "/images/assets/unsplash_138.jpg"
        },
        {
            id: 'hand-embroidery',
            title: "Hand Embroidery",
            image: "/images/assets/unsplash_139.jpg"
        },
        {
            id: 'terry-cotton',
            title: "Terry Cotton",
            image: "/images/assets/unsplash_140.jpg"
        },
        {
            id: 'paper-bag',
            title: "Paper Bag Making",
            image: "/images/assets/unsplash_141.jpg"
        },
        {
            id: 'painting',
            title: "Painting",
            image: "/images/assets/unsplash_142.jpg"
        },
        {
            id: 'pot-painting',
            title: "Pot Painting",
            image: "/images/assets/unsplash_143.jpg"
        },
        {
            id: 'bridal-flower',
            title: "Bridal Flower",
            image: "/images/assets/unsplash_144.jpg"
        },
        {
            id: 'baking',
            title: "Baking",
            image: "/images/assets/unsplash_145.jpg"
        },
        {
            id: 'saree-folding',
            title: "Saree Folding",
            image: "/images/assets/unsplash_146.jpg"
        },
        {
            id: 'nail-art',
            title: "Nail Art",
            image: "/images/assets/unsplash_147.jpg"
        }
    ];

    return (
        <div className="women-skill-page">
            <SEO
                title="Women Skill Development – Women Empowerment NGO in India"
                description="As a women empowerment NGO in Tamil Nadu, we run structured skill development programs to help women achieve financial independence."
            />

            <div className="page-header women-skill-header">
                <div className="container">
                    <span className="sub-heading">Empowerment</span>
                    <StaggeredHeading text="Women Skill Development – Women Empowerment NGO in India" />
                    <p>As a women empowerment NGO in Tamil Nadu, we run structured skill development programs to help women achieve financial independence.</p>
                    <div style={{ marginTop: '2rem' }}>
                        <Link to="/programs" className="back-link" style={{ marginBottom: 0 }}>
                            <ArrowLeft size={20} /> Back to Programs
                        </Link>
                    </div>
                </div>
            </div>

            <Section className="skills-content-section">
                <div className="container">
                    <div className="skills-intro text-center">
                        <div className="page-logo-container" style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: '2rem',
                            marginTop: '-1rem'
                        }}>
                            <img
                                src="/images/assets/logo_v2.jpg"
                                alt="Subikshaa Trust Logo"
                                style={{
                                    height: '180px',
                                    width: '180px',
                                    borderRadius: '50%',
                                    objectFit: 'contain',
                                    backgroundColor: 'white',
                                    border: '1px solid rgba(0,0,0,0.08)',
                                    padding: '8px',
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
                                }}
                            />
                        </div>



                        <span className="sub-heading">Training Gallery</span>
                        <h2><GraduationCap className="icon-heading" size={32} strokeWidth={1.5} /> Success Stories & Sessions</h2>
                        <p>A dedicated gallery highlighting training sessions and success stories, positioning us as a top women empowerment NGO in India.</p>
                    </div>

                    <div className="skills-card-grid">
                        {mainSkills.map((skill, index) => (
                            <Link to={`/programs/women-skill-dev/${skill.id}`} key={skill.id} className="skill-link-wrapper">
                                <motion.div
                                    className="skill-image-card"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="skill-img-bg" style={{ backgroundImage: `url(${skill.image})` }}></div>
                                    <div className="skill-overlay"></div>
                                    <div className="skill-content">
                                        <h3>{skill.title}</h3>
                                        <span className="skill-cta">View Details <ArrowRight size={16} /></span>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>



                    <div className="skills-layout-bottom-column">
                        <div className="application-section-full">
                            <motion.div
                                className="apply-card-wide"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="apply-header">
                                    <h3>Join Our Programs</h3>
                                    <p>Ready to start your journey? Click the button below to register.</p>
                                    <Link to="/registration" className="btn btn-primary apply-cta-btn">
                                        Register Here <ArrowRight size={20} />
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Program Details Grid - Matching Skills Layout */}
                    <div className="program-details-block" style={{ marginTop: '5rem', width: '100%', paddingBottom: '3rem' }}>
                        <div className="container" style={{ maxWidth: '1200px' }}>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(3, 1fr)',
                                gap: '2rem',
                                alignItems: 'stretch'
                            }}>
                                {/* Card 1 */}
                                <div style={{
                                    backgroundColor: '#fff',
                                    padding: '2.5rem',
                                    borderRadius: 'var(--radius-lg)',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    height: '100%'
                                }}>
                                    <h3 style={{
                                        color: 'var(--color-primary)',
                                        fontSize: '1.5rem',
                                        marginBottom: '1.5rem',
                                        fontFamily: 'Playfair Display, serif',
                                        fontWeight: '700',
                                        borderBottom: '2px solid var(--color-secondary)',
                                        paddingBottom: '0.5rem',
                                        display: 'inline-block',
                                        width: '100%'
                                    }}>Core Programs</h3>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, width: '100%' }}>
                                        {['Vocational and livelihood skills', 'Entrepreneurship training', 'Digital literacy', 'Financial planning'].map((item, i) => (
                                            <li key={i} style={{ padding: '0.55rem 0', color: 'var(--color-text)', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                                                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0, opacity: 0.75 }} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Card 2 */}
                                <div style={{
                                    backgroundColor: '#fff',
                                    padding: '2.5rem',
                                    borderRadius: 'var(--radius-lg)',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    height: '100%'
                                }}>
                                    <h3 style={{
                                        color: 'var(--color-primary)',
                                        fontSize: '1.5rem',
                                        marginBottom: '1.5rem',
                                        fontFamily: 'Playfair Display, serif',
                                        fontWeight: '700',
                                        borderBottom: '2px solid var(--color-secondary)',
                                        paddingBottom: '0.5rem',
                                        display: 'inline-block',
                                        width: '100%'
                                    }}>What You Learn</h3>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, width: '100%' }}>
                                        {['Job-ready & income skills', 'Confidence & leadership', 'Sustainable livelihood techniques'].map((item, i) => (
                                            <li key={i} style={{ padding: '0.55rem 0', color: 'var(--color-text)', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                                                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0, opacity: 0.75 }} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Card 3 */}
                                <div style={{
                                    backgroundColor: '#fff',
                                    padding: '2.5rem',
                                    borderRadius: 'var(--radius-lg)',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    height: '100%'
                                }}>
                                    <h3 style={{
                                        color: 'var(--color-primary)',
                                        fontSize: '1.5rem',
                                        marginBottom: '1.5rem',
                                        fontFamily: 'Playfair Display, serif',
                                        fontWeight: '700',
                                        borderBottom: '2px solid var(--color-secondary)',
                                        paddingBottom: '0.5rem',
                                        display: 'inline-block',
                                        width: '100%'
                                    }}>Benefits</h3>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, width: '100%' }}>
                                        {['Economic independence', 'Improved family well-being', 'Long-term careers'].map((item, i) => (
                                            <li key={i} style={{ padding: '0.55rem 0', color: 'var(--color-text)', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                                                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0, opacity: 0.75 }} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section >
        </div >
    );
};

export default WomenSkillDev;
