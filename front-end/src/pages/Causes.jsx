import React from 'react';
import { motion } from 'framer-motion';
import StaggeredHeading from '../components/StaggeredHeading';
import { ArrowRight, Heart } from 'lucide-react';
import Section from '../components/Section';
import SEO from '../components/SEO';
import '../styles/Causes.css';

const causesData = [
    {
        id: 1,
        image: "/images/assets/unsplash_5.jpg",
        category: "Education",
        title: "Help Poor Children to Get Education",
        desc: "Provides books, uniforms, and school fees for children in underprivileged communities.",
        raised: 5000,
        goal: 10000
    },
    {
        id: 2,
        image: "/images/assets/unsplash_4.jpg",
        category: "Medical",
        title: "Help to Provide Medical Treatment",
        desc: "Supporting medical camps and surgeries for those who cannot afford healthcare.",
        raised: 7500,
        goal: 8000
    },
    {
        id: 3,
        image: "/images/assets/unsplash_9.jpg",
        category: "Food",
        title: "Healthy Food for Poor People",
        desc: "Daily nutritious meals for homeless and low-income families in our community.",
        raised: 2000,
        goal: 5000
    },
    {
        id: 4,
        image: "/images/assets/unsplash_6.jpg",
        category: "Water",
        title: "Clean Water for African Village",
        desc: "Installing boreholes and water filtration systems in drought-affected areas.",
        raised: 12000,
        goal: 15000
    },
    {
        id: 5,
        image: "/images/assets/unsplash_4.jpg",
        category: "Housing",
        title: "Shelter for Homeless Families",
        desc: "Building safe and durable homes for families displaced by natural disasters.",
        raised: 8500,
        goal: 20000
    },
    {
        id: 6,
        image: "/images/assets/unsplash_10.jpg",
        category: "Environment",
        title: "Tree Plantation for Green Earth",
        desc: "Planting trees to restore forests and combat climate change effects.",
        raised: 1500,
        goal: 3000
    }
];

const Causes = () => {
    return (
        <div className="causes-page">
            <SEO
                title="Our Causes"
                description="Explore the various causes we support, from clean water and education to food security, and contribute to make a difference."
            />
            <div className="page-header">
                <div className="container">
                    <span className="sub-heading">Our Causes</span>
                    <StaggeredHeading text="Latest Causes" />
                    <p>We have many causes that need your help. Choose a cause and contribute now.</p>
                </div>
            </div>

            <Section className="causes-list">
                <div className="causes-grid">
                    {causesData.map((cause, index) => {
                        const progress = (cause.raised / cause.goal) * 100;
                        return (
                            <motion.div
                                key={cause.id}
                                className="cause-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="cause-image-wrapper">
                                    <img src={cause.image} alt={cause.title} className="cause-image" />
                                    <span className="cause-category">{cause.category}</span>
                                </div>
                                <div className="cause-content">
                                    <h3>{cause.title}</h3>
                                    <p>{cause.desc}</p>

                                    <div className="cause-progress">
                                        <div className="progress-bar">
                                            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                                        </div>
                                        <div className="progress-stats">
                                            <span className="raised">Raised: ₹{cause.raised.toLocaleString('en-IN')}</span>
                                            <span className="goal">Goal: ₹{cause.goal.toLocaleString('en-IN')}</span>
                                        </div>
                                    </div>

                                    <a href="/donate" className="btn btn-outline btn-full">
                                        Contribute Now <Heart size={16} />
                                    </a>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>
        </div>
    );
};

export default Causes;
