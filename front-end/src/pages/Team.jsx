import React, { useState } from 'react';
import Section from '../components/Section';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Team.css';

const Team = () => {
    const team = [
    {
        name: "Meena G",
        role: "Founder & Managing Trustee",
        image: "https://ui-avatars.com/api/?name=Sarah+Johnson&size=300&background=1a237e&color=fff&bold=true",
        bio: "Meena G is the Founder and Managing Trustee of the Trust, providing strategic direction and overall governance. With an academic background in History and Community Development, she leads the organization’s mission to promote social equity through sustainable and community-driven initiatives."
    },
    {
        name: "Karuna Sagar",
        role: "Trustee – Finance & Compliance",
        image: "https://ui-avatars.com/api/?name=Michael+Chen&size=300&background=00bcd4&color=fff&bold=true",
        bio: "Karuna Sagar serves as Trustee for Finance and Compliance, responsible for financial oversight, transparency and regulatory adherence. He ensures prudent resource management and accountability in alignment with statutory requirements and the Trust’s objectives."
    },
    {
        name: "Bharathi",
        role: "Trustee – Programs & Implementation",
        image: "https://ui-avatars.com/api/?name=Emily+Rodriguez&size=300&background=ff6f00&color=fff&bold=true",
        bio: "Bharathi serves as Trustee for Programs and Implementation, overseeing the planning and execution of the Trust’s initiatives. With a background in healthcare, she ensures that all programs are delivered effectively, with a strong focus on community welfare and impact."
    },
    {
        name: "Anbazhagan",
        role: "Legal Advisor",
        image: "https://ui-avatars.com/api/?name=David+Kumar&size=300&background=4caf50&color=fff&bold=true",
        bio: "Anbazhagan acts as Legal Advisor to the Trust, providing guidance on legal, regulatory and governance matters. He supports the organization in maintaining compliance with applicable laws while advancing its commitment to social justice and public service."
    },
    {
        name: "Karthikeya",
        role: "Trustee – Community Outreach & Partnerships",
        image: "https://ui-avatars.com/api/?name=Sophia+Patel&size=300&background=9c27b0&color=fff&bold=true",
        bio: "Karthikeya serves as Trustee for Community Outreach and Partnerships, leading stakeholder engagement and collaborative initiatives. She works to strengthen networks and mobilize resources that enhance the Trust’s reach and effectiveness in serving communities."
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
