import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    User, BookOpen, GraduationCap, IndianRupee, FileText, CheckCircle, 
    ChevronRight, ChevronLeft, Upload, AlertCircle, Loader2, 
    ArrowRightCircle, Award, Target, Shield, Users, Zap, Search, ClipboardCheck, Megaphone,
    ArrowRight, Info, Brain
} from 'lucide-react';
import SEO from '../components/SEO';
import Section from '../components/Section';
import '../styles/ScholarshipPortal.css';

const STEPS = [
    { title: 'Personal Profile', icon: <User size={20} /> },
    { title: 'Academic Record', icon: <BookOpen size={20} /> },
    { title: 'Financial Information', icon: <IndianRupee size={20} /> },
    { title: 'Document Vault', icon: <FileText size={20} /> },
    { title: 'Final Review', icon: <CheckCircle size={20} /> }
];

const ScholarshipPortal = () => {
    const [view, setView] = useState('landing');
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [applicationId, setApplicationId] = useState(null);
    const [message, setMessage] = useState({ type: '', text: '' });

    const [formData, setFormData] = useState({
        studentName: '',
        dateOfBirth: '',
        gender: '',
        aadhaarNumber: '',
        contactNumber: '',
        email: '',
        address: '',
        studentType: 'School',
        scholarshipCategory: 'General Achievement',
        institutionName: '',
        currentGradeOrCourse: '',
        previousYearMarks: '',
        ambition: '',
        guardianName: '',
        guardianOccupation: '',
        annualFamilyIncome: '',
        needStatement: '',
    });

    const [files, setFiles] = useState({
        photo: null,
        incomeCertificate: null,
        gradeSheet: null,
        idProof: null
    });

    // Auto-scroll to top on step change/view change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentStep, view]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const { name, files: uploadedFiles } = e.target;
        if (uploadedFiles[0]) {
            setFiles(prev => ({ ...prev, [name]: uploadedFiles[0] }));
        }
    };

    const validateCurrentStep = () => {
        if (currentStep === 1) {
            return formData.studentName && formData.dateOfBirth && formData.gender && 
                   formData.aadhaarNumber && formData.contactNumber && formData.email && formData.address;
        }
        if (currentStep === 2) {
            return formData.institutionName && formData.currentGradeOrCourse && formData.previousYearMarks && formData.ambition;
        }
        if (currentStep === 3) {
            return formData.guardianName && formData.guardianOccupation && formData.annualFamilyIncome && formData.needStatement;
        }
        return true;
    };

    const saveStepProgress = async (stage) => {
        if (!validateCurrentStep()) {
            setMessage({ type: 'error', text: '⚠️ Please fill in all required fields before proceeding.' });
            setTimeout(() => setMessage({ type: '', text: '' }), 3000);
            return;
        }
        setIsSubmitting(true);
        setMessage({ type: '', text: '' });
        try {
            let url = '/api/scholarships/start';
            let method = 'POST';
            let body = formData;

            if (applicationId) {
                url = `/api/scholarships/${applicationId}/stage`;
                method = 'PATCH';
                body = { stage, data: formData };
            }

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            const result = await res.json();
            if (result.success) {
                if (!applicationId) setApplicationId(result.data._id);
                
                // If stage 4 (documents), upload files separately
                if (stage === 4) {
                    await uploadDocuments(result.data._id || applicationId);
                }

                setCurrentStep(prev => prev + 1);
            } else {
                setMessage({ type: 'error', text: result.message });
            }
        } catch (err) {
            setMessage({ type: 'error', text: 'Network connection issue. Progress saved locally.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const uploadDocuments = async (id) => {
        const fData = new FormData();
        if (files.photo) fData.append('photo', files.photo);
        if (files.incomeCertificate) fData.append('incomeCertificate', files.incomeCertificate);
        if (files.gradeSheet) fData.append('gradeSheet', files.gradeSheet);
        if (files.idProof) fData.append('idProof', files.idProof);

        await fetch(`/api/scholarships/${id}/upload`, {
            method: 'POST',
            body: fData
        });
    };

    const handleFinalSubmit = async () => {
        await saveStepProgress(5);
        setMessage({ type: 'success', text: '✨ Application Submitted Professionally! You will receive a confirmation email shortly.' });
    };

    const renderLandingContent = () => (
        <div className="portal-landing-view">
            <Section className="landing-section">
                <h2>Scholarship Features</h2>
                <div className="features-grid">
                    <div className="feature-item">
                        <CheckCircle className="feature-icon" size={24} />
                        <p>Support meritorious students from all backgrounds with financial assistance for their education.</p>
                    </div>
                    <div className="feature-item">
                        <CheckCircle className="feature-icon" size={24} />
                        <p>Open for all students studying in any stream or current grade/degree.</p>
                    </div>
                    <div className="feature-item">
                        <CheckCircle className="feature-icon" size={24} />
                        <p>Awarded on a merit-cum-means basis to ensure aid reaches those who excel and need it most.</p>
                    </div>
                    <div className="feature-item">
                        <CheckCircle className="feature-icon" size={24} />
                        <p>More than 5,000 scholars are selected annually based on performance.</p>
                    </div>
                    <div className="feature-item">
                        <CheckCircle className="feature-icon" size={24} />
                        <p>Maximum scholarship amount of up to ₹2,00,000 spread over the course duration.</p>
                    </div>
                    <div className="feature-item">
                        <CheckCircle className="feature-icon" size={24} />
                        <p>Exclusive access to mentorship and networking opportunities beyond financial aid.</p>
                    </div>
                </div>
            </Section>

            <Section className="landing-section" style={{ backgroundColor: '#fdfdfb' }}>
                <h2>Scholarship Values</h2>
                <div className="values-grid">
                    <div className="value-card">
                        <div className="value-icon-circle"><GraduationCap size={32} /></div>
                        <div className="value-content">
                            <h4>Excellence</h4>
                            <p>Scholars who are committed to excellence, in spirit and action, in everything they pursue, both academic and non-academic.</p>
                        </div>
                    </div>
                    <div className="value-card">
                        <div className="value-icon-circle"><Award size={32} /></div>
                        <div className="value-content">
                            <h4>Leadership Potential</h4>
                            <p>Scholars who have the potential and ambition to become India's and the World's Leaders of Tomorrow.</p>
                        </div>
                    </div>
                    <div className="value-card">
                        <div className="value-icon-circle"><Shield size={32} /></div>
                        <div className="value-content">
                            <h4>Integrity</h4>
                            <p>Scholars who strive to be honest and forthright. They take accountability and responsibility for their actions.</p>
                        </div>
                    </div>
                    <div className="value-card">
                        <div className="value-icon-circle"><Users size={32} /></div>
                        <div className="value-content">
                            <h4>Community Commitment</h4>
                            <p>Scholars who show a moral force of character and instinct to lead in their communities for advancement.</p>
                        </div>
                    </div>
                    <div className="value-card">
                        <div className="value-icon-circle"><Zap size={32} /></div>
                        <div className="value-content">
                            <h4>Growth Mindset</h4>
                            <p>We are looking for scholars that dream big and have an ever-evolving spirit and a love for learning.</p>
                        </div>
                    </div>
                    <div className="value-card">
                        <div className="value-icon-circle"><Target size={32} /></div>
                        <div className="value-content">
                            <h4>Courage</h4>
                            <p>Scholars who are resilient, patient, and tenacious. Students who embrace challenges with passion.</p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="landing-section">
                <h2>Eligibility Criteria</h2>
                <div className="eligibility-container">
                    <ul className="eligibility-list">
                        <li className="eligibility-item">
                            <span className="eligibility-badge">Nationality</span>
                            <span className="eligibility-text">Applicant must be a citizen of India.</span>
                        </li>
                        <li className="eligibility-item">
                            <span className="eligibility-badge">Academics</span>
                            <span className="eligibility-text">Minimum 60% marks or equivalent CGPA in the previous academic year.</span>
                        </li>
                        <li className="eligibility-item">
                            <span className="eligibility-badge">Status</span>
                            <span className="eligibility-text">Must be a regular student in a recognized School or College/University.</span>
                        </li>
                        <li className="eligibility-item">
                            <span className="eligibility-badge">Income</span>
                            <span className="eligibility-text">Family annual income from all sources should not exceed ₹3,00,000.</span>
                        </li>
                        <li className="eligibility-item">
                            <span className="eligibility-badge">Verification</span>
                            <span className="eligibility-text">Valid Aadhaar card and identity proof are mandatory for all applicants.</span>
                        </li>
                    </ul>
                </div>

                <div className="landing-cta">
                    <h3>Ready to transform your future?</h3>
                    <p>Apply for the Subikshaa Trust Scholarship 2025-26 today.</p>
                    <button className="btn btn-primary btn-xl" onClick={() => setView('apply')}>
                        Start My Application <ArrowRight size={20} style={{ marginLeft: '10px' }} />
                    </button>
                </div>
            </Section>
        </div>
    );

    const renderProgress = () => (
        <div className="portal-progress">
            {STEPS.map((step, idx) => (
                <div key={idx} className={`progress-item ${currentStep > idx + 1 ? 'completed' : ''} ${currentStep === idx + 1 ? 'active' : ''}`}>
                    <div className="icon-wrapper">
                        {currentStep > idx + 1 ? <CheckCircle size={18} /> : step.icon}
                    </div>
                    <span>{step.title}</span>
                    {idx < STEPS.length - 1 && <div className="progress-line"></div>}
                </div>
            ))}
        </div>
    );

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="form-step">
                        <h3>Personal Profile</h3>
                        <div className="input-grid">
                            <div className="form-group">
                                <label>Full Name (as per Aadhaar)</label>
                                <input type="text" name="studentName" value={formData.studentName} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label>Date of Birth</label>
                                <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label>Gender</label>
                                <select name="gender" value={formData.gender} onChange={handleInputChange}>
                                    <option value="">Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Aadhaar Number</label>
                                <input type="text" name="aadhaarNumber" value={formData.aadhaarNumber} onChange={handleInputChange} placeholder="12-digit UID" required />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label>Contact Number</label>
                                <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} required />
                            </div>
                        </div>
                        <div className="form-group full-width">
                            <label>Residential Address</label>
                            <textarea name="address" value={formData.address} onChange={handleInputChange} rows="3"></textarea>
                        </div>
                    </motion.div>
                );
            case 2:
                return (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="form-step">
                        <h3>Academics & Merit</h3>
                        <div className="input-grid">
                            <div className="form-group">
                                <label>Student Type</label>
                                <select name="studentType" value={formData.studentType} onChange={handleInputChange}>
                                    <option value="School">School Student</option>
                                    <option value="College">College Student</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Scholarship Category</label>
                                <select name="scholarshipCategory" value={formData.scholarshipCategory} onChange={handleInputChange}>
                                    <option value="Merit-based">Merit-based</option>
                                    <option value="Need-based">Need-based</option>
                                    <option value="Sports">Sports Scholarship</option>
                                    <option value="General Achievement">General Achievement</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Institution Name</label>
                                <input type="text" name="institutionName" value={formData.institutionName} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label>{formData.studentType === 'School' ? 'Current Standard' : 'Course & Year'}</label>
                                <input type="text" name="currentGradeOrCourse" value={formData.currentGradeOrCourse} onChange={handleInputChange} placeholder="e.g. 10th Std or B.Tech 2nd Year" required />
                            </div>
                            <div className="form-group">
                                <label>Previous Year Marks (%)</label>
                                <input type="number" name="previousYearMarks" value={formData.previousYearMarks} onChange={handleInputChange} required />
                            </div>
                        </div>
                        <div className="form-group full-width">
                            <label>What is your Future Ambition?</label>
                            <textarea name="ambition" value={formData.ambition} onChange={handleInputChange} rows="2" placeholder="e.g. To become a doctor and serve the community"></textarea>
                        </div>
                    </motion.div>
                );
            case 3:
                return (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="form-step">
                        <h3>Family & Financials</h3>
                        <div className="input-grid">
                            <div className="form-group">
                                <label>Parent/Guardian Name</label>
                                <input type="text" name="guardianName" value={formData.guardianName} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label>Guardian Occupation</label>
                                <input type="text" name="guardianOccupation" value={formData.guardianOccupation} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label>Annual Family Income (₹)</label>
                                <input type="number" name="annualFamilyIncome" value={formData.annualFamilyIncome} onChange={handleInputChange} required />
                            </div>
                        </div>
                        <div className="form-group full-width">
                            <label>Why do you need this scholarship? (Need Statement)</label>
                            <textarea name="needStatement" value={formData.needStatement} onChange={handleInputChange} rows="4"></textarea>
                        </div>
                    </motion.div>
                );
            case 4:
                return (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="form-step">
                        <h3>Document Vault</h3>
                        <p className="step-info"><AlertCircle size={14} /> Please upload clear files in PDF or JPG format (Max 2MB).</p>
                        <div className="upload-grid">
                            <div className="upload-box">
                                <label><GraduationCap size={18} /> Student Photo</label>
                                <input type="file" name="photo" onChange={handleFileChange} accept=".jpg,.jpeg,.png" />
                                {files.photo && <span className="file-name">{files.photo.name}</span>}
                            </div>
                            <div className="upload-box">
                                <label><IndianRupee size={18} /> Income Certificate</label>
                                <input type="file" name="incomeCertificate" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg" />
                                {files.incomeCertificate && <span className="file-name">{files.incomeCertificate.name}</span>}
                            </div>
                            <div className="upload-box">
                                <label><FileText size={18} /> Previous Grade Sheet</label>
                                <input type="file" name="gradeSheet" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg" />
                                {files.gradeSheet && <span className="file-name">{files.gradeSheet.name}</span>}
                            </div>
                            <div className="upload-box">
                                <label><User size={18} /> ID Proof (Aadhaar)</label>
                                <input type="file" name="idProof" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg" />
                                {files.idProof && <span className="file-name">{files.idProof.name}</span>}
                            </div>
                        </div>
                    </motion.div>
                );
            case 5:
                return (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="form-step review-step">
                        <h3>Final Review</h3>
                        <div className="review-summary">
                            <div className="review-item"><strong>Student:</strong> {formData.studentName}</div>
                            <div className="review-item"><strong>Type:</strong> {formData.studentType} ({formData.scholarshipCategory})</div>
                            <div className="review-item"><strong>Ambition:</strong> {formData.ambition}</div>
                            <div className="review-item"><strong>Email:</strong> {formData.email}</div>
                        </div>
                        <div className="declaration">
                            <label>
                                <input type="checkbox" required /> I hereby declare that the information provided is true to the best of my knowledge.
                            </label>
                        </div>
                    </motion.div>
                );
            default:
                return null;
        }
    };

    if (currentStep > 5) {
        return (
            <div className="scholarship-portal">
                <div className="container success-view">
                    <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                        <CheckCircle size={80} color="var(--success-color)" />
                        <h2>Application Submitted!</h2>
                        <p>{message.text}</p>
                        <button className="btn btn-primary" onClick={() => window.location.href = '/'}>Return Home</button>
                    </motion.div>
                </div>
            </div>
        );
    }

    return (
        <div className="scholarship-portal">
            <SEO title="Scholarship Portal | Subikshaa Trust" description="Apply for educational scholarships for school and college students." />
            
            <div className="portal-header">
                <div className="container">
                    <span className="trust-badge">Subikshaa Trust</span>
                    <h1>Scholarship Registration Gateway</h1>
                    <p>Empowering students to achieve their dreams through educational support.</p>
                </div>
            </div>

            {view === 'landing' ? (
                renderLandingContent()
            ) : (
                <Section>
                    <div className="container">
                        <div className="portal-card">
                            <button className="back-to-info" onClick={() => setView('landing')}>
                                <Info size={14} /> View Information & Process
                            </button>
                            {renderProgress()}
                            
                            <div className="portal-form-content">
                                {message.text && (
                                    <div className={`alert alert-${message.type}`}>
                                        {message.text}
                                    </div>
                                )}
                                
                                {renderStepContent()}

                                <div className="portal-actions">
                                    {currentStep > 1 && (
                                        <button className="btn btn-outline" onClick={() => setCurrentStep(prev => prev - 1)} disabled={isSubmitting}>
                                            <ChevronLeft size={18} /> Previous
                                        </button>
                                    )}
                                    <div style={{ flex: 1 }}></div>
                                    {currentStep < 5 ? (
                                        <button className="btn btn-primary" onClick={() => saveStepProgress(currentStep)} disabled={isSubmitting}>
                                            {isSubmitting ? <Loader2 className="spinner" /> : <>Next Step <ChevronRight size={18} /></>}
                                        </button>
                                    ) : (
                                        <button className="btn btn-success" onClick={handleFinalSubmit} disabled={isSubmitting}>
                                            {isSubmitting ? <Loader2 className="spinner" /> : <>Final Submit <CheckCircle size={18} /></>}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            )}
        </div>
    );
};

export default ScholarshipPortal;
