import React from 'react';
import Section from '../components/Section';
import SEO from '../components/SEO';
import StaggeredHeading from '../components/StaggeredHeading';
import ApplicationForm from '../components/ApplicationForm';
import { motion } from 'framer-motion';

const Registration = () => {
    return (
        <div className="registration-page">
            <SEO
                title="Register for Training"
                description="Register for our women skill development training programs."
            />

            <div className="page-header" style={{ padding: '80px 0 60px', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
                <div className="container">
                    <span className="sub-heading">Join Us</span>
                    <StaggeredHeading text="Program Registration" />
                    <p>Start your journey towards skill development and empowerment.</p>
                </div>
            </div>

            <Section className="registration-content">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ maxWidth: '800px', margin: '0 auto' }}
                    >
                        <ApplicationForm />
                    </motion.div>
                </div>
            </Section>
        </div>
    );
};

export default Registration;
