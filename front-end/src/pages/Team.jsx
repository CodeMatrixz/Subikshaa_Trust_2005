import React, { useState } from 'react';
import Section from '../components/Section';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Team.css';

const Team = () => {
    const team = [
        {
            name: "Sarah Johnson",
            role: "Executive Director",
            image: "https://ui-avatars.com/api/?name=Sarah+Johnson&size=300&background=1a237e&color=fff&bold=true",
            bio: "Sarah has dedicated her life to social justice and community development. Under her leadership, Subikshaa Trust has expanded its reach to over 50 underprivileged communities."
        },
        {
            name: "Michael Chen",
            role: "Head of Operations",
            image: "https://ui-avatars.com/api/?name=Michael+Chen&size=300&background=00bcd4&color=fff&bold=true",
            bio: "With a background in humanitarian logistics, Michael ensures that aid reaches those who need it most efficiently and transparently."
        },
        {
            name: "Emily Rodriguez",
            role: "Volunteer Coordinator",
            image: "https://ui-avatars.com/api/?name=Emily+Rodriguez&size=300&background=ff6f00&color=fff&bold=true",
            bio: "Emily's passion for connecting people drives our volunteer programs. She mentors hundreds of volunteers to create lasting impact in local neighborhoods."
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % team.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + team.length) % team.length);
    };



    return (
        <div className="team-page">
            <Section className="team-carousel-section">
                <motion.div
                    className="container text-center mb-5"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="section-title" style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', color: 'var(--color-primary)' }}>Meet Our Team</h1>
                    <div className="title-divider" style={{ width: '60px', height: '4px', background: 'var(--color-primary)', margin: '0 auto 1.5rem', borderRadius: '2px', opacity: '0.8' }}></div>
                    <p className="section-subtitle">Experienced professionals dedicated to your success</p>
                </motion.div>

                <div className="carousel-container">
                    <div className="carousel-content">
                        <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous member">
                            <ChevronLeft size={24} />
                        </button>

                        <div className="member-display">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4 }}
                                    className="team-member-active"
                                >
                                    <div className="row align-items-center">
                                        <div className="col-image">
                                            <div className="team-image-wrapper-large">
                                                <img src={team[currentIndex].image} alt={team[currentIndex].name} className="team-image" />
                                            </div>
                                        </div>
                                        <div className="col-info">
                                            <h3>{team[currentIndex].name}</h3>
                                            <p className="team-role">{team[currentIndex].role}</p>
                                            <p className="team-bio">{team[currentIndex].bio}</p>

                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <button className="carousel-btn next" onClick={nextSlide} aria-label="Next member">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Team;
