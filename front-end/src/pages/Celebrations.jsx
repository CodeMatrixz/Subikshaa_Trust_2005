import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import SEO from '../components/SEO';
import { Calendar, MapPin, Star, Heart } from 'lucide-react';
import '../styles/Events.css';
import CardStack from '../components/CardStack';

const Celebrations = () => {
    // Festival Celebration Data with Gallery & Themes
    const celebrations = [
        {
            id: 1,
            title: "Diwali - Festival of Lights",
            date: "Nov 12, 2025",
            location: "Community Center",
            images: [
                "https://images.unsplash.com/photo-1605806616949-1e87b487fc2f?w=800&q=80",
                "https://images.unsplash.com/photo-1609519107664-4f3d9e4b1e8d?w=800&q=80",
                "https://images.unsplash.com/photo-1636197294777-e2c8f2d0b6b7?w=800&q=80"
            ],
            description: "Celebrated the triumph of light over darkness with traditional diyas, rangoli, and cultural performances. A beautiful evening of unity and joy.",
            status: "Completed",
            theme: {
                primary: "#FF6B35",
                secondary: "#FFD700",
                gradient: "linear-gradient(135deg, #FF6B35 0%, #FFD700 100%)",
                pattern: "✨"
            }
        },
        {
            id: 2,
            title: "Holi - Festival of Colors",
            date: "Mar 25, 2025",
            location: "Open Grounds",
            images: [
                "/images/assets/unsplash_70.jpg",
                "https://images.unsplash.com/photo-1551972251-12070d63502a?w=800&q=80",
                "https://images.unsplash.com/photo-1582659841945-5a4b6d0f6c0e?w=800&q=80"
            ],
            description: "A vibrant celebration of spring where our community came together to play with colors, dance, and share traditional sweets.",
            status: "Completed",
            theme: {
                primary: "#FF1493",
                secondary: "#FFD700",
                gradient: "linear-gradient(135deg, #FF1493 0%, #FFD700 50%, #00CED1 100%)",
                pattern: "🎨"
            }
        },
        {
            id: 3,
            title: "Pongal - Harvest Festival",
            date: "Jan 15, 2025",
            location: "Village Square",
            images: [
                "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?w=800&q=80",
                "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
                "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80"
            ],
            description: "Honored the harvest season with traditional Pongal cooking, kolam designs, and cultural dances celebrating abundance and gratitude.",
            status: "Completed",
            theme: {
                primary: "#8B4513",
                secondary: "#DAA520",
                gradient: "linear-gradient(135deg, #8B4513 0%, #DAA520 100%)",
                pattern: "🌾"
            }
        },
        {
            id: 4,
            title: "Eid-ul-Fitr Celebration",
            date: "Apr 10, 2026",
            location: "Community Hall",
            images: [
                "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
                "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=800&q=80",
                "https://images.unsplash.com/photo-1585128903994-0c8e6d6e3d8a?w=800&q=80"
            ],
            description: "Upcoming: Join us in celebrating the end of Ramadan with prayers, traditional feast, and community bonding.",
            status: "Upcoming",
            theme: {
                primary: "#50C878",
                secondary: "#FFD700",
                gradient: "linear-gradient(135deg, #50C878 0%, #FFD700 100%)",
                pattern: "☪️"
            }
        },
        {
            id: 5,
            title: "Christmas - Season of Giving",
            date: "Dec 25, 2026",
            location: "Hope Community Center",
            images: [
                "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&q=80",
                "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=800&q=80",
                "https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?w=800&q=80"
            ],
            description: "Celebrate the spirit of Christmas with carol singing, gift exchanges, and spreading joy to underprivileged children.",
            status: "Upcoming",
            theme: {
                primary: "#C41E3A",
                secondary: "#228B22",
                gradient: "linear-gradient(135deg, #C41E3A 0%, #228B22 100%)",
                pattern: "🎄"
            }
        },
        {
            id: 6,
            title: "Onam - Kerala's Grand Festival",
            date: "Sep 08, 2026",
            location: "Cultural Center",
            images: [
                "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
                "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80",
                "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80"
            ],
            description: "Experience the grandeur of Onam with traditional Pookalam, Onasadya feast, and Kathakali performances.",
            status: "Upcoming",
            theme: {
                primary: "#FFFFFF",
                secondary: "#FFD700",
                gradient: "linear-gradient(135deg, #FFFFFF 0%, #FFD700 50%, #006400 100%)",
                pattern: "🌺"
            }
        },
        {
            id: 7,
            title: "Navratri - Nine Nights of Dance",
            date: "Oct 03, 2026",
            location: "Festival Grounds",
            images: [
                "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80",
                "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?w=800&q=80",
                "https://images.unsplash.com/photo-1609519107664-4f3d9e4b1e8d?w=800&q=80"
            ],
            description: "Nine nights of traditional Garba and Dandiya, celebrating the divine feminine with music, dance, and colorful attire.",
            status: "Upcoming",
            theme: {
                primary: "#FF1493",
                secondary: "#9370DB",
                gradient: "linear-gradient(135deg, #FF1493 0%, #FF8C00 50%, #9370DB 100%)",
                pattern: "💃"
            }
        },
        {
            id: 8,
            title: "Cultural Unity Day",
            date: "Aug 15, 2026",
            location: "City Park",
            images: [
                "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
                "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",
                "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80"
            ],
            description: "A day celebrating all cultures coming together - showcasing diverse traditions, cuisines, music, and art from around the world.",
            status: "Upcoming",
            theme: {
                primary: "#FF6B6B",
                secondary: "#4ECDC4",
                gradient: "linear-gradient(135deg, #FF6B6B 0%, #FFD93D 25%, #6BCF7F 50%, #4ECDC4 75%, #9B59B6 100%)",
                pattern: "🌍"
            }
        }
    ];

    // Participant Stories Data
    const stories = [
        {
            id: 1,
            name: "Priya Sharma",
            role: "Volunteer",
            festival: "Diwali",
            quote: "Lighting 500+ diyas with the community was a magical experience. Seeing the smiles on everyone's faces made it truly special.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
        },
        {
            id: 2,
            name: "David Chen",
            role: "First-time Attendee",
            festival: "Holi",
            quote: "I've never experienced such joy and color! The way everyone came together, regardless of background, was inspiring.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
        },
        {
            id: 3,
            name: "Fatima Al-Sayed",
            role: "Community Member",
            festival: "Eid-ul-Fitr",
            quote: "Sharing our traditional feast with neighbors who had never tried it before was heart-warming. It felt like one big family.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
        },
        {
            id: 4,
            name: "Sarah Jenkins",
            role: "Donor",
            festival: "Christmas",
            quote: "Seeing the children’s eyes light up when they received gifts was the highlight of my year. True spirit of giving!",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80"
        },
        {
            id: 5,
            name: "Rajesh Patel",
            role: "Volunteer",
            festival: "Pongal",
            quote: "Cooking Pongal together in the open pots brought back so many childhood memories. A true taste of home.",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
        },
        {
            id: 6,
            name: "Elena Rodriguez",
            role: "Attendee",
            festival: "Cultural Unity Day",
            quote: "I loved learning about so many different traditions in one place. It truly felt like the world came together.",
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80"
        }
    ];

    // State for carousel
    const [currentImageIndex, setCurrentImageIndex] = React.useState({});

    return (
        <div className="celebrations-page">
            <style>
                {`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .marquee-container:hover .marquee-content {
                    animation-play-state: paused;
                }
                `}
            </style>
            <SEO
                title="Celebrations"
                description="Join us in celebrating our milestones, festivals, and the joy of giving."
            />

            <div className="page-header" style={{
                background: 'linear-gradient(rgba(81, 39, 49, 0.7), rgba(81, 39, 49, 0.7)), url(/images/assets/unsplash_80.jpg) center/cover',
                height: '60vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textAlign: 'center'
            }}>
                <div className="container">
                    <motion.span
                        className="sub-heading"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ color: 'var(--color-accent-gold)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}
                    >
                        Festivals & Traditions
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ fontSize: '3.5rem', marginBottom: '1rem' }}
                    >
                        Our Celebrations
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}
                    >
                        Honoring diverse cultures and traditions through vibrant festivals that unite our community in joy and harmony.
                    </motion.p>
                </div>
            </div>

            <Section className="celebrations-list">
                <div className="container">
                    <div className="section-header text-center" style={{ marginBottom: '4rem' }}>
                        <span className="sub-heading" style={{ color: 'var(--color-primary)' }}>Cultural Celebrations</span>
                        <h2>Festival Calendar</h2>
                    </div>

                    <div className="celebrations-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
                        {celebrations.map((item, index) => {
                            const currentIndex = currentImageIndex[item.id] || 0;

                            const nextImage = () => {
                                setCurrentImageIndex(prev => ({
                                    ...prev,
                                    [item.id]: (currentIndex + 1) % item.images.length
                                }));
                            };

                            const prevImage = () => {
                                setCurrentImageIndex(prev => ({
                                    ...prev,
                                    [item.id]: currentIndex === 0 ? item.images.length - 1 : currentIndex - 1
                                }));
                            };

                            return (
                                <motion.div
                                    key={item.id}
                                    className="celebration-card"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    style={{
                                        background: 'var(--color-white)',
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        boxShadow: 'var(--shadow-md)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        border: '1px solid rgba(0,0,0,0.05)',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                                    }}
                                    whileHover={{
                                        transform: 'translateY(-8px)',
                                        boxShadow: 'var(--shadow-xl)'
                                    }}
                                >
                                    {/* Image Carousel */}
                                    <div className="celebration-image" style={{ height: '250px', position: 'relative', overflow: 'hidden' }}>
                                        <img
                                            src={item.images[currentIndex]}
                                            alt={`${item.title} - ${currentIndex + 1}`}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                transition: 'opacity 0.3s ease'
                                            }}
                                        />

                                        {/* Status Badge */}
                                        <span style={{
                                            position: 'absolute',
                                            right: '1rem',
                                            background: item.status === 'Upcoming' ? 'var(--color-primary)' : 'rgba(0,0,0,0.7)',
                                            color: 'white',
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: '50px',
                                            fontSize: '0.8rem',
                                            fontWeight: '600',
                                            backdropFilter: 'blur(10px)'
                                        }}>
                                            {item.status}
                                        </span>

                                        {/* Image Counter */}
                                        <span style={{
                                            position: 'absolute',
                                            bottom: '1rem',
                                            right: '1rem',
                                            background: 'rgba(0,0,0,0.6)',
                                            color: 'white',
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: '50px',
                                            fontSize: '0.75rem',
                                            backdropFilter: 'blur(10px)'
                                        }}>
                                            {currentIndex + 1} / {item.images.length}
                                        </span>

                                        {/* Navigation Arrows */}
                                        {item.images.length > 1 && (
                                            <>
                                                <button
                                                    onClick={prevImage}
                                                    style={{
                                                        position: 'absolute',
                                                        left: '0.5rem',
                                                        top: '50%',
                                                        transform: 'translateY(-50%)',
                                                        background: 'rgba(255,255,255,0.9)',
                                                        border: 'none',
                                                        borderRadius: '50%',
                                                        width: '36px',
                                                        height: '36px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        cursor: 'pointer',
                                                        fontSize: '1.2rem',
                                                        color: 'var(--color-primary)',
                                                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                                                        transition: 'all 0.2s ease',
                                                        opacity: 0.8
                                                    }}
                                                    onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                                                    onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
                                                >
                                                    ‹
                                                </button>
                                                <button
                                                    onClick={nextImage}
                                                    style={{
                                                        position: 'absolute',
                                                        right: '0.5rem',
                                                        top: '50%',
                                                        transform: 'translateY(-50%)',
                                                        background: 'rgba(255,255,255,0.9)',
                                                        border: 'none',
                                                        borderRadius: '50%',
                                                        width: '36px',
                                                        height: '36px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        cursor: 'pointer',
                                                        fontSize: '1.2rem',
                                                        color: 'var(--color-primary)',
                                                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                                                        transition: 'all 0.2s ease',
                                                        opacity: 0.8
                                                    }}
                                                    onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                                                    onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
                                                >
                                                    ›
                                                </button>
                                            </>
                                        )}

                                        {/* Navigation Dots */}
                                        {item.images.length > 1 && (
                                            <div style={{
                                                position: 'absolute',
                                                bottom: '0.5rem',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                display: 'flex',
                                                gap: '0.5rem'
                                            }}>
                                                {item.images.map((_, imgIndex) => (
                                                    <button
                                                        key={imgIndex}
                                                        onClick={() => setCurrentImageIndex(prev => ({ ...prev, [item.id]: imgIndex }))}
                                                        style={{
                                                            width: currentIndex === imgIndex ? '24px' : '8px',
                                                            height: '8px',
                                                            borderRadius: '4px',
                                                            border: 'none',
                                                            background: currentIndex === imgIndex ? 'white' : 'rgba(255,255,255,0.5)',
                                                            cursor: 'pointer',
                                                            transition: 'all 0.3s ease',
                                                            padding: 0
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Card Content */}
                                    <div className="celebration-content" style={{ padding: '2rem' }}>
                                        <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem', color: 'var(--color-primary)' }}>{item.title}</h3>
                                        <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: '1.6' }}>{item.description}</p>

                                        <div className="celebration-meta" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.9rem', color: '#666' }}>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={16} /> {item.date}</span>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={16} /> {item.location}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </Section>

            {/* Participant Stories Section */}
            {/* The CardStack component itself includes the container and header styling, so we just render it here */}
            <CardStack items={stories} />

            {/* CTA Section */}
            <Section className="celebrations-cta" style={{ background: 'var(--color-primary)', color: 'white', textAlign: 'center', padding: '6rem 0' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-white)' }}>Want to celebrate with us?</h2>
                        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 2.5rem', opacity: 0.9, color: 'var(--color-white)' }}>
                            Join us in celebrating the rich tapestry of cultures and traditions. Experience the joy of festivals, share in our traditions, and be part of our vibrant community celebrations.
                        </p>
                        <motion.a
                            href="/contact"
                            className="btn"
                            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background: 'var(--color-white)',
                                color: 'var(--color-primary)',
                                fontWeight: 'bold',
                                padding: '1rem 2.5rem',
                                borderRadius: '50px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                fontSize: '1.1rem',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                            }}
                        >
                            Get in Touch <Heart size={20} fill="var(--color-primary)" />
                        </motion.a>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
};

export default Celebrations;
