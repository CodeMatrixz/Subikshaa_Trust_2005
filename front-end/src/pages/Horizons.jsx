import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BookOpen, Calendar, User, X, Clock, Share2 } from 'lucide-react';
import { useState } from 'react';
import Section from '../components/Section';
import SEO from '../components/SEO';
import '../styles/Horizons.css';

const Horizons = () => {
    const [selectedArticle, setSelectedArticle] = useState(null);

    const articles = [
        {
            id: 1,
            category: "Environment & Strategy",
            title: "Climate Resilience & Adaptation",
            author: "Dr. R. K. Pachauri",
            date: "Dec 12, 2025",
            readTime: "8 min read",
            image: "/images/assets/unsplash_96.jpg",
            excerpt: "Exploring how rural communities are adopting sustainable practices to combat changing weather patterns.",
            content: `
                <p>As weather patterns become increasingly unpredictable, rural communities in India are finding themselves on the frontlines of climate change. From shifting monsoon seasons to prolonged droughts, the agricultural heartbeat of the nation is under stress. However, amidst these challenges, a quiet revolution of resilience is taking place.</p>
                
                <h4>The Traditional Wisdom</h4>
                <p>For centuries, Indian farmers have relied on a deep understanding of their local ecosystems. Today, we are seeing a resurgence of these traditional practices, combined with modern scientific data. In the arid regions of Rajasthan, the revival of 'Johads' (traditional rainwater storage tanks) has rejuvenated groundwater levels, allowing farmers to cultivate crops even during dry spells.</p>

                <h4>Technology as an Enabler</h4>
                <p>Subikshaa Trust has been piloting a 'Climate-Smart Village' program in 20 locations. By equipping farmers with real-time weather data via SMS and introducing drought-resistant crop varieties such as millet and sorghum, we have seen a 40% reduction in crop failure rates. "I used to look at the sky and pray," says Ramesh, a farmer from Vidarbha. "Now, I look at my phone and plan."</p>

                <h4>Community-Led Adaptation</h4>
                <p>True resilience isn't just about technology; it's about community governance. Our Village Climate Committees (VCCs) empower locals to manage common resources like water and grazing land. These committees, often led by women, ensure that adaptation strategies are inclusive and sustainable. The path forward is clear: integrate the wisdom of the past with the tools of the future.</p>
            `
        },
        {
            id: 2,
            category: "Technology",
            title: "Digital Health for All: Bridging the Divide",
            author: "Sarah Jenkins",
            date: "Dec 10, 2025",
            readTime: "6 min read",
            image: "/images/assets/unsplash_71.jpg",
            excerpt: "How telemedicine and AI-driven diagnostics are bridging the gap between urban hospitals and remote village clinics.",
            content: `
                <p>Imagine walking 20 kilometers just to find out the doctor isn't in. For millions in rural India, this is a daily reality. But the digital revolution is rewriting this narrative, turning smartphones into stethoscopes and tablets into clinics.</p>

                <h4>The Telemedicine Bridge</h4>
                <p>In the remote hamlet of Attapadi, access to specialized healthcare was a dream. Today, thanks to our 'e-Sanjeevani' kiosks, patients can consult with specialists in Chennai or Bangalore in real-time. High-definition cameras allow doctors to examine skin conditions, while digital stethoscopes transmit heart sounds instantly. Since its launch, the program has facilitated over 5,000 consultations, saving time, money, and lives.</p>

                <h4>AI in Diagnostics</h4>
                <p>Artificial Intelligence is playing a crucial role in early detection. We have deployed handheld AI-powered devices that can screen for diabetic retinopathy and oral cancer with 90% accuracy. These devices require minimal training, allowing our ASHA workers to act as the first line of defense. </p>

                <h4>Challenges and the Road Ahead</h4>
                <p>Connectivity remains a hurdle, but with the expansion of satellite internet and 5G, the digital divide is narrowing. The goal is not just to treat illness but to create a proactive health ecosystem where geography no longer dictates destiny.</p>
            `
        },
        {
            id: 3,
            category: "Education",
            title: "Reimagining Rural Schools",
            author: "Amitabh Kant",
            date: "Nov 28, 2025",
            readTime: "10 min read",
            image: "/images/assets/unsplash_7.jpg",
            excerpt: "Moving beyond rote learning: Implementing experiential education models that empower children to solve local problems.",
            content: `
                <p>The traditional image of a rural classroom—students reciting texts in unison—is changing. At Subikshaa Trust schools, you are more likely to find students testing soil samples or coding simple weather stations. We are moving from 'Rote Learning' to 'Real-World Learning'.</p>

                <h4>Experiential Learning in Action</h4>
                <p>Our 'Farm-to-Table' curriculum teaches biology and economics through agriculture. Students manage their own organic garden plots, calculating input costs, tracking growth cycles, and selling produce at local markets. They aren't just learning definitions; they are learning life skills.</p>

                <h4>Digital Literacy</h4>
                <p>We believe coding is the new literacy. Our mobile computer labs travel to underserved schools, introducing children to Scratch and Python. The results are astounding. In a recent hackathon, a team of 12-year-olds from a tribal school developed an app to track local bus timings.</p>

                <p>By making education relevant to their immediate environment, we are seeing dropout rates plummet and engagement soar. Education is no longer a burden; it is a tool for empowerment.</p>
            `
        },
        {
            id: 4,
            category: "Livelihood",
            title: "The Artisan Economy: Crafting the Future",
            author: "Meera Sanyal",
            date: "Nov 15, 2025",
            readTime: "7 min read",
            image: "/images/assets/unsplash_122.jpg",
            excerpt: "Reviving traditional crafts through modern market linkages and digital storytelling.",
            content: `
                <p>In the age of mass production, the handmade holds a special allure. India's artisans are custodians of a rich heritage, yet many struggle to make ends meet. The 'Artisan Economy' initiative is flipping the script by connecting rural craftspeople directly to global markets.</p>

                <h4>Storytelling as Value</h4>
                <p>We realized that customers don't just buy a product; they buy a story. We trained artisans to document their process—from dyeing threads to working the loom—using smartphones. These stories are shared on social media, creating a personal connection with buyers. A shawl from Kutch is no longer just fabric; it is a labor of love from artisans like Geeta Ben.</p>

                <h4>Eliminating Middlemen</h4>
                <p>By setting up producer companies owned by the artisans themselves, we have eliminated exploitative middlemen. Profits go directly back to the creators. This increased income has led to better education for their children and reinvestment in their craft.</p>

                <p>Reviving these crafts is not just about economics; it represents cultural preservation. When an artisan thrives, a tradition lives on.</p>
            `
        }
    ];

    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

    const handleNativeShare = (article) => {
        if (navigator.share) {
            navigator.share({
                title: article.title,
                text: article.excerpt,
                url: currentUrl
            }).catch(console.error);
        } else {
            // Fallback to copying to clipboard
            navigator.clipboard.writeText(currentUrl);
            alert('Link copied to clipboard!');
        }
    };

    const shareToTwitter = (article) => {
        const text = encodeURIComponent(`${article.title} - Read more at Subikshaa Trust`);
        const url = encodeURIComponent(currentUrl);
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
    };

    const shareToLinkedIn = (article) => {
        const url = encodeURIComponent(currentUrl);
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
    };

    return (
        <div className="horizons-page">
            <SEO
                title="Subikshaa Trust Horizons - Digital Magazine"
                description="Expert insights, field stories, and deep analysis of development challenges."
            />

            {/* Hero Section - Magazine Cover Style */}
            <section className="horizons-hero">
                <div className="container horizons-hero-container">
                    <motion.div
                        className="horizons-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="magazine-issue">December 2025 Issue</span>
                        <h1>Subikshaa Trust Horizons</h1>
                        <p className="lead-text">
                            Enriching the discourse on development. A curated collection of thoughts, strategies, and stories from the field.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Editorial Note */}
            <Section className="editorial-section">
                <div className="editorial-container">
                    <div className="editorial-content">
                        <h3>Editor's Note</h3>
                        <p>
                            Welcome to the latest edition of Subikshaa Trust Horizons. In this issue, we explore the intersection of technology and tradition.
                            As we face unprecedented challenges in climate and health, the solutions often lie in a blend of ancient wisdom and modern innovation.
                            We hope these stories inspire you to think differently about impact.
                        </p>
                        <span className="signature">The Editorial Team</span>
                    </div>
                </div>
            </Section>

            {/* Latest Articles Grid */}
            <Section className="articles-section">
                <div className="section-header text-center">
                    <span className="sub-heading">In This Issue</span>
                    <h2>Featured Articles</h2>
                </div>

                <div className="articles-grid">
                    {articles.map((article, index) => (
                        <motion.div
                            key={article.id}
                            className="article-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="article-image">
                                <img src={article.image} alt={article.title} />
                                <span className="article-category">{article.category}</span>
                            </div>
                            <div className="article-card-content">
                                <div className="article-meta">
                                    <span><Calendar size={14} /> {article.date}</span>
                                    <span><User size={14} /> {article.author}</span>
                                </div>
                                <h3>{article.title}</h3>
                                <p>{article.excerpt}</p>
                                <button
                                    className="read-btn"
                                    onClick={() => setSelectedArticle(article)}
                                >
                                    Read Article <ArrowRight size={16} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Full Article Modal Overlay */}
            <AnimatePresence>
                {selectedArticle && (
                    <motion.div
                        className="article-modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedArticle(null)}
                    >
                        <motion.div
                            className="article-modal-content"
                            initial={{ y: 100, opacity: 0, scale: 0.95 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 100, opacity: 0, scale: 0.95 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="close-modal-btn" onClick={() => setSelectedArticle(null)}>
                                <X size={24} />
                            </button>

                            <div className="modal-header-image">
                                <img src={selectedArticle.image} alt={selectedArticle.title} />
                                <div className="modal-category-badge">{selectedArticle.category}</div>
                            </div>

                            <div className="modal-body-scroll">
                                <div className="modal-article-header">
                                    <div className="modal-meta">
                                        <span><Calendar size={16} /> {selectedArticle.date}</span>
                                        <span><Clock size={16} /> {selectedArticle.readTime}</span>
                                        <span><User size={16} /> {selectedArticle.author}</span>
                                    </div>
                                    <h2>{selectedArticle.title}</h2>
                                    <div className="modal-actions">
                                        <button className="icon-action" onClick={() => handleNativeShare(selectedArticle)}>
                                            <Share2 size={18} />
                                        </button>
                                        <button className="icon-action"><BookOpen size={18} /></button>
                                    </div>
                                </div>

                                <div
                                    className="modal-article-text"
                                    dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                                />

                                <div className="modal-footer">
                                    <p>Share this story to inspire others.</p>
                                    <div className="share-buttons">
                                        <button className="btn btn-outline btn-sm" onClick={() => shareToTwitter(selectedArticle)}>
                                            Share on Twitter
                                        </button>
                                        <button className="btn btn-outline btn-sm" onClick={() => shareToLinkedIn(selectedArticle)}>
                                            Share on LinkedIn
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Horizons;
