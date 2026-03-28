import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StaggeredHeading from '../components/StaggeredHeading';
import Section from '../components/Section';
import SEO from '../components/SEO';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import '../styles/FAQ.css';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            category: "General & Legal",
            questions: [
                {
                    q: "Is this a registered NGO in India?",
                    a: "Yes, we are a registered NGO in India with 12A, 80G and FCRA approvals, ensuring transparency and legal compliance."
                },
                {
                    q: "What is Subikshaa Trust and what do you do?",
                    a: "Subikshaa Trust is a non-profit organization dedicated to making a lasting impact through charitable initiatives. We focus on education, healthcare, clean water, and food security programs to help communities in need."
                },
                {
                    q: "What causes does your NGO support?",
                    a: "Our NGO works in education, healthcare, women empowerment, child welfare, old age care and community development."
                },
                {
                    q: "Where does Subikshaa Trust operate?",
                    a: "We operate in multiple regions, focusing on underserved communities that need support the most, with specific localized programs in Chennai and Madurai."
                }
            ]
        },
        {
            category: "Local Community & Impact (Voice Search)",
            questions: [
                {
                    q: "Which NGO near me helps poor children in Tamil Nadu?",
                    a: "We are a registered NGO in Tamil Nadu supporting education and child welfare across Chennai, Madurai, and Coimbatore."
                },
                {
                    q: "How can I donate online to a trusted NGO in India?",
                    a: "You can donate securely through our website. We are a 12A, 80G & FCRA registered NGO in India."
                },
                {
                    q: "Is there a women empowerment NGO near me?",
                    a: "Yes. Our women skill development programs operate across Tamil Nadu, helping women gain sustainable livelihoods."
                },
                {
                    q: "Can I volunteer with an NGO near me this weekend?",
                    a: "Yes. We offer short-term and long-term volunteering opportunities in Madurai."
                }
            ]
        },
        {
            category: "Donations",
            questions: [
                {
                    q: "How can I donate to an NGO in Chennai?",
                    a: "You can donate online through our secure donation page. We are a 12A & 80G registered charitable trust in Chennai."
                },
                {
                    q: "Are donations eligible for tax exemption?",
                    a: "Yes, all donations to our NGO are eligible for 50% or 100% tax exemption under Section 80G of the Income Tax Act, 1961. We are also registered under Section 12A, ensuring compliance with Indian tax regulations."
                },
                {
                    q: "How are donations used?",
                    a: "100% of your donation goes directly to our programs. We maintain complete transparency with detailed financial reports available on our Financials page."
                },
                {
                    q: "Can I make a recurring donation?",
                    a: "Absolutely! We offer monthly, quarterly, and annual recurring donation options. Recurring donations help us plan long-term programs and make a sustained impact."
                }
            ]
        },
        {
            category: "Madurai Branch (SS Colony)",
            questions: [
                {
                    q: "Is there a genuine NGO in Madurai I can trust?",
                    a: "Yes. We are a genuine NGO in Madurai, operating from SS Colony with full legal registrations and audited financials."
                },
                {
                    q: "What causes does your NGO support in Madurai?",
                    a: "We support education, healthcare, women skill development, child welfare, and rural development in Madurai and nearby villages."
                },
                {
                    q: "How do I volunteer with an NGO in Madurai?",
                    a: "You can apply through our volunteer page to volunteer with an NGO in Madurai for field work, events, or skill-based roles."
                }
            ]
        },
        {
            category: "Volunteering",
            questions: [
                {
                    q: "Can I volunteer with an NGO in Tamil Nadu?",
                    a: "Yes, we offer NGO volunteer opportunities in Chennai, Madurai and Coimbatore for individuals and groups."
                },
                {
                    q: "What volunteer opportunities are available?",
                    a: "We offer various roles including Teaching Assistant, Event Coordinator, Community Outreach, and more."
                },
                {
                    q: "Do I need any special skills to volunteer?",
                    a: "Not necessarily! While some positions may require specific skills, we have opportunities for everyone. We provide training and support to all our volunteers."
                }
            ]
        }
    ];

    const toggleFAQ = (categoryIndex, questionIndex) => {
        const index = `${categoryIndex}-${questionIndex}`;
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-page">
            <SEO
                title="FAQ"
                description="Frequently asked questions about Subikshaa Trust, our programs, donations, and how you can get involved."
            />

            <div className="page-header faq-header">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <HelpCircle size={48} className="header-icon" />
                        <span className="sub-heading">Have Questions?</span>
                        <StaggeredHeading text="Frequently Asked Questions" />
                        <p>Find answers to common questions about our organization, programs, and how you can help.</p>
                    </motion.div>
                </div>
            </div>

            <Section className="faq-content">
                <div className="faq-container">
                    {faqs.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            className="faq-category"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                        >
                            <h2 className="category-title">{category.category}</h2>
                            <div className="faq-list">
                                {category.questions.map((faq, qIndex) => {
                                    const index = `${catIndex}-${qIndex}`;
                                    const isOpen = openIndex === index;

                                    return (
                                        <motion.div
                                            key={qIndex}
                                            className={`faq-item ${isOpen ? 'active' : ''}`}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: qIndex * 0.05 }}
                                        >
                                            <button
                                                className="faq-question"
                                                onClick={() => toggleFAQ(catIndex, qIndex)}
                                            >
                                                <span>{faq.q}</span>
                                                <ChevronDown
                                                    className={`chevron ${isOpen ? 'rotate' : ''}`}
                                                    size={20}
                                                />
                                            </button>
                                            <AnimatePresence>
                                                {isOpen && (
                                                    <motion.div
                                                        className="faq-answer"
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <p>{faq.a}</p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Contact CTA */}
                <motion.div
                    className="faq-cta"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <MessageCircle size={40} />
                    <h3>Still have questions?</h3>
                    <p>Can't find the answer you're looking for? Our team is here to help.</p>
                    <a href="/contact" className="btn btn-primary">Contact Us</a>
                </motion.div>
            </Section>
        </div>
    );
};

export default FAQ;
