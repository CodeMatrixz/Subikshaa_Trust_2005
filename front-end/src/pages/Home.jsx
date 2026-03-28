import { useRef, useEffect } from 'react';
import { motion, useInView, useScroll } from 'framer-motion';
import { ArrowRight, Heart, Users, Globe, HeartPulse, Star, Calendar, Gift, Smile, Trophy } from 'lucide-react';
import Section from '../components/Section';
import SEO from '../components/SEO';
import '../styles/Home.css';
import MembershipForm from '../components/MembershipForm';
import TrustedPartners from '../components/TrustedPartners';
import Testimonials from './Testimonials';
import HomeVideo from '../assets/home_video.mp4';
import ScrollVideoSection from '../components/ScrollVideoSection';


const Home = () => {
    const videoRef = useRef(null);
    const containerRef = useRef(null);
    const isVideoInView = useInView(videoRef, { amount: 0.3 }); // Start playing when 30% visible

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax & Reveal: Driven by scroll progress



    useEffect(() => {
        if (videoRef.current) {
            if (isVideoInView) {
                videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
            } else {
                videoRef.current.pause();
            }
        }
    }, [isVideoInView]);

    return (
        <div className="home-page">
            <SEO
                title="Home"
                description="Subikshaa Trust is a non-profit organization dedicated to helping those in need through education, healthcare, and community support."
            />
            {/* Hero Section */}

            <section className="hero-section">
                <div className="container hero-container">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="hero-label">A Trust For Socio Economic Development</span>
                        <h1>Providing Happiness and Healing for Everyone.</h1>
                        <p>
                            We are dedicated to making a lasting impact through our charitable initiatives.
                            Join the movement and give a hand in our mission to bring hope and support to those in need.
                        </p>
                        <div className="hero-actions">
                            <a href="/donate" className="btn btn-primary">
                                Contribute <Heart size={18} />
                            </a>
                            <a href="/programs" className="btn btn-outline">
                                Our Programs <ArrowRight size={18} />
                            </a>
                        </div>

                    </motion.div>

                    <motion.div
                        className="hero-image"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Placeholder for Hero Image - Using a nice organic shape or grid */}
                        <div className="hero-image-grid">
                            <img src="/images/assets/unsplash_5.jpg" alt="Volunteers helping" className="hero-img-main" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Strip Section */}
            <div className="stats-strip">
                <div className="container stats-container-strip">
                    <div className="stat-box-strip">
                        <span className="stat-number-strip">
                            21y
                        </span>
                        <span className="stat-label-strip">Years Experience</span>
                    </div>
                    <div className="stat-box-strip">
                        <span className="stat-number-strip">
                            650+
                        </span>
                        <span className="stat-label-strip">Total Volunteers</span>
                    </div>
                    <div className="stat-box-strip">
                        <span className="stat-number-strip">
                            702+
                        </span>
                        <span className="stat-label-strip">Success Cases</span>
                    </div>
                    <div className="stat-box-strip">
                        <span className="stat-number-strip">
                            23k+
                        </span>
                        <span className="stat-label-strip">People Helped</span>
                    </div>
                </div>
            </div>

            {/* Scroll-Driven Video & Commitment Section */}

            <Section className="programs-preview">
                <motion.div
                    className="section-header text-center"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                >
                    <span className="sub-heading">Our Programs</span>
                    <h2>Working together for a better world.</h2>
                </motion.div>

                <div className="program-grid">
                    {[
                        {
                            title: "Healthy Food",
                            image: "/images/assets/unsplash_5.jpg",
                            desc: "Providing nutritious meals to communities in need."
                        },
                        {
                            title: "Education",
                            image: "/images/assets/unsplash_7.jpg",
                            desc: "Building schools and supporting student growth."
                        },
                        {
                            title: "Healthcare Access",
                            image: "/images/assets/unsplash_71.jpg",
                            desc: "Providing medical checkups and essential healthcare."
                        },
                    ].map((program, index) => (
                        <motion.div
                            key={index}
                            className="program-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                delay: index * 0.2,
                                duration: 0.8,
                                ease: [0.33, 1, 0.68, 1]
                            }}
                        >
                            <div className="program-bg" style={{ backgroundImage: `url(${program.image})` }}></div>
                            <div className="program-overlay"></div>
                            <div className="program-content">
                                <h3>{program.title}</h3>
                                <p>{program.desc}</p>
                                <a href="/programs" className="learn-more">Know more <ArrowRight size={16} /></a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Scroll-Driven Video & Commitment Section */}
            <ScrollVideoSection />

            {/* Trusted Partners Section */}
            <TrustedPartners />

            {/* Success Stories Preview */}
            {/* Impact Stories Section - Tata Trusts Style */}
            <Section className="impact-stories-section">
                <motion.div
                    className="section-header text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="sub-heading">Real Stories of Change</span>
                    <h2>Impact Stories</h2>
                </motion.div>

                <div className="impact-stories-grid">
                    {[
                        {
                            category: "Healthcare",
                            title: "Bridging the Gap in Healthcare",
                            excerpt: "In Battigudem, where healthcare once felt out of reach, a mobile clinic became the bridge — connecting a young boy and his community to care, diagnosis and hope.",
                            image: "/images/assets/unsplash_117.jpg"
                        },
                        {
                            category: "Education",
                            title: "The holiest offering: How Vanageri made education its truest worship",
                            excerpt: "Discover how a small village transformed its future by prioritizing education above all else, creating a legacy of learning for generations to come.",
                            image: "/images/assets/unsplash_118.jpg"
                        },
                        {
                            category: "Livelihood",
                            title: "Women leading Regenerative Tourism",
                            excerpt: "Discover how the community-led tourism initiative is empowering rural women, reshaping travel, and protecting fragile ecosystems.",
                            image: "/images/assets/unsplash_119.jpg"
                        },
                        {
                            category: "WaSH",
                            title: "Sanitation: Myths to Meaningful Change",
                            excerpt: "Breaking taboos and building sanitation facilities has revolutionized hygiene standards and health outcomes in remote rural districts.",
                            image: "/images/assets/unsplash_120.jpg"
                        }
                    ].map((story, index) => (
                        <motion.div
                            key={index}
                            className="impact-story-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <div className="story-img-container">
                                <img src={story.image} alt={story.title} />
                                <span className="story-category">{story.category}</span>
                            </div>
                            <div className="story-content">
                                <h3>{story.title}</h3>
                                <p>{story.excerpt}</p>
                                <a href="/impact" className="read-story-link">Read more <ArrowRight size={16} /></a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Horizons / Digital Magazine Section - Tata Trusts Style */}
            <Section className="horizons-section">
                <div className="horizons-wrapper">
                    <motion.div
                        className="horizons-cover-container"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="horizons-cover">
                            {/* Abstract/Professional Cover Image */}
                            <img src="/images/assets/unsplash_121.jpg" alt="Horizons Magazine Cover" />
                            <div className="cover-badge">DEC 2025</div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="horizons-content"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="horizons-label">Enriching the discourse on development</span>
                        <h2>Subikshaa Trust Horizons</h2>
                        <p className="horizons-desc">
                            Dive into our flagship publication featuring expert insights, field stories, and deep analysis of our development challenges.
                        </p>

                        <div className="horizons-articles">
                            <a href="/horizons" className="article-item">
                                <span className="article-number">01</span>
                                <div className="article-info">
                                    <h4>Climate Resilience & Adaptation</h4>
                                    <span>Environment & Strategy</span>
                                </div>
                                <ArrowRight size={20} className="article-arrow" />
                            </a>
                            <a href="/horizons" className="article-item">
                                <span className="article-number">02</span>
                                <div className="article-info">
                                    <h4>Digital Health for All</h4>
                                    <span>Technology & Innovation</span>
                                </div>
                                <ArrowRight size={20} className="article-arrow" />
                            </a>
                        </div>

                        <a href="/horizons" className="btn btn-primary btn-horizons">
                            Read Full Issue <ArrowRight size={18} />
                        </a>
                    </motion.div>
                </div>

            </Section>

            {/* Celebrations Preview Section */}
            <Section className="celebrations-home-section" style={{ background: 'var(--surface-sunken)', position: 'relative', overflow: 'hidden', zIndex: 10 }}>
                <div className="container">
                    <div className="row align-items-center" style={{ display: 'flex', flexDirection: 'row', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>
                        <motion.div
                            className="celebrations-text"
                            style={{ flex: 1, minWidth: '300px' }}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="sub-heading"><Star size={16} style={{ marginBottom: '-2px', marginRight: '6px' }} /> Festivals & Traditions</span>
                            <h2 style={{ marginBottom: '1.5rem', fontSize: '3.5rem', lineHeight: '1.2' }}>Celebrating Cultures & Lives</h2>
                            <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: 'var(--text-light)' }}>
                                We honor the vibrant tapestry of cultures and traditions that bring our community together.
                                From festive celebrations to cultural gatherings, every moment is a testament to the diversity and joy we share.
                            </p>

                            <div className="celebration-highlights" style={{ display: 'flex', gap: '2rem', marginBottom: '2.5rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>25+</h3>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Festivals Celebrated</span>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>15+</h3>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Cultures United</span>
                                </div>
                            </div>

                            <a href="/celebrations" className="btn btn-primary">
                                View All Celebrations <ArrowRight size={18} />
                            </a>
                        </motion.div>

                        <motion.div
                            className="celebrations-image-wrapper"
                            style={{ flex: 1, minWidth: '300px', position: 'relative', height: '500px' }}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {/* Main Large Image */}
                            <img
                                src="/images/assets/unsplash_71.jpg"
                                alt="Celebration Main"
                                style={{
                                    width: '70%',
                                    height: '350px',
                                    objectFit: 'cover',
                                    borderRadius: '24px',
                                    position: 'absolute',
                                    top: '0',
                                    right: '0',
                                    boxShadow: 'var(--shadow-lg)',
                                    zIndex: 1
                                }}
                            />

                            {/* Secondary Image Overlapping */}
                            <img
                                src="/images/assets/unsplash_70.jpg"
                                alt="Celebration Secondary"
                                style={{
                                    width: '55%',
                                    height: '280px',
                                    objectFit: 'cover',
                                    borderRadius: '24px',
                                    position: 'absolute',
                                    bottom: '20px',
                                    left: '0',
                                    boxShadow: 'var(--shadow-xl)',
                                    border: '8px solid var(--color-bg)',
                                    zIndex: 2
                                }}
                            />

                            {/* Floating Professional Icon Card 1 */}
                            <motion.div
                                style={{
                                    position: 'absolute',
                                    top: '40px',
                                    left: '10px',
                                    background: 'var(--color-white)',
                                    padding: '1rem',
                                    borderRadius: '16px',
                                    boxShadow: 'var(--shadow-lg)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.8rem',
                                    zIndex: 3
                                }}
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div style={{ background: 'var(--color-primary)', padding: '0.5rem', borderRadius: '50%', color: 'white' }}>
                                    <Gift size={20} />
                                </div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>Joy of Giving</span>
                                    <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-light)' }}>Spreading Smiles</span>
                                </div>
                            </motion.div>

                            {/* Floating Professional Icon Card 2 */}
                            <motion.div
                                style={{
                                    position: 'absolute',
                                    bottom: '80px',
                                    right: '-20px',
                                    background: 'var(--color-white)',
                                    padding: '1rem',
                                    borderRadius: '16px',
                                    boxShadow: 'var(--shadow-lg)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.8rem',
                                    zIndex: 3
                                }}
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                <div style={{ background: 'var(--color-primary)', padding: '0.5rem', borderRadius: '50%', color: 'white' }}>
                                    <Smile size={20} />
                                </div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>Community</span>
                                    <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-light)' }}>Togetherness</span>
                                </div>
                            </motion.div>

                        </motion.div>
                    </div>
                </div>


            </Section>



            {/* Awards Highlight Section */}
            <Section className="awards-home-section" style={{ background: 'var(--color-primary)', color: 'white', padding: '5rem 0', position: 'relative', zIndex: 10 }}>
                <div className="container">
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '4rem',
                        flexWrap: 'wrap'
                    }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{ flex: 1, minWidth: '300px' }}
                        >
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.8rem',
                                background: 'rgba(255,255,255,0.1)',
                                padding: '0.5rem 1rem',
                                borderRadius: '50px',
                                marginBottom: '1.5rem',
                                border: '1px solid rgba(255,255,255,0.2)'
                            }}>
                                <Trophy size={18} color="#FFD700" />
                                <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#FFD700' }}>Excellence in Service</span>
                            </div>
                            <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem', color: 'white' }}>Best Skill Initiative 2024</h2>
                            <p style={{ fontSize: '1.1rem', opacity: 0.9, lineHeight: '1.6', marginBottom: '2rem', maxWidth: '500px' }}>
                                We are honored to be recognized by the <strong>National Social Welfare Board</strong> for our impactful rural women skill development program, creating sustainable livelihoods for over 500 women.
                            </p>
                            <a href="/awards" className="btn" style={{
                                background: 'white',
                                color: 'var(--color-primary)',
                                fontWeight: 'bold',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '1rem 2rem',
                                borderRadius: '50px'
                            }}>
                                View All Awards <ArrowRight size={18} />
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{ flex: 1, minWidth: '300px', display: 'flex', justifyContent: 'center' }}
                        >
                            <div style={{
                                position: 'relative',
                                background: 'rgba(255,255,255,0.05)',
                                padding: '3rem',
                                borderRadius: '50%',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                <div style={{
                                    background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                                    borderRadius: '50%',
                                    width: '200px',
                                    height: '200px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
                                }}>
                                    <Trophy size={80} color="white" />
                                </div>
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    style={{
                                        position: 'absolute',
                                        top: '0',
                                        left: '0',
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: '50%',
                                        border: '2px dashed rgba(255,255,255,0.2)'
                                    }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* Testimonials Section */}
            <Testimonials />

            {/* Community Membership Section */}
            <MembershipForm />

            {/* FAQ CTA Section */}
            <Section className="faq-cta-section">
                <motion.div
                    className="faq-cta-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="faq-cta-content">
                        <span className="faq-badge">Got Questions?</span>
                        <h3>Frequently Asked Questions</h3>
                        <p>Find answers to common questions about our programs, donations, and how you can help make a difference.</p>
                        <a href="/faq" className="btn btn-primary">
                            View All FAQs <ArrowRight size={18} />
                        </a>
                    </div>
                </motion.div>
            </Section>

            {/* Main CTA Section (Moved from Footer) */}
            <div className="footer-cta-wrapper" style={{ marginTop: '0', marginBottom: '0', position: 'relative', zIndex: 10, backgroundColor: 'var(--color-bg)' }}>
                <div className="container">
                    <div className="footer-cta-content">
                        <div className="footer-cta-text">
                            <h2>Ready to Make an Impact?</h2>
                            <p>Join our community of changemakers and help us build a better tomorrow.</p>
                        </div>
                        <a href="/volunteer" className="btn btn-primary footer-cta-btn">
                            Join as Volunteer <ArrowRight size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;
