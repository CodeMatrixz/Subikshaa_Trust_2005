import React, { useState } from 'react';
import Section from '../components/Section';
import { Quote, ChevronLeft, ChevronRight, Star, HeartHandshake } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import '../styles/Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            text: "Volunteering with Subikshaa Trust has been a life-changing experience. Seeing the smiles on the children's faces when we delivered the school supplies was absolutely priceless.",
            author: "Kavitha",
            role: "Community Volunteer",
            image: "/images/assets/unsplash_128.jpg",
            rating: 5
        },
        {
            text: "I've been donating for three years, and I appreciate the transparency. I know exactly how my contributions are helping provide clean water to remote villages.",
            author: "Sumathi",
            role: "Regular Donor",
            image: "/images/assets/unsplash_129.jpg",
            rating: 5
        },
        {
            text: "The medical camp organized by the team saved my husband's life. We are forever grateful for the compassionate care and support we received during our hardest times.",
            author: "Prema",
            role: "Beneficiary",
            image: "/images/assets/unsplash_130.jpg",
            rating: 5
        },
        {
            text: "Subikshaa Trust's scholarship program allowed me to pursue my dream of becoming a nurse. I am now able to give back to my community and help others.",
            author: "Amirtha",
            role: "Scholarship Recipient",
            image: "/images/assets/unsplash_131.jpg",
            rating: 5
        },
        {
            text: "As a corporate partner, we are proud to support such an impactful organization. Their dedication to sustainable development matches our company values perfectly.",
            author: "Karthikeyan",
            role: "Corporate Partner",
            image: "/images/assets/unsplash_132.jpg",
            rating: 5
        }
    ];

    const containerRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const [currentIndex, setCurrentIndex] = useState(0);

    // Map scroll progress to index
    // We want the changes to happen while the element is in the viewport (approx 0.2 to 0.8 range)
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // We divide the scroll range into segments for each testimonial
        const numberOfSlides = testimonials.length;
        const segmentSize = 0.6 / numberOfSlides; // Use middle 60% of screen for transitions
        const startOffset = 0.2; // Start changing at 20% visibility

        // Calculate index based on progress
        const rawIndex = (latest - startOffset) / segmentSize;
        const index = Math.min(Math.max(Math.floor(rawIndex), 0), numberOfSlides - 1);

        if (index !== currentIndex) {
            setCurrentIndex(index);
        }
    });

    return (
        <section ref={containerRef} className="testimonials-section-scroll">
            <div className="testimonials-sticky-wrapper">
                <div className="container">
                    <motion.div
                        className="testimonials-layout"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Column 1: Header */}
                        <div className="t-col-header">
                            <div className="quote-mark-large icon-holder">
                                <HeartHandshake size={80} strokeWidth={1} />
                            </div>
                            <h2 className="t-heading-bold">Voices<br /><span className="t-heading-light">of</span><br /><span className="t-heading-light">Impact</span></h2>
                        </div>

                        {/* Column 2: Navigation */}
                        <div className="t-col-nav">
                            <div className="t-nav-list">
                                {testimonials.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`t-nav-item ${index === currentIndex ? 'active' : ''}`}
                                    >
                                        <span className="t-nav-number">0{index + 1}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="t-nav-divider"></div>
                        </div>

                        {/* Column 3: Content */}
                        <div className="t-col-content">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="t-content-card"
                                >
                                    <div className="t-author-image-wrapper">
                                        <img
                                            src={testimonials[currentIndex].image}
                                            alt={testimonials[currentIndex].author}
                                            className="t-author-img"
                                        />
                                    </div>
                                    <div className="t-text-content">
                                        <h3 className="t-author-name">{testimonials[currentIndex].author}</h3>
                                        <p className="t-author-role">{testimonials[currentIndex].role}</p>
                                        <p className="t-quote-text">"{testimonials[currentIndex].text}"</p>
                                        <div className="t-rating">
                                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                                <Star key={i} size={16} fill="currentColor" className="star-icon" />
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
