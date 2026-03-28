import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Heart, ArrowRight, Target, Users, MapPin } from 'lucide-react';
import Section from '../components/Section';
import SEO from '../components/SEO';
import '../styles/WomenSkillDev.css'; // Reusing existing premium styles for consistency

const programsData = {
    'education': {
        title: "Education for All – Education NGO in India",
        subtitle: "Education is the most powerful tool for breaking the cycle of poverty.",
        description: "As an education NGO in India and a child education NGO in Chennai, our program focuses on providing access to quality education for children from economically disadvantaged families. We support school admissions, learning materials, digital education, after-school tutoring, and scholarship assistance. Our work extends across Tamil Nadu, making us a child welfare NGO in Chennai, Madurai, and Coimbatore, dedicated to equal learning opportunities for every child.",
        heroImage: "/images/assets/unsplash_91.jpg",
        stats: [
            { label: " Learning Centers Established", value: "50+" },
            { label: "Lives Reached Through Education", value: "10,000+" },
            { label: "Educators Strengthened", value: "500+" }
        ],
        initiatives: [
            {
                title: "School Architecture",
                desc: "Building safe and modern classrooms.",
                image: "/images/assets/unsplash_92.jpg"
            },
            {
                title: "Scholarship Program",
                desc: "Financial aid for meritorious students.",
                image: "/images/assets/unsplash_93.jpg"
            },
            {
                title: "Digital Literacy",
                desc: "Computer labs for rural schools.",
                image: "/images/assets/unsplash_94.jpg"
            }
        ]
    },
    'food': {
        title: "Food Security – Fighting Hunger Across Tamil Nadu",
        subtitle: "Nourishing communities, sustaining lives.",
        description: "Hunger remains a major challenge in vulnerable communities. Our food security program addresses malnutrition by conducting food distribution drives, community kitchen support, and nutrition awareness initiatives. As a charity organisation in India, we ensure that families, children, and elderly individuals have access to healthy meals, especially during emergencies and natural disasters. This initiative plays a key role in supporting rural development in Tamil Nadu.",
        heroImage: "/images/assets/unsplash_95.jpg",
        stats: [
            { label: "Meals Served", value: "1M+" },
            { label: "Farmers Supported", value: "2,000+" },
            { label: "Farms Established", value: "50+" }
        ],
        initiatives: [
            {
                title: "Community Kitchens",
                desc: "Daily nutritious meals for the needy.",
                image: "/images/assets/unsplash_6.jpg"
            },
            {
                title: "Sustainable Farming",
                desc: "Training in organic agriculture.",
                image: "/images/assets/unsplash_96.jpg"
            },
            {
                title: "Seed Bank",
                desc: "Preserving native crop varieties.",
                image: "/images/assets/unsplash_97.jpg"
            }
        ]
    },
    'health': {
        title: "Healthcare Access – Health NGO in Tamil Nadu",
        subtitle: "Healthcare should be accessible to all.",
        description: "We believe healthcare should be accessible to all. As a health NGO in Madurai and across Tamil Nadu, we conduct free medical camps, health check-ups, diagnostic screenings, vaccination drives, and health awareness programs. Our goal is preventive care, early diagnosis, and improved well-being for underserved populations, making us one of the top NGO initiatives in healthcare access in India.",
        heroImage: "/images/assets/unsplash_98.jpg",
        stats: [
            { label: "Patients Treated", value: "50,000+" },
            { label: "Medical Camps", value: "150+" },
            { label: "Villages Covered", value: "75+" }
        ],
        initiatives: [
            {
                title: "Mobile Clinics",
                desc: "Healthcare on wheels for remote areas.",
                image: "/images/assets/unsplash_99.jpg"
            },
            {
                title: "Maternal Health",
                desc: "Care for expectant mothers and infants.",
                image: "/images/assets/unsplash_100.jpg"
            },
            {
                title: "Vaccination Drives",
                desc: "Immunization against common diseases.",
                image: "/images/assets/unsplash_101.jpg"
            }
        ]
    },
    'life-dev': {
        title: "Life Skills & Personal Development – Building Skills for a Better Future",
        subtitle: "Building Skills for a Better Future",
        description: "Our Life Skills & Personal Development Program focuses on personal growth, mental well-being, and employability skills. We offer training in communication, financial literacy, career guidance, and emotional resilience. This program empowers youth and adults to become self-reliant contributors to society, strengthening our role as a social service organisation in India.",
        heroImage: "/images/assets/unsplash_102.jpg",
        stats: [
            { label: "Lives Impacted", value: "5,000+" },
            { label: "Mentors", value: "100+" },
            { label: "Workshops", value: "200+" }
        ],
        initiatives: [
            {
                title: "Career Counseling",
                desc: "Guiding youth towards right paths.",
                image: "/images/assets/unsplash_103.jpg"
            },
            {
                title: "Mental Wellness",
                desc: "Support groups and therapy sessions.",
                image: "/images/assets/unsplash_104.jpg"
            },
            {
                title: "Leadership Skills",
                desc: "Developing tomorrow's leaders.",
                image: "/images/assets/unsplash_105.jpg"
            }
        ]
    },
    'child-care': {
        title: "Child Care – Child Welfare NGO in India",
        subtitle: "Holistic care for children through early education and support.",
        description: "As a child welfare NGO in India, we provide holistic care for children through early education, nutrition, emotional support, and safe learning environments. Our initiatives support vulnerable children, including those at risk of dropping out of school, ensuring their safety, development, and long-term well-being across Madurai and other cities in Tamil Nadu.",
        heroImage: "/images/assets/unsplash_95.jpg", // Using general happy kid image
        stats: [
            { label: "Children Protected", value: "2,000+" },
            { label: "Daycare Centers", value: "20+" },
            { label: "Meals Provided", value: "500/day" }
        ],
        initiatives: [
            {
                title: "Early Learning",
                desc: "Fun and educational activities.",
                image: "/images/assets/unsplash_106.jpg"
            },
            {
                title: "Nutrition Support",
                desc: "Healthy meals for growth.",
                image: "/images/assets/unsplash_107.jpg"
            },
            {
                title: "Safe Shelter",
                desc: "Protection from hazardous labor.",
                image: "/images/assets/unsplash_108.jpg"
            }
        ]
    },
    'old-age': {
        title: "Old Age People Care – Supporting Elderly with Dignity",
        subtitle: "Ensuring elderly individuals live with dignity, respect, and care.",
        description: "We actively support senior citizens through health assistance, emotional care, and community engagement. Our work aligns with the mission of an old age home NGO in Madurai, ensuring elderly individuals live with dignity, respect, and care. This program also supports families struggling to care for aging parents, making us a trusted charitable trust in Tamil Nadu.",
        heroImage: "/images/assets/unsplash_109.jpg",
        stats: [
            { label: "Elders Supported", value: "300+" },
            { label: "Care Homes", value: "5" },
            { label: "Health Checks", value: "Weekly" }
        ],
        initiatives: [
            {
                title: "Assisted Living",
                desc: "Comfortable and safe housing.",
                image: "/images/assets/unsplash_110.jpg"
            },
            {
                title: "Medical Care",
                desc: "Geriatric health specialists.",
                image: "/images/assets/unsplash_111.jpg"
            },
            {
                title: "Recreation",
                desc: "Social activities and events.",
                image: "/images/assets/unsplash_112.jpg"
            }
        ]
    },
    'societal': {
        title: "Societal Development – Community-Focused NGO in Tamil Nadu",
        subtitle: "Building resilient communities committed to measurable change.",
        description: "Our Societal Development Program addresses broader social challenges such as sanitation, clean water access, environmental awareness, and rural infrastructure. Through visual image cards, we showcase real impact stories, reinforcing our identity as a genuine NGO in Tamil Nadu committed to measurable change.",
        heroImage: "/images/assets/unsplash_113.jpg",
        stats: [
            { label: "Communities Served", value: "50+" },
            { label: "Individuals Impacted", value: "10,000+" },
            { label: "Volunteer Hours", value: "5,000+" },
            { label: "Resources Distributed", value: "10K+" }
        ],
        initiatives: [
            {
                title: "Infrastructure",
                desc: "Roads, water, and sanitation.",
                image: "/images/assets/unsplash_114.jpg"
            },
            {
                title: "Civic Awareness",
                desc: "Educating rights and duties.",
                image: "/images/assets/unsplash_115.jpg"
            },
            {
                title: "Cultural Events",
                desc: "Celebrating diversity.",
                image: "/images/assets/unsplash_116.jpg"
            }
        ]
    }
};

const GeneralProgramDetails = () => {
    const { programId } = useParams();
    const program = programsData[programId];

    if (programId === 'women-skill-dev') {
        return <Navigate to="/programs/women-skill-dev" replace />;
    }

    if (!program) {
        return (
            <div className="course-not-found">
                <div className="container" style={{ padding: '8rem', textAlign: 'center' }}>
                    <h2>Program Not Found</h2>
                    <p>The program you are looking for is currently being updated or does not exist.</p>
                    <Link to="/programs" className="btn btn-primary">Back to Programs</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="women-skill-page"> {/* Reusing the page class for styles */}
            <SEO
                title={`${program.title} - Our Programs`}
                description={program.subtitle}
            />

            <div className="page-header" style={{
                background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${program.heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '120px 0 80px'
            }}>
                <div className="container text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="sub-heading" style={{ color: 'var(--color-accent-gold)', display: 'block', marginBottom: '1rem' }}>Our Initiative</span>
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontFamily: 'Playfair Display, serif' }}>{program.title}</h1>
                        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', opacity: 0.9 }}>{program.subtitle}</p>
                        <div style={{ marginTop: '2rem' }}>
                            <Link to="/programs" className="back-link" style={{ marginBottom: 0 }}>
                                <ArrowLeft size={20} /> Back to Programs
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Section className="skills-content-section">
                <div className="container">
                    <div className="row justify-contents-center" style={{ marginBottom: '4rem' }}>
                        <div className="col-lg-10 mx-auto text-center">
                            <h2 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)' }}>About the Program</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text)' }}>
                                {program.description}
                            </p>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="stats-row" style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', marginBottom: '5rem' }}>
                        {program.stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                style={{
                                    background: 'var(--color-bg-light)',
                                    padding: '2rem',
                                    borderRadius: '15px',
                                    textAlign: 'center',
                                    minWidth: '200px',
                                    boxShadow: 'var(--shadow-md)'
                                }}
                            >
                                <h3 style={{ color: 'var(--color-secondary)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>{stat.value}</h3>
                                <p style={{ margin: 0, fontWeight: '600', color: 'var(--color-text-light)' }}>{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="skills-intro text-center">
                        <span className="sub-heading">Key Initiatives</span>
                        <h2><Target className="icon-heading" size={32} strokeWidth={1.5} /> What We Do</h2>
                        <p>Our focused areas of action to drive meaningful change.</p>
                    </div>

                    <div className="skills-card-grid">
                        {program.initiatives.map((init, index) => (
                            <motion.div
                                key={index}
                                className="skill-image-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="skill-img-bg" style={{ backgroundImage: `url(${init.image})` }}></div>
                                <div className="skill-overlay"></div>
                                <div className="skill-content">
                                    <h3>{init.title}</h3>
                                    <p style={{ color: 'white', opacity: 0.9, marginTop: '0.5rem' }}>{init.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="skills-layout-bottom-column">
                        <div className="application-section-full">
                            <motion.div
                                className="apply-card-wide"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="apply-header">
                                    <h3>Make an Impact</h3>
                                    <p>Support this program by volunteering or making a contribution.</p>
                                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem' }}>
                                        <Link to="/volunteer" className="btn btn-primary apply-cta-btn">
                                            Volunteer <Users size={20} style={{ marginLeft: '8px' }} />
                                        </Link>
                                        <Link to="/donate" className="btn btn-outline apply-cta-btn" style={{ background: 'transparent', border: '1px solid var(--color-primary)', color: 'var(--color-primary)' }}>
                                            Contribute <Heart size={20} style={{ marginLeft: '8px' }} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default GeneralProgramDetails;
