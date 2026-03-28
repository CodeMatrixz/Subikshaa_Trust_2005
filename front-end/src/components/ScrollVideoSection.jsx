import React, { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import '../styles/ScrollVideoSection.css';

const ScrollVideoSection = () => {
    const containerRef = useRef(null);
    const videoRef = useRef(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    // Get scroll progress within this section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Transformations for parallax effect
    // Transformations for parallax effect
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
    // Removed scale and opacity for a clean, fully visible video frame



    useEffect(() => {
        const videoElement = videoRef.current;

        const handleCanPlay = () => {
            setIsVideoLoaded(true);
            // Start video when ready
            videoElement.play().catch(e => console.log("Autoplay prevented:", e));
        };

        if (videoElement) {
            if (videoElement.readyState >= 3) {
                handleCanPlay();
            }
            videoElement.addEventListener('canplay', handleCanPlay);

            // Set video properties for smooth playback
            videoElement.muted = true;
            videoElement.loop = true;
            videoElement.playsInline = true;
            videoElement.preload = "auto";

            return () => {
                videoElement.removeEventListener('canplay', handleCanPlay);
            };
        }
    }, []);

    return (
        <section ref={containerRef} className="video-scroll-section">
            {/* Fixed Video Container */}
            <div className="video-container">
                <motion.div
                    className="video-wrapper"
                    style={{ y }} /* Keep slight parallax y if desired, or remove. Let's keep y for sticky feel but remove scale/opacity */
                >
                    <video
                        ref={videoRef}
                        className={`background-video ${isVideoLoaded ? 'loaded' : ''}`}
                        muted
                        loop
                        playsInline
                        preload="auto"
                        // Using the working CDN link from Home.jsx
                        src="https://cdn.coverr.co/videos/coverr-volunteers-packing-food-in-boxes-5322/1080p.mp4"
                    >
                    </video>
                </motion.div>
            </div>

            {/* Scrolling Content - REMOVED as per user request */}
            {/* The container height (300vh) still creates the scroll space for the sticky video */}
        </section>
    );
};

export default ScrollVideoSection;
