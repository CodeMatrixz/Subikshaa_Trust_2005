import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Clock, Calendar, Award, BookOpen, ArrowRight } from 'lucide-react';
import Section from '../components/Section';
import SEO from '../components/SEO';

import '../styles/CourseDetails.css';

// Course Data (This could normally be in a separate file)
const coursesData = {
    'aari-work': {
        title: "Aari Work & Embroidery",
        subtitle: "Master the intricate art of Aari embroidery.",
        description: "Aari work is a traditional form of embroidery that is highly valued for its detailed and refined finish. In this course, you will learn the fundamental stitches, beadwork, and complex designs used in bridal blouses and high-end garments. This skill is in high demand for boutique businesses.",
        heroImage: "/images/assets/unsplash_11.jpg",
        duration: "3 Months",
        level: "Beginner to Advanced",
        certification: "Certificate of Completion",
        syllabus: [
            "Introduction to Aari Stand and Needle",
            "Basic Chain Stitch & End Knot",
            "Bead Work (Sugar beads, Stone work)",
            "Zardosi Work",
            "Cut work and Patch work",
            "Blouse Marking and Tracing",
            "Bridal Blouse Designing"
        ],
        benefits: [
            "High market demand for bridal wear",
            "Ability to start a home-based boutique",
            "Creative satisfaction and financial independence"
        ],
        gallery: [
            "/images/aari-work.png",
            "/images/assets/unsplash_12.jpg",
            "/images/assets/unsplash_13.jpg"
        ]
    },
    'beautician': {
        title: "Professional Beautician Course",
        subtitle: "Launch your career in the beauty and wellness industry.",
        description: "Our comprehensive beautician course covers everything from basic grooming to advanced makeup techniques. You will gain hands-on experience in skincare, haircare, and bridal makeup, equipping you to work in salons or start your own freelance practice.",
        heroImage: "/images/assets/unsplash_14.jpg",
        duration: "4 Months",
        level: "Professional",
        certification: "Professional Certificate",
        syllabus: [
            "Skin Anatomy and Analysis",
            "Facial Treatments & Bleaching",
            "Eyebrow Threading & Waxing",
            "Manicure & Pedicure",
            "Hair Cuts & Styling",
            "Basic & Advanced Makeup",
            "Saree Draping"
        ],
        benefits: [
            "Recession-proof career",
            "Options for freelance or salon employment",
            "High earning potential during wedding seasons"
        ],
        gallery: [
            "/images/assets/unsplash_15.jpg",
            "/images/assets/unsplash_16.jpg",
            "/images/assets/unsplash_17.jpg"
        ]
    },
    'doll-making': {
        title: "Doll Making",
        subtitle: "Create beautiful handcrafted dolls.",
        description: "Learn the art of making soft toys and decorative dolls. This course is perfect for those who enjoy crafting and want to create unique gifts or sell their creations online and in local markets.",
        heroImage: "/images/assets/unsplash_18.jpg",
        duration: "1 Month",
        level: "Beginner",
        certification: "Workshop Certificate",
        syllabus: [
            "Fabric Selection and Cutting",
            "Stitching and Stuffing",
            "Facial Features and detailing",
            "Costume Designing for Dolls",
            "Soft Toy Making (Teddy bears, etc.)"
        ],
        benefits: ["Low investment business", "Good potential for gift market", "Relaxing and creative hobby"],
        gallery: [
            "/images/assets/unsplash_19.jpg",
            "/images/assets/unsplash_20.jpg",
            "/images/assets/unsplash_21.jpg"
        ]
    },
    'fabric-painting': {
        title: "Fabric Painting",
        subtitle: "Transform plain fabrics into works of art.",
        description: "Discover the techniques of fabric painting to customize clothes, home decor, and accessories. Learn about color mixing, brush strokes, and fixing colors to create lasting designs.",
        heroImage: "/images/assets/unsplash_22.jpg",
        duration: "1 Month",
        level: "Beginner",
        certification: "Certificate of Completion",
        syllabus: ["Color Theory", "Freehand Painting", "Stencil Painting", "Block Painting", "3D Outlining"],
        benefits: ["Customizing own wardrobe", "Starting an online boutique", "Low startup cost"],
        gallery: [
            "/images/assets/unsplash_23.jpg",
            "/images/assets/unsplash_24.jpg",
            "/images/assets/unsplash_25.jpg"
        ]
    },
    'jewellery-making': {
        title: "Jewellery Making",
        subtitle: "Design and create stunning fashion jewellery.",
        description: "Learn to design and assemble various types of fashion jewellery, including silk thread bangles, terracotta sets, and beaded accessories.",
        heroImage: "/images/assets/unsplash_26.jpg",
        duration: "1.5 Months",
        level: "Beginner",
        certification: "Certificate of Completion",
        syllabus: ["Silk Thread Jewellery", "Terracotta Jewellery making and baking", "Bead work", "Earring and Necklace assembly"],
        benefits: ["High profit margin", "Creative expression", "Can be done from home"],
        gallery: [
            "/images/assets/unsplash_27.jpg",
            "/images/assets/unsplash_28.jpg",
            "/images/assets/unsplash_29.jpg"
        ]
    },
    'mehandi': {
        title: "Professional Mehandi Art",
        subtitle: "Learn the tradition of Henna application.",
        description: "Master the art of Mehandi application, from basic Indian designs to intricate Arabic and Bridal patterns.",
        heroImage: "/images/assets/unsplash_30.jpg",
        duration: "1 Month",
        level: "All Levels",
        certification: "Certificate of Completion",
        syllabus: ["Cone making", "Basic lines and shapes", "Arabic Designs", "Indian Bridal Designs", "Figure work"],
        benefits: ["High demand during weddings", "Freelance opportunities", "Cultural significance"],
        gallery: [
            "/images/assets/unsplash_31.jpg",
            "/images/assets/unsplash_32.jpg",
            "/images/assets/unsplash_33.jpg"
        ]
    },
    'hand-embroidery': {
        title: "Hand Embroidery",
        subtitle: "The timeless art of needlework.",
        description: "Learn various hand embroidery stitches to decorate fabrics, handkerchiefs, and garments.",
        heroImage: "/images/assets/unsplash_34.jpg",
        duration: "1 Month",
        level: "Beginner",
        certification: "Certificate of Completion",
        syllabus: ["Running stitch, Back stitch", "French Knots", "Satin Stitch", "Lazy Daisy", "Pattern transfer"],
        benefits: ["Enhance garment value", "Relaxing hobby", "Boutique value-add"],
        gallery: [
            "/images/assets/unsplash_35.jpg",
            "/images/assets/unsplash_36.jpg",
            "/images/assets/unsplash_37.jpg"
        ]
    },
    'terry-cotton': {
        title: "Terry Cotton & Soft Toys",
        subtitle: "Working with Terry fabrics.",
        description: "Learn to cut and stitch Terry Cotton fabric to make household items and potentially soft toys.",
        heroImage: "/images/assets/unsplash_38.jpg",
        duration: "1 Month",
        level: "Beginner",
        certification: "Certificate of Completion",
        syllabus: ["Fabric handling", "Cutting techniques", "Stitching patterns", "Finishing"],
        benefits: ["Create household utility items", "Small business potential", "Skill development"],
        gallery: [
            "/images/assets/unsplash_39.jpg",
            "/images/assets/unsplash_40.jpg",
            "/images/assets/unsplash_41.jpg"
        ]
    },
    'paper-bag': {
        title: "Paper Bag Making",
        subtitle: "Eco-friendly craftsmanship for a sustainable future.",
        description: "Learn to create durable and attractive paper bags from recycled materials. This course covers size calculation, folding techniques, and handle attachment, preparing you for the growing market of eco-friendly packaging.",
        heroImage: "/images/assets/unsplash_42.jpg",
        duration: "2 Weeks",
        level: "Beginner",
        certification: "Workshop Certificate",
        syllabus: ["Material Selection", "Measuring and Cutting", "Folding Techniques", "Base Formation", "Handle Fixing", "Decoration"],
        benefits: ["Eco-friendly business", "Low investment", "High volume demand"],
        gallery: [
            "/images/assets/unsplash_43.jpg",
            "/images/assets/unsplash_44.jpg",
            "/images/assets/unsplash_45.jpg"
        ]
    },
    'painting': {
        title: "Painting",
        subtitle: "Express creativity through colors and canvas.",
        description: "Explore various painting mediums including watercolors, acrylics, and oils. This course teaches color theory, composition, and various brush techniques to help you create stunning visual art.",
        heroImage: "/images/assets/unsplash_46.jpg",
        duration: "1 Month",
        level: "All Levels",
        certification: "Certificate of Completion",
        syllabus: ["Color Theory", "Brush Techniques", "Watercolors", "Acrylic Painting", "Canvas Preparation", "Composition"],
        benefits: ["Stress relief", "Sell works online", "Exhibition opportunities"],
        gallery: [
            "/images/assets/unsplash_47.jpg",
            "/images/assets/unsplash_48.jpg",
            "/images/assets/unsplash_49.jpg"
        ]
    },
    'pot-painting': {
        title: "Pot Painting",
        subtitle: "Turn ordinary pots into decorative masterpieces.",
        description: "Learn the art of decorating clay pots with intricate designs, colors, and textures. Ideal for garden decor and home embellishment.",
        heroImage: "/images/assets/unsplash_50.jpg",
        duration: "1 Week",
        level: "Beginner",
        certification: "Workshop Certificate",
        syllabus: ["Surface Preparation", "Base Coating", "Design Tracing", "Acrylic Application", "Varnishing"],
        benefits: ["Garden decor business", "Creative hobby", "Gift making"],
        gallery: [
            "/images/assets/unsplash_51.jpg",
            "/images/assets/unsplash_52.jpg",
            "/images/assets/unsplash_53.jpg"
        ]
    },
    'bridal-flower': {
        title: "Bridal Flower Making",
        subtitle: "Crafting floral elegance for special occasions.",
        description: "Master the art of creating bridal flower accessories, garlands, and venis using fresh and artificial flowers. A high-demand skill for the wedding industry.",
        heroImage: "/images/assets/unsplash_54.jpg",
        duration: "2 Weeks",
        level: "Beginner",
        certification: "Certificate of Completion",
        syllabus: ["Flower Selection", "Garland Making", "Veni Making", "Bridal Hair Accessories", "Bouquet Arrangement"],
        benefits: ["Wedding industry opportunities", "High profit margins", "Freelance work"],
        gallery: [
            "/images/assets/unsplash_55.jpg",
            "/images/assets/unsplash_56.jpg",
            "/images/assets/unsplash_57.jpg"
        ]
    },
    'baking': {
        title: "Baking",
        subtitle: "The science and art of perfect baking.",
        description: "From breads to cakes and pastries, learn the fundamentals of baking. Understand ingredients, temperatures, and techniques to produce bakery-quality goods at home.",
        heroImage: "/images/assets/unsplash_58.jpg",
        duration: "1 Month",
        level: "Beginner to Intermediate",
        certification: "Certificate of Completion",
        syllabus: ["Ingredients & Tools", "Breads & Bun", "Sponge Cakes", "Icings & Decoration", "Cookies & Biscuits"],
        benefits: ["Start home bakery", "Healthy homemade options", "creative satisfaction"],
        gallery: [
            "/images/assets/unsplash_59.jpg",
            "/images/assets/unsplash_60.jpg",
            "/images/assets/unsplash_61.jpg"
        ]
    },
    'saree-folding': {
        title: "Saree Folding & Draping",
        subtitle: "Professional draping and pre-pleating techniques.",
        description: "Learn professional saree pre-pleating, folding, and box folding techniques. Essential for beauticians and bridal makeup artists to ensure quick and perfect draping.",
        heroImage: "/images/assets/unsplash_62.jpg",
        duration: "1 Week",
        level: "Beginner",
        certification: "Workshop Certificate",
        syllabus: ["Fabric Types", "Ironing Techniques", "Pre-pleating", "Box Folding", "Travel Packing"],
        benefits: ["Add-on service for beauticians", "Bridal service", "Wardrobe management"],
        gallery: [
            "/images/assets/unsplash_63.jpg",
            "/images/assets/unsplash_64.jpg",
            "/images/assets/unsplash_65.jpg"
        ]
    },
    'nail-art': {
        title: "Nail Art",
        subtitle: "Creative designs for stunning nails.",
        description: "Step into the trendy world of nail art. Learn about nail care, polishing techniques, and creating intricate designs using various tools and materials.",
        heroImage: "/images/assets/unsplash_66.jpg",
        duration: "2 Weeks",
        level: "Beginner",
        certification: "Certificate of Completion",
        syllabus: ["Nail Care Basics", "Polishing Techniques", "Dotting & Striping", "Stick-on Art", "Gel Polish Extensions"],
        benefits: ["Salon employment", "Freelance nail artist", "High demand service"],
        gallery: [
            "/images/assets/unsplash_67.jpg",
            "/images/assets/unsplash_68.jpg",
            "/images/assets/unsplash_69.jpg"
        ]
    },
};

const CourseDetails = () => {
    const { courseId } = useParams();
    const course = coursesData[courseId];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [courseId]);

    if (!course) {
        return (
            <div className="course-not-found">
                <div className="container" style={{ padding: '4rem', textAlign: 'center' }}>
                    <h2>Course Not Found</h2>
                    <p>The course you are looking for does not exist.</p>
                    <Link to="/programs/women-skill-dev" className="btn btn-primary">Back to Courses</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="course-details-page">
            <SEO
                title={`${course.title} - Women Skill Development`}
                description={course.description}
            />

            {/* Hero Section */}
            <div className="course-hero" style={{ backgroundImage: `url(${course.heroImage})` }}>
                <div className="course-hero-overlay"></div>
                <div className="container course-hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Link to="/programs/women-skill-dev" className="back-link">
                            <ArrowLeft size={20} /> Back to Courses
                        </Link>
                        <h1>{course.title}</h1>
                        <p className="course-subtitle">{course.subtitle}</p>
                        <div className="course-meta">
                            <span className="meta-item"><Clock size={16} /> {course.duration}</span>
                            <span className="meta-item"><Award size={16} /> {course.level}</span>
                            <span className="meta-item"><BookOpen size={16} /> {course.certification}</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Section className="course-content-section">
                <div className="container">
                    <div className="course-layout">
                        <div className="course-main">
                            <motion.div
                                className="course-overview"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2>Overview</h2>
                                <p>{course.description}</p>
                            </motion.div>

                            <motion.div
                                className="course-syllabus"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                <h2>What You Will Learn</h2>
                                <ul className="syllabus-list">
                                    {course.syllabus.map((item, index) => (
                                        <li key={index}>
                                            <CheckCircle className="check-icon" size={20} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div
                                className="course-benefits"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <h2>Benefits & Opportunities</h2>
                                <div className="benefits-grid">
                                    {course.benefits.map((benefit, index) => (
                                        <div key={index} className="benefit-card">
                                            <p>{benefit}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                className="course-gallery"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <h2>Student Work & Gallery</h2>
                                <div className="gallery-grid">
                                    {course.gallery.map((img, index) => (
                                        <div key={index} className="gallery-item">
                                            <img
                                                src={img}
                                                alt={`Gallery Image ${index + 1}`}
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = "/images/aari-work.png";
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                            <motion.div
                                className="application-section-bottom"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                <div className="apply-card-bottom">
                                    <h3>Apply Now</h3>
                                    <p>Interested in this course? Click the button below to register.</p>
                                    <Link to="/registration" className="btn btn-primary apply-cta-btn">
                                        Register Here <ArrowRight size={20} />
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default CourseDetails;
