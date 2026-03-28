import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import SEO from '../components/SEO';
import { CheckCircle, BookOpen, Utensils, HeartPulse, Sprout, Baby, Heart, Globe, Venus } from 'lucide-react';
import '../styles/Programs.css';
import childCareImg from '../assets/child_care.png';

const Programs = () => {
    const programs = [
        {
            id: 'women-skill',
            title: 'Women Skill Development – Women Empowerment NGO in India',
            icon: <Venus size={40} />,
            image: '/images/assets/unsplash_126.jpg',
            objectives: ['Vocational and livelihood skills', 'Entrepreneurship training', 'Digital literacy'],
            desc: 'As a women empowerment NGO in Tamil Nadu, we run structured skill development programs to help women achieve financial independence.'
        },
        {
            id: 'education',
            title: 'Education for All – Education NGO in India',
            icon: <BookOpen size={40} />,
            image: '/images/assets/unsplash_7.jpg',
            objectives: ['Build 50 new schools by 2026', 'Provide scholarships to 10,000 students', 'Teacher training workshops'],
            desc: 'As an education NGO in India and a child education NGO in Madurai, we focus on providing access to quality education for children from economically disadvantaged families.'
        },
        {
            id: 'food',
            title: 'Food Security – Fighting Hunger Across Tamil Nadu',
            icon: <Utensils size={40} />,
            image: '/images/assets/unsplash_5.jpg',
            objectives: ['Implement sustainable farming', 'Daily meal programs for schools', 'Emergency food relief'],
            desc: 'Our food security program addresses malnutrition by conducting food distribution drives, community kitchen support, and nutrition awareness initiatives.'
        },
        {
            id: 'health',
            title: 'Healthcare Access – Health NGO in Tamil Nadu',
            icon: <HeartPulse size={40} />,
            image: '/images/assets/unsplash_71.jpg',
            objectives: ['Mobile clinics in rural areas', 'Vaccination drives', 'Maternal health support'],
            desc: 'As a health NGO in Madurai and across Tamil Nadu, we conduct free medical camps, health check-ups, diagnostic screenings, and vaccination drives.'
        },
        {
            id: 'life-dev',
            title: 'Life Skills & Personal Development – Building Skills for a Better Future',
            icon: <Sprout size={40} />,
            image: '/images/assets/unsplash_127.jpg',
            objectives: ['Personal mentorship programs', 'Career guidance sessions', 'Psychological counseling'],
            desc: 'Our Life Skills & Personal Development Program focuses on personal growth, mental well-being, and employability skills, empowering youth and adults to become self-reliant contributors.'
        },
        {
            id: 'child-care',
            title: 'Child Care – Child Welfare NGO in India',
            icon: <Baby size={40} />,
            image: childCareImg,
            objectives: ['Safe daycare centers', 'Early childhood education', 'Nutritional support for toddlers'],
            desc: 'As a child welfare NGO in India, we provide holistic care, education, and nutrition to ensure the safety and development of vulnerable children.'
        },
        {
            id: 'old-age',
            title: 'Old Age People Care – Supporting Elderly with Dignity',
            icon: <Heart size={40} />,
            image: '/images/assets/unsplash_101.jpg',
            objectives: ['Assisted living facilities', 'Regular health checkups', 'Recreational activities'],
            desc: 'We actively support senior citizens through health assistance, emotional care, and community engagement, ensuring dignity and respect.'
        },
        {
            id: 'societal',
            title: 'Societal Development – Community-Focused NGO in Tamil Nadu',
            icon: <Globe size={40} />,
            image: '/images/assets/unsplash_119.jpg',
            objectives: ['Community infrastructure projects', 'Civic awareness campaigns', 'Cultural preservation initiatives'],
            desc: 'Addressing broader social challenges such as sanitation, clean water, and infrastructure, reinforcing our commitment to measurable social change.'
        },
    ];

    // Animation variants for smooth scroll reveals
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const imageVariants = {
        hidden: {
            opacity: 0,
            x: -50,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const imageVariantsReverse = {
        hidden: {
            opacity: 0,
            x: 50,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const contentVariants = {
        hidden: {
            opacity: 0,
            y: 30
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2
            }
        }
    };

    const objectiveVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.4 + (i * 0.1),
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    return (
        <div className="programs-page">
            <SEO
                title="Our Programs"
                description="Discover our key programs focusing on Education, Clean Water, and Healthcare Access to bring sustainable change."
            />
            <div className="page-header programs-header">
                <div className="container">
                    <motion.span
                        className="sub-heading"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        What We Do
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Our Programs
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Comprehensive solutions designed to tackle the root causes of poverty and inequality.
                    </motion.p>
                </div>
            </div>

            <Section className="programs-list">
                {programs.map((prog, index) => (
                    <motion.div
                        key={prog.id}
                        className={`program-row ${index % 2 !== 0 ? 'reverse' : ''}`}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        <motion.div
                            className="program-media"
                            variants={index % 2 !== 0 ? imageVariantsReverse : imageVariants}
                        >
                            <img src={prog.image} alt={prog.title} />
                            <div className="prog-icon-overlay">{prog.icon}</div>
                        </motion.div>
                        <motion.div
                            className="program-info"
                            variants={contentVariants}
                        >
                            <h2>{prog.title}</h2>
                            <p className="prog-desc">{prog.desc}</p>
                            <div className="prog-objectives">
                                <h4>Key Objectives:</h4>
                                <ul>
                                    {prog.objectives.map((obj, i) => (
                                        <motion.li
                                            key={i}
                                            custom={i}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            variants={objectiveVariants}
                                        >
                                            <CheckCircle size={16} className="text-primary" /> {obj}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                            {prog.id === 'women-skill' ? (
                                <Link to="/programs/women-skill-dev">
                                    <motion.button
                                        className="btn btn-outline mt-3"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        View Details
                                    </motion.button>
                                </Link>
                            ) : (
                                <Link to={`/programs/${prog.id}`}>
                                    <motion.button
                                        className="btn btn-outline mt-3"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        View Details
                                    </motion.button>
                                </Link>
                            )}
                        </motion.div>
                    </motion.div>
                ))}
            </Section>
        </div>
    );
};

export default Programs;
