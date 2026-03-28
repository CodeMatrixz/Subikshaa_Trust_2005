import React from 'react';
import Section from '../components/Section';
import { Quote } from 'lucide-react';
import StaggeredHeading from '../components/StaggeredHeading';
import '../styles/Impact.css';

const Impact = () => {
    const impactStories = [
        {
            category: "Healthcare",
            title: "Bridging the Gap in Healthcare",
            date: "January 15, 2026",
            content: "In the remote village of Battigudem, healthcare was once a luxury reserved for the few who could afford the long journey to the city. For years, minor ailments would escalate into life-threatening conditions simply due to a lack of access. That changed when Subikshaa Trust’s Mobile Medical Unit (MMU) arrived. \n\nOne of the first patients was 8-year-old Ravi, who had been suffering from a persistent fever. His parents, daily wage laborers, couldn't afford a day off to take him to a hospital. The MMU doctor diagnosed him with a severe infection that could have been fatal if left untreated. With immediate medication and follow-up care provided right at his doorstep, Ravi made a full recovery. \n\nToday, the MMU serves over 12 villages in the region, providing regular checkups, maternal care, and emergency response. It hasn't just brought medicine; it has brought hope and health security to thousands who were previously invisible to the healthcare system.",
            image: "/images/assets/unsplash_117.jpg"
        },
        {
            category: "Education",
            title: "The Holiest Offering: Education in Vanageri",
            date: "December 10, 2025",
            content: "Vanageri was known for its ancient temples, but for generations, its children remained trapped in a cycle of poverty and illiteracy. The community believed that labor was the only path for their youth. We challenged this narrative not by disrespecting tradition, but by weaving education into it. \n\nWe introduced the 'Vidya Daan' (Gift of Knowledge) initiative, positioning education as a sacred duty. We started with a small community learning center in the temple courtyard. Slowly, skepticism turned into curiosity, and curiosity into commitment. \n\nNow, Vanageri boasts a 100% school enrollment rate. The village elders, who once prioritized work, now vigilantly ensure every child studies. The first batch of students has just entered college, breaking a centuries-old ceiling. In Vanageri, books share the same reverence as prayers, and the future is brighter than ever.",
            image: "/images/assets/unsplash_118.jpg"
        },
        {
            category: "Livelihood",
            title: "Women Leading Regenerative Tourism",
            date: "November 22, 2025",
            content: "In the lush valleys of Coorg, tourism was booming, but the local women were left behind, often relegated to menial jobs. We saw an opportunity to change this dynamic through our 'Regenerative Tourism' program. \n\nWe trained a group of 50 women in hospitality, eco-guiding, and sustainable homestay management. But we didn't stop there. We helped them form a cooperative to manage their own enterprises. \n\nToday, these women are not just employees; they are entrepreneurs and guardians of their land. They lead nature walks that educate tourists on local flora, manage plastic-free homestays, and sell artisanal products directly to visitors. Their income has tripled, but more importantly, their voice in community decision-making has strengthened. They are proving that economic growth and environmental stewardship can go hand in hand.",
            image: "/images/assets/unsplash_119.jpg"
        },
        {
            category: "WaSH",
            title: "Sanitation: Myths to Meaningful Change",
            date: "October 05, 2025",
            content: "Building toilets is easy; changing mindsets is hard. In the district of Sivaganga, open defecation was deeply rooted in cultural habit and myth. Many toilets built by previous government schemes lay abandoned, used as storerooms. \n\nSubikshaa Trust took a different approach. We didn't start with bricks; we started with conversations. We formed 'Community Vigilance Committees' led by local youth and women to discuss hygiene and dignity. We used street plays and workshops to debunk myths about sanitation. \n\nOnly when the demand came from the community did we build the facilities. The result? 100% usage and maintenance of the new sanitation blocks. Diarrheal diseases have dropped by 60% in the last year alone. It’s a powerful reminder that true infrastructure is built in the mind before it is built on the ground.",
            image: "/images/assets/unsplash_120.jpg"
        }
    ];

    const testimonials = [
        {
            name: "Maria Gonzalez",
            role: "Scholarship Recipient",
            quote: "This scholarship didn't just pay for my books; it paid for my future. I am now the first person in my family to attend university.",
            image: "/images/assets/unsplash_123.jpg"
        },
        {
            name: "John Doe",
            role: "Farming Program",
            quote: "The agricultural training helped me double my crop yield. Now I can feed my family and sell the surplus at the market.",
            image: "/images/assets/unsplash_124.jpg"
        },
        {
            name: "Amina K.",
            role: "Healthcare Beneficiary",
            quote: "The mobile clinic saved my baby's life. We had no doctor for miles, but Subikshaa Trust came to us just in time.",
            image: "/images/assets/unsplash_125.jpg"
        }
    ];

    return (
        <div className="impact-page">
            <div className="page-header impact-header">
                <div className="container">
                    <span className="sub-heading">Real Impact</span>
                    <StaggeredHeading text="Success Stories" />
                    <p>See the real lives changed through your generosity and our programs.</p>
                </div>
            </div>

            <Section className="impact-metrics-section">
                <div className="metrics-grid">
                    <div className="metric-box">
                        <span className="metric-num">98%</span>
                        <span className="metric-lbl">Graduation Rate</span>
                    </div>
                    <div className="metric-box">
                        <span className="metric-num">500k</span>
                        <span className="metric-lbl">Meals Served</span>
                    </div>
                    <div className="metric-box">
                        <span className="metric-num">50+</span>
                        <span className="metric-lbl">Villages Helped</span>
                    </div>
                </div>
            </Section>

            <Section className="impact-stories-section">
                <div className="impact-stories-feed">
                    {impactStories.map((story, i) => (
                        <div key={i} className={`impact-story-row ${i % 2 === 1 ? 'reverse' : ''}`}>
                            <div className="story-image-col">
                                <div className="img-frame">
                                    <img src={story.image} alt={story.title} />
                                    <span className="story-badge">{story.category}</span>
                                </div>
                            </div>
                            <div className="story-content-col">
                                <span className="story-date">{story.date}</span>
                                <h3>{story.title}</h3>
                                {story.content.split('\n\n').map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section className="testimonials-section bg-light">
                <div className="text-center mb-5">
                    <h2>Voices of Change</h2>
                </div>
                <div className="testimonials-grid">
                    {testimonials.map((story, i) => (
                        <div key={i} className="testimonial-card">
                            <div className="quote-icon"><Quote size={32} /></div>
                            <p className="quote-text">"{story.quote}"</p>
                            <div className="story-meta">
                                <img src={story.image} alt={story.name} />
                                <div>
                                    <h5>{story.name}</h5>
                                    <span>{story.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Impact;
