import React, { useState } from 'react';
import Section from '../components/Section';
import SEO from '../components/SEO';
import StaggeredHeading from '../components/StaggeredHeading';
import '../styles/Gallery.css';
import { motion, useScroll } from 'framer-motion';
import { Stethoscope, GraduationCap, Utensils, TrendingUp, HeartHandshake, Heart, Shield } from 'lucide-react';

const Gallery = () => {

    const [activeFilter, setActiveFilter] = useState('All');
    const [lightboxIndex, setLightboxIndex] = useState(null);

    // Scroll-driven Text Reveal Effect
    const containerRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const [activeCause, setActiveCause] = useState(0);

    // Map scroll progress to active index
    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            // Map 0-1 to 0-(length-1)
            // We want the effect to happen mostly when the element is in the middle of the viewport
            // Let's adjust the range slightly so it cycles as it passes through
            const length = focusAreas.length;
            const index = Math.floor(latest * length * 1.5) - 2; // Offset to start slightly later

            // Clamp index
            const safeIndex = Math.max(0, Math.min(length - 1, index));
            setActiveCause(safeIndex);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);


    // ... (other albums remain same, I will use ReplaceChunk to avoid deleting them if possible, but the instruction asks for block replacement. 
    // Actually, the previous 'replace_file_content' was for the whole activeCause logic + albums. 
    // I should be careful not to delete albums if I can help it.
    // Let's target the specifc blocks: 
    // 1. The top state definitions.
    // 2. The JSX block.

    // REVISING PLAN: Usage of multi_replace_file_content is better here to avoid touching the 'albums' array which is large.

    // ... Switching tool ... (Wait, I am using replace_file_content in the tool call)
    // I will use replace_file_content ONLY for the top logic and then another for the JSX if needed, or multi_replace.
    // multi_replace is available.

    // Let's use multi_replace.

    // Chunk 1: Imports
    // Chunk 2: State/Logic top of component
    // Chunk 3: The JSX for the section

    // Wait, I can only use one tool. 'replace_file_content' is mostly for single blocks. 'multi_replace' is for multiple.
    // I will use multi_replace.

    // ...


    // Flattened Image Data
    const allImages = [
        { src: "/images/assets/unsplash_72.jpg", category: "Education" },
        { src: "/images/assets/unsplash_73.jpg", category: "Education" },
        { src: "/images/assets/unsplash_5.jpg", category: "Community" },
        { src: "/images/assets/unsplash_7.jpg", category: "Education" },
        { src: "/images/assets/unsplash_6.jpg", category: "Water" },
        { src: "/images/assets/unsplash_41.jpg", category: "Water" },
        { src: "/images/assets/unsplash_74.jpg", category: "Water" },
        { src: "/images/assets/unsplash_75.jpg", category: "Community" },
        { src: "/images/assets/unsplash_4.jpg", category: "Medical" },
        { src: "/images/assets/unsplash_10.jpg", category: "Community" },
        { src: "/images/assets/unsplash_9.jpg", category: "Medical" },
        { src: "/images/assets/unsplash_76.jpg", category: "Medical" },
        { src: "/images/assets/unsplash_77.jpg", category: "Medical" },
        { src: "/images/assets/unsplash_78.jpg", category: "Environment" },
        { src: "/images/assets/unsplash_79.jpg", category: "Environment" },
        { src: "/images/assets/unsplash_80.jpg", category: "Environment" },
        { src: "/images/assets/unsplash_81.jpg", category: "Animals" },
        { src: "/images/assets/unsplash_82.jpg", category: "Animals" },
        { src: "/images/assets/unsplash_83.jpg", category: "Animals" }
    ];

    const categories = ["All", "Education", "Water", "Community", "Medical", "Environment", "Animals"];

    const focusAreas = [
        { title: "Medical Aid", icon: <Stethoscope size={32} />, imgUrl: "/images/assets/unsplash_84.jpg" },
        { title: "Education Aid", icon: <GraduationCap size={32} />, imgUrl: "/images/assets/unsplash_85.jpg" },
        { title: "Food Support", icon: <Utensils size={32} />, imgUrl: "/images/assets/unsplash_86.jpg" },
        { title: "Skill Development", icon: <TrendingUp size={32} />, imgUrl: "/images/assets/unsplash_87.jpg" },
        { title: "Support Poor People", icon: <HeartHandshake size={32} />, imgUrl: "/images/assets/unsplash_88.jpg" },
        { title: "Elderly Care", icon: <Heart size={32} />, imgUrl: "/images/assets/unsplash_89.jpg" },
        { title: "Support Military Families", icon: <Shield size={32} />, imgUrl: "/images/assets/unsplash_90.jpg" }
    ];

    // Filter Logic
    const filteredImages = activeFilter === 'All'
        ? allImages
        : allImages.filter(img => img.category === activeFilter);

    // Immersive Lightbox Logic
    const openLightbox = (index) => {
        setLightboxIndex(index);
    };

    const closeLightbox = () => {
        setLightboxIndex(null);
    };

    const nextImage = (e) => {
        e?.stopPropagation();
        if (lightboxIndex !== null) {
            setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
        }
    };

    const prevImage = (e) => {
        e?.stopPropagation();
        if (lightboxIndex !== null) {
            setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
        }
    };

    // Keyboard support
    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (lightboxIndex === null) return;

            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxIndex, filteredImages]);

    return (
        <div className="gallery-page">
            <SEO
                title="Photo Gallery"
                description="Explore our visual journey through photography, showcasing our impact and the communities we serve."
            />

            <div className="page-header gallery-header">
                <div className="container">
                    <span className="sub-heading">Gallery</span>
                    <StaggeredHeading text="Stories of Change" />
                    <p>Our gallery reflects the real work and measurable impact of a non-profit organisation in India committed to full transparency.</p>
                </div>
            </div>

            <Section className="gallery-section">
                <div className="container">

                    {/* Filter Bar */}
                    <div className="gallery-filters">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                                onClick={() => setActiveFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Unified Image Grid */}
                    <motion.div layout className="images-grid">
                        {filteredImages.map((img, i) => (
                            <motion.div
                                layout
                                key={i}
                                className="gallery-item"
                                onClick={() => openLightbox(i)}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4 }}
                            >
                                <img src={img.src} alt={`${img.category} ${i + 1}`} />
                                <div className="item-overlay">
                                    <span className="cat-badge">{img.category}</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </Section>

            {/* Immersive Lightbox Overlay */}
            {lightboxIndex !== null && (
                <div className="lightbox" onClick={closeLightbox}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img
                            key={lightboxIndex}
                            src={filteredImages[lightboxIndex].src}
                            alt="Full Screen"
                            className="lightbox-img"
                        />
                        <button className="close-lightbox" onClick={closeLightbox} aria-label="Close">×</button>
                        <button className="nav-btn prev-btn" onClick={prevImage} aria-label="Previous">‹</button>
                        <button className="nav-btn next-btn" onClick={nextImage} aria-label="Next">›</button>
                        <div className="lightbox-count">
                            {lightboxIndex + 1} / {filteredImages.length}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
