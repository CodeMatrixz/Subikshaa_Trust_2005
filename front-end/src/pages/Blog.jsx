import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/Section';
import SEO from '../components/SEO';
import { Calendar, User, ArrowRight, Clock, TrendingUp, X } from 'lucide-react';
import '../styles/Blog.css';

const Blog = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    const posts = [
        {
            id: 1,
            title: "How Your Donations Transform Lives: A Year in Review",
            excerpt: "Discover the incredible impact of your generosity over the past year. From building schools to providing clean water, see the real difference you've made.",
            content: [
                "2025 has been a landmark year for Subikshaa Trust, and it’s all thanks to the unwavering support of donors like you. As we look back, the numbers tell a compelling story, but it is the individual lives changed that truly define our impact.",
                "In the past 12 months, we have successfully renovated three dilapidated schools in rural Madurai, providing safe learning environments for over 1,200 students. We installed solar-powered water filtration systems in five drought-prone villages, ensuring that 500 families no longer have to walk miles for clean drinking water.",
                "Our healthcare initiatives reached new heights with the launch of our mobile clinic, 'Health on Wheels', which has conducted over 50 camps and treated 3,000+ patients in remote tribal hamlets.",
                "None of this would have been possible without your contributions. Every rupee donated has gone directly into these life-saving programs. As we step into 2026, our goals are even more ambitious, and we invite you to continue this journey of transformation with us."
            ],
            author: "Sarah Mitchell",
            date: "Jan 10, 2026",
            readTime: "5 min read",
            image: "/images/assets/unsplash_4.jpg",
            category: "Impact Stories",
            featured: true
        },
        {
            id: 2,
            title: "Meet Maria: From Homeless to Hope",
            excerpt: "A heartwarming success story of how our housing program helped Maria rebuild her life and start her own small business.",
            content: [
                "Maria’s journey is a testament to the resilience of the human spirit. Two years ago, she lost her home to a devastating flood and found herself living in a makeshift shelter with her two children. Without a steady income or a roof over her head, hope seemed like a distant memory.",
                "That’s when Subikshaa Trust’s 'Shelter for All' initiative intervened. We provided Maria with temporary transitional housing and enrolled her in our vocational training program. She displayed a natural talent for tailoring and quickly mastered the skills needed to start her own business.",
                "Today, Maria runs a bustling tailoring shop in her community. She has not only secured a permanent home for her family but also employs two other women from similar backgrounds. 'Subikshaa gave me more than just a house; they gave me my dignity back,' Maria says with a smile.",
                "Her story is just one of many. Your support helps us provide the stability and skills needed for resilient women like Maria to rebuild their lives from the ground up."
            ],
            author: "Team Subikshaa Trust",
            date: "Jan 08, 2026",
            readTime: "4 min read",
            image: "/images/assets/unsplash_5.jpg",
            category: "Success Stories",
            featured: false
        },
        {
            id: 3,
            title: "5 Ways to Make a Difference in Your Community",
            excerpt: "Small acts of kindness can create a ripple effect. Discover simple, actionable ways to contribute to your local community today.",
            content: [
                "We often think that changemaking requires grand gestures or massive donations, but the truth is that small, consistent acts of kindness can transform a community. Here are five simple ways you can start making a difference today:",
                "1. **Volunteer Your Time:** Even a few hours a month at a local shelter, food bank, or community garden can have a huge impact. Organizations like ours always need lending hands.",
                "2. **Support Local Artisans:** Buying from local small businesses and cooperatives helps sustain the local economy and preserves traditional crafts.",
                "3. **Organize a Clean-Up Drive:** Gather your friends and neighbors to clean up a local park or street. It builds community pride and improves the environment.",
                "4. **Mentor a Young Person:** Sharing your skills and time with a student can change their career trajectory. Look for mentorship programs in your area.",
                "5. **Donate Consciously:** Instead of discarding old clothes or books, donate them to NGOs that can repurpose them for those in need.",
                "Remember, change starts at your doorstep. Which of these will you try this week?"
            ],
            author: "Jane Smith",
            date: "Jan 05, 2026",
            readTime: "6 min read",
            image: "/images/assets/unsplash_6.jpg",
            category: "Community",
            featured: false
        },
        {
            id: 4,
            title: "The Power of Education: Breaking the Cycle of Poverty",
            excerpt: "How our scholarship program is empowering children from underprivileged backgrounds to pursue their dreams and transform their futures.",
            content: [
                "Education is widely recognized as the most effective tool to break the cycle of poverty. For children born into underprivileged families, access to quality education is often the only bridge to a better future.",
                "At Subikshaa Trust, our 'Bright Futures Scholarship' program focuses on identifying meritorious students from low-income backgrounds and supporting their entire educational journey. We don't just pay fees; we provide mentorship, career counseling, and supplementary skills training.",
                "Consider the story of Rajesh, the son of a daily wage laborer. With our support, Rajesh became the first in his village to attend an engineering college. Today, he works as a software engineer and supports his entire family, lifting them out of poverty in a single generation.",
                "This year, we aim to support 500 more students like Rajesh. We believe that talent is universal, but opportunity is not. Your support helps us bridge that gap."
            ],
            author: "Dr. James Wilson",
            date: "Dec 28, 2025",
            readTime: "7 min read",
            image: "/images/assets/unsplash_7.jpg",
            category: "Education",
            featured: false
        },
        {
            id: 5,
            title: "Clean Water Changes Everything: A Village's Journey",
            excerpt: "Follow the transformation of a rural village after gaining access to clean water. See how this basic necessity improved health, education, and livelihoods.",
            content: [
                "In the remote village of Thenpatti, the day used to start at 4 AM. Women and young girls would trek 5 kilometers to fetch water from a drying well. This daily chore stole hours from their day—time that could be used for school or work.",
                "When Subikshaa Trust installed a deep-bore well and a community water filtration plant in Thenpatti, the change was immediate and profound. Disease rates dropped by 40% within the first six months as waterborne illnesses vanished.",
                "School attendance among girls soared because they no longer had to spend their mornings walking for water. Women formed self-help groups and started small vegetable gardens using the surplus water, adding nutrition to their families' diets and income to their pockets.",
                "Water is life. By providing access to this basic necessity, we unlocked the potential of an entire village. This is the power of targeted, community-centric development."
            ],
            author: "Dr. A. Mwangi",
            date: "Dec 20, 2025",
            readTime: "5 min read",
            image: "/images/assets/unsplash_8.jpg",
            category: "Water & Health",
            featured: false
        },
        {
            id: 6,
            title: "Volunteer Spotlight: Why I Give My Time",
            excerpt: "Hear from our dedicated volunteers about their experiences, motivations, and the joy they find in serving others.",
            content: [
                "\"I started volunteering because I wanted to add something to my resume, but I stayed because it added something to my soul.\" - Emily Chen, Volunteer Coordinator.",
                "Emily has been with Subikshaa Trust for over three years, leading our weekend English teaching program. She describes the joy of seeing a child's eyes light up when they grasp a new concept as 'addictive'.",
                "Volunteering is a two-way street. While our beneficiaries receive support, our volunteers gain a sense of purpose, community, and perspective. Many of our volunteers report that their time with us serves as a grounding force in their otherwise hectic corporate lives.",
                "We have volunteers ranging from college students to retired professionals, each bringing unique skills to the table. Whether it's teaching, accountancy, field work, or social media management, there is a place for everyone to serve.",
                "Join us. You might just find that in giving your time, you receive so much more in return."
            ],
            author: "Emily Chen",
            date: "Dec 15, 2025",
            readTime: "4 min read",
            image: "/images/assets/unsplash_3.jpg",
            category: "Volunteer Stories",
            featured: false
        }
    ];

    const featuredPost = posts.find(post => post.featured);

    return (
        <div className="blog-page">
            <SEO
                title="Blog"
                description="Stay updated with the latest news, stories, and insights from Subikshaa Trust's humanitarian projects."
            />
            <div className="page-header blog-header">
                <div className="container">
                    <motion.span
                        className="sub-heading"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        News & Insights
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Our Blog
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="blog-intro-text"
                    >
                        Our blog shares articles on education, health, women empowerment, rural development, volunteer stories, and social awareness. These insights help donors and volunteers understand our mission and impact.
                    </motion.p>
                </div>
            </div>

            <Section className="blog-content">
                {/* Featured Post */}
                {featuredPost && (
                    <motion.div
                        className="featured-post"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="featured-badge">
                            <TrendingUp size={16} /> Featured Article
                        </div>
                        <div className="featured-image">
                            <img src={featuredPost.image} alt={featuredPost.title} />
                        </div>
                        <div className="featured-content">
                            <span className="category-tag">{featuredPost.category}</span>
                            <h2>{featuredPost.title}</h2>
                            <p>{featuredPost.excerpt}</p>
                            <div className="blog-meta">
                                <span><Calendar size={14} /> {featuredPost.date}</span>
                                <span><User size={14} /> {featuredPost.author}</span>
                                <span><Clock size={14} /> {featuredPost.readTime}</span>
                            </div>
                            <button
                                className="read-more-featured"
                                onClick={() => setSelectedPost(featuredPost)}
                            >
                                Read Full Article <ArrowRight size={18} />
                            </button>
                        </div>
                    </motion.div>
                )}

                {/* Blog Grid */}
                <div className="blog-grid">
                    {posts.filter(post => !post.featured).map((post, index) => (
                        <motion.div
                            key={post.id}
                            className="blog-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedPost(post)}
                        >
                            <div className="blog-image">
                                <img src={post.image} alt={post.title} />
                                <span className="category-tag">{post.category}</span>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <span><Calendar size={14} /> {post.date}</span>
                                    <span><Clock size={14} /> {post.readTime}</span>
                                </div>
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                                <div className="blog-footer">
                                    <span className="author"><User size={14} /> {post.author}</span>
                                    <button
                                        className="read-more"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedPost(post);
                                        }}
                                    >
                                        Read More <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Article Reader Modal */}
            <AnimatePresence>
                {selectedPost && (
                    <motion.div
                        className="blog-modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedPost(null)}
                    >
                        <motion.div
                            className="blog-modal-content"
                            initial={{ y: 100, opacity: 0, scale: 0.95 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 100, opacity: 0, scale: 0.95 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="close-modal-btn"
                                onClick={() => setSelectedPost(null)}
                            >
                                <X size={24} />
                            </button>

                            <div className="blog-modal-header">
                                <img src={selectedPost.image} alt={selectedPost.title} />
                                <div className="blog-modal-header-overlay">
                                    <span className="modal-category">{selectedPost.category}</span>
                                    <h2>{selectedPost.title}</h2>
                                    <div className="blog-meta modal-meta">
                                        <span><Calendar size={16} /> {selectedPost.date}</span>
                                        <span><User size={16} /> {selectedPost.author}</span>
                                        <span><Clock size={16} /> {selectedPost.readTime}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="blog-modal-body">
                                {selectedPost.content && selectedPost.content.map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Blog;
