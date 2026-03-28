import React from 'react';
import Section from '../components/Section';
import { FileText, Download } from 'lucide-react';
import StaggeredHeading from '../components/StaggeredHeading';
import '../styles/Resources.css';

const Resources = () => {
    return (
        <div className="resources-page">
            <div className="page-header resources-header">
                <div className="container">
                    <span className="sub-heading">Knowledge Center</span>
                    <StaggeredHeading text="Resources" />
                    <p>Download educational guides, volunteer toolkits, and impact reports from a certified NGO in India.</p>
                </div>
            </div>

            <Section className="resources-content">
                <div className="resources-grid">
                    <div className="resource-category">
                        <h3>Educational Guides</h3>
                        <ul className="resource-list">
                            <li><a href="/documents/community-hygiene-guide.pdf" download><FileText size={18} /> Community Hygiene Guide <Download size={14} className="ml-auto" /></a></li>
                            <li><a href="/documents/sustainable-farming-basics.pdf" download><FileText size={18} /> Sustainable Farming Basics <Download size={14} className="ml-auto" /></a></li>
                            <li><a href="/documents/financial-literacy-toolkit.pdf" download><FileText size={18} /> Financial Literacy Toolkit <Download size={14} className="ml-auto" /></a></li>
                        </ul>
                    </div>

                    <div className="resource-category">
                        <h3>Volunteer Toolkits</h3>
                        <ul className="resource-list">
                            <li><a href="/documents/new-volunteer-handbook.pdf" download><FileText size={18} /> New Volunteer Handbook <Download size={14} className="ml-auto" /></a></li>
                            <li><a href="/documents/fundraising-kit.pdf" download><FileText size={18} /> Fundraising Kit <Download size={14} className="ml-auto" /></a></li>
                            <li><a href="/documents/social-media-assets.zip" download><FileText size={18} /> Social Media Assets <Download size={14} className="ml-auto" /></a></li>
                        </ul>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Resources;
