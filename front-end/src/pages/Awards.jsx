import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import SEO from '../components/SEO';
import { Trophy, Star, Award, ArrowRight } from 'lucide-react';
// Reusing some styles or general styles
import '../styles/Events.css';

const Awards = () => {
    const awards = [
        {
            title: "Best Skill Initiative 2024",
            org: "National Social Welfare Board",
            desc: "Awarded for the most impactful rural women skill development program.",
            image: "/images/assets/unsplash_134.jpg"
        },
        {
            title: "Empowerment Champion",
            org: "Global Women's Alliance",
            desc: "Recognizing outstanding contribution to women's economic independence.",
            image: "/images/assets/unsplash_119.jpg"
        },
        {
            title: "Community Impact Award",
            org: "State Rural Development Ministry",
            desc: "For creating sustainable livelihood opportunities for over 500 women.",
            image: "/images/assets/unsplash_117.jpg"
        },
        {
            title: "Excellence in Education",
            org: "Education Trust of India",
            desc: "Honoring our commitment to providing quality vocational training.",
            image: "/images/assets/unsplash_118.jpg"
        },
        {
            title: "Humanitarian Excellence",
            org: "United Citizens Foundation",
            desc: "For unwavering dedication to serving underprivileged communities.",
            image: "/images/assets/unsplash_5.jpg"
        },
        {
            title: "Transparency Award 2023",
            org: "GuideStar India",
            desc: "Recognized for maintaining the highest standards of financial transparency.",
            image: "/images/assets/unsplash_7.jpg"
        },
        {
            title: "Green Initiative",
            org: "EcoWatch Global",
            desc: "For implementing sustainable practices in all our development centers.",
            image: "/images/assets/unsplash_120.jpg"
        },
        {
            title: "Youth Mobilization",
            org: "National Youth Corps",
            desc: "Excellence in engaging youth volunteers for social causes.",
            image: "/images/assets/unsplash_70.jpg"
        },
        {
            title: "Best NGO of the Year",
            org: "Social Watch Annual Awards",
            desc: "Overall excellence in social impact, governance, and reach.",
            image: "/images/assets/unsplash_71.jpg"
        }
    ];

    const achievementImages = [
        "/images/assets/unsplash_134.jpg", // Beautician
        "/images/assets/unsplash_135.jpg", // Doll making
        "/images/assets/unsplash_139.jpg", // Embroidery
        "/images/assets/unsplash_144.jpg", // Bridal Flower
        "/images/assets/unsplash_5.jpg",   // Group photo potentially
        "/images/assets/unsplash_7.jpg",    // Classroom
        "/images/assets/unsplash_10.jpg",
        "/images/assets/unsplash_50.jpg",
        "/images/assets/unsplash_60.jpg",
        "/images/assets/unsplash_75.jpg",
        "/images/assets/unsplash_80.jpg",
        "/images/assets/unsplash_95.jpg"
    ];

    return (
        <div className="awards-page">
            <SEO
                title="Awards & Recognition"
                description="Celebrating our achievements and the recognition we've received for our impact."
            />

            <div className="page-header" style={{
                background: 'linear-gradient(rgba(81, 39, 49, 0.8), rgba(81, 39, 49, 0.8)), url(/images/assets/unsplash_5.jpg) center/cover',
                height: '50vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textAlign: 'center'
            }}>
                <div className="container">
                    <motion.span
                        className="sub-heading"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ color: 'var(--color-accent-gold)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}
                    >
                        Hall of Fame
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ fontSize: '3.5rem', marginBottom: '1rem' }}
                    >
                        Awards & Recognition
                    </motion.h1>
                </div>
            </div>

            <Section className="awards-content">
                <div className="container">
                    {/* Awards List Text Section */}
                    <div className="section-header text-center" style={{ marginBottom: '4rem' }}>
                        <span className="sub-heading" style={{ color: 'var(--color-primary)' }}>Our Honors</span>
                        <h2>Celebrating Excellence</h2>
                        <p>We are humbled by the recognition we have received from esteemed organizations.</p>
                    </div>

                    <div className="awards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
                        {awards.map((award, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                style={{
                                    background: 'white',
                                    padding: '2.5rem',
                                    borderRadius: '16px',
                                    boxShadow: 'var(--shadow-md)',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    textAlign: 'center',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >

                                <div style={{
                                    width: '120px',
                                    height: '120px',
                                    margin: '0 auto 1.5rem',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                                    border: '3px solid white',
                                    outline: '2px solid var(--color-primary)'
                                }}>
                                    <img
                                        src={award.image}
                                        alt={award.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>{award.title}</h3>
                                <span style={{ display: 'block', fontSize: '0.9rem', color: '#b45309', fontWeight: '700', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{award.org}</span>
                                <p style={{ color: 'var(--text-light)', fontSize: '1rem', lineHeight: '1.6' }}>{award.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Achieved Images Gallery */}
                    <div className="achievements-gallery">
                        <div className="section-header text-center" style={{ marginBottom: '3rem' }}>
                            <span className="sub-heading" style={{ color: 'var(--color-primary)' }}>Moments of Pride</span>
                            <h2>Achievement Gallery</h2>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                            gap: '1.5rem',
                        }}>
                            {achievementImages.map((img, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    style={{
                                        height: '300px',
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        boxShadow: 'var(--shadow-md)'
                                    }}
                                >
                                    <img
                                        src={img}
                                        alt={`Achievement ${index + 1}`}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </Section>
        </div>
    );
};

export default Awards;
