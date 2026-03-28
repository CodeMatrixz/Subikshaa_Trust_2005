import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import '../styles/VoicesStack.css';

const CardStack = ({ items }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Smooth out the scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 20
    });

    return (
        <div className="voices-section" ref={containerRef}>
            <div className="voices-sticky-container">
                <header className="voices-header">
                    <motion.span
                        className="sub-heading"
                        style={{ color: 'var(--color-primary)', display: 'block', marginBottom: '0.5rem' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Community Voices
                    </motion.span>
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Voices of Joy
                    </motion.h2>
                </header>

                <div className="voices-scene">
                    <div className="voices-stack">
                        {items.map((story, idx) => {
                            // Logic similar to the user's snippet
                            const stepProgress = idx / items.length;
                            const nextStepProgress = (idx + 1) / items.length;

                            // Alternating directions
                            const isEven = idx % 2 === 0;
                            const xDirection = isEven ? -1000 : 1000;
                            const rotateDirection = isEven ? -45 : 45;

                            // Animations based on scroll progress
                            // 1. Move X out
                            const x = useTransform(smoothProgress, [stepProgress, nextStepProgress], [0, xDirection]);
                            // 2. Rotate Y
                            const rotateY = useTransform(smoothProgress, [stepProgress, nextStepProgress], [0, rotateDirection]);
                            // 3. Fade out
                            const opacity = useTransform(smoothProgress, [stepProgress, nextStepProgress - 0.1, nextStepProgress], [1, 1, 0]);

                            // 4. Scale and Z-depth for cards underneath
                            // This creates the "stack" effect where the next card rises up
                            const scale = useTransform(smoothProgress, [stepProgress - 0.25, stepProgress], [0.9, 1]);
                            const z = useTransform(smoothProgress, [stepProgress - 0.25, stepProgress], [-200, 0]);

                            return (
                                <motion.div
                                    key={story.id}
                                    className="voices-card-layer"
                                    style={{
                                        // The last card shouldn't fly away, it should stay as the final reveal?
                                        // Or if we want all to fly away, keep logic. 
                                        // User's snippet: `x: idx === steps.length - 1 ? 0 : x`
                                        // Keep last card fixed:
                                        x: idx === items.length - 1 ? 0 : x,
                                        rotateY: idx === items.length - 1 ? 0 : rotateY,
                                        opacity,
                                        scale: idx === 0 ? 1 : scale,
                                        z: idx === 0 ? 0 : z,
                                        zIndex: items.length - idx
                                    }}
                                >
                                    <div className="voices-card-inner">
                                        <div className="voices-image-container">
                                            <img src={story.image} alt={story.name} className="voices-img" />
                                        </div>
                                        <div className="voices-content">
                                            <h3 className="voices-name">{story.name}</h3>
                                            <div className="voices-role">{story.role} • {story.festival}</div>
                                            <p className="voices-quote">{story.quote}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardStack;
