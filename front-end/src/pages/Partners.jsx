import React from 'react';
import Section from '../components/Section';
import { Handshake } from 'lucide-react';
import StaggeredHeading from '../components/StaggeredHeading';
import '../styles/Partners.css';

const Partners = () => {
    const partners = [
        "Global Aid Network",
        "Tech for Good",
        "Sustainable Earth",
        "Health & Hope Alliance",
        "Community First Foundation",
        "Unity International"
    ];

    return (
        <div className="partners-page">
            <div className="page-header partners-header">
                <div className="container">
                    <span className="sub-heading">Collaborations</span>
                    <StaggeredHeading text="Our Partners" />
                    <p>Working together with organizations that share our vision.</p>
                </div>
            </div>

            <Section className="partners-content text-center">
                <div className="partners-intro">
                    <Handshake size={48} className="intro-icon" />
                    <p>We are proud to partner with leading organizations to maximize our impact. Together, we can achieve more.</p>
                </div>

                <div className="partners-grid">
                    {partners.map((partner, i) => (
                        <div key={i} className="partner-logo-box">
                            <span>{partner}</span>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Partners;
