import React from 'react';
import Section from '../components/Section';
import SEO from '../components/SEO';
import { Download, PieChart, TrendingUp, IndianRupee, FileText } from 'lucide-react';
import StaggeredHeading from '../components/StaggeredHeading';
import '../styles/Financials.css';

const Financials = () => {
    return (
        <div className="financials-page">
            <SEO
                title="Annual Reports & Financials | Audited NGO in India"
                description="Access our annual reports, audited financial statements, and impact summaries. We are a transparent and audited charitable trust in India."
            />

            <div className="page-header financials-header">
                <div className="container">
                    <span className="sub-heading">Transparency & Accountability</span>
                    <StaggeredHeading text="Annual Reports & Financials" />
                    <p>
                        Access our annual reports, audited financial statements, and impact summaries.
                        As a transparent and audited charitable trust in India, we share detailed information on revenue,
                        program efficiency and fund utilisation.
                    </p>
                </div>
            </div>

            <Section className="financial-overview">
                <div className="fin-stats">
                    <div className="fin-stat-box">
                        <div className="icon-wrapper"><IndianRupee /></div>
                        <h3>125+</h3>
                        <p>programs Successfully Conducted</p>
                    </div>
                    <div className="fin-stat-box">
                        <div className="icon-wrapper"><TrendingUp /></div>
                        <h3>85%</h3>
                        <p>Program Efficiency</p>
                    </div>
                </div>

                <div className="breakdown-section">
                    <h2>2025 Budget Allocation</h2>
                    <p className="section-desc" style={{ maxWidth: '800px', margin: '0 auto 2rem', textAlign: 'center', color: 'var(--text-light)' }}>
                        Our reports reflect our commitment to accountability and the trust placed in us by donors,
                        volunteers and partners across Tamil Nadu and India. All financials are independently audited
                        and available for download to maintain the highest standards of transparency.
                    </p>

                    <div className="breakdown-chart" style={{ display: 'flex', height: '64px', borderRadius: '50px', overflow: 'hidden', width: '100%', gap: '0' }}>
                        <div className="chart-bar" style={{ width: '80%', backgroundColor: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', borderRight: '2px solid white' }}>
                            <span>Programs (80%)</span>
                        </div>
                        <div className="chart-bar warning" style={{ width: '15%', backgroundColor: '#F59E0B', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', borderRight: '2px solid white' }}>
                            <span>Fundraising (17%)</span>
                        </div>
                        <div className="chart-bar danger" style={{ width: '5%', backgroundColor: '#EF4444', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '0.75rem' }} title="Management (5%)">
                            <span>Mgmt (3%)</span>
                        </div>
                    </div>
                </div>

                <div className="reports-section">
                    <h2 className="section-serif-title">Audited Financial Statements</h2>
                    <div className="reports-grid-custom">

                        {/* Card 1 - Featured */}
                        <div className="standard-report-card">
                            <div className="card-icon">
                                <FileText size={24} />
                            </div>
                            <div className="card-info">
                                <h3 className="serif-heading-sm">Latest Audited Financials</h3>
                                <span className="report-meta">FY 2024-2025 | PDF (2.5 MB)</span>
                                <a href="/documents/annual-report-2025.pdf" download className="download-link">
                                    Download Annual Report
                                </a>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="standard-report-card">
                            <div className="card-icon">
                                <Download size={24} />
                            </div>
                            <div className="card-info">
                                <h4 className="serif-heading-sm">2023 Annual Report</h4>
                                <span className="report-meta">PDF (1.8 MB)</span>
                                <a href="/documents/annual-report-2023.pdf" download className="download-link">Download Annual Reports</a>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="standard-report-card">
                            <div className="card-icon">
                                <Download size={24} />
                            </div>
                            <div className="card-info">
                                <h4 className="serif-heading-sm">FCRA Return (2024)</h4>
                                <span className="report-meta">PDF (1.2 MB)</span>
                                <a href="/documents/fcra-return-2024.pdf" download className="download-link">Download</a>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="standard-report-card">
                            <div className="card-icon">
                                <Download size={24} />
                            </div>
                            <div className="card-info">
                                <h4 className="serif-heading-sm">12A &amp; 80G Certificates</h4>
                                <span className="report-meta">PDF (0.8 MB)</span>
                                <a href="/documents/12a-80g-certificates.pdf" download className="download-link">Download</a>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="standard-report-card">
                            <div className="card-icon">
                                <Download size={24} />
                            </div>
                            <div className="card-info">
                                <h4 className="serif-heading-sm">Utilisation Certificate 2024</h4>
                                <span className="report-meta">PDF (1.0 MB)</span>
                                <a href="/documents/utilisation-certificate-2024.pdf" download className="download-link">Download</a>
                            </div>
                        </div>

                        {/* Card 6 */}
                        <div className="standard-report-card">
                            <div className="card-icon">
                                <Download size={24} />
                            </div>
                            <div className="card-info">
                                <h4 className="serif-heading-sm">Trust Registration Certificate</h4>
                                <span className="report-meta">PDF (0.5 MB)</span>
                                <a href="/documents/trust-registration.pdf" download className="download-link">Download</a>
                            </div>
                        </div>

                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Financials;
