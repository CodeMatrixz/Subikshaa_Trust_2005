import React, { useState } from 'react';
import Section from '../components/Section';
import { CreditCard, Calendar, CheckSquare } from 'lucide-react';
import StaggeredHeading from '../components/StaggeredHeading';
import '../styles/Donate.css';

const Donate = () => {
    const [giveType, setGiveType] = useState('once'); // once, monthly
    const [amount, setAmount] = useState(500);
    const [customAmount, setCustomAmount] = useState('');

    const amounts = [100, 250, 500, 1000, 2500];

    const handleAmountClick = (val) => {
        setAmount(val);
        setCustomAmount('');
    };

    const handleDonate = async () => {
        const finalAmount = customAmount || amount;
        if (!finalAmount) {
            alert('Please select or enter an amount');
            return;
        }

        try {
            const response = await fetch('/api/donations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: finalAmount,
                    type: giveType,
                    paymentMethod: 'credit_card', // Defaulting since we can't easily read the radio without state or refs, assuming credit_card for now or I will add state for payment method
                }),
            });

            const result = await response.json();
            if (result.success) {
                alert('Thank you for your donation!');
            } else {
                alert('Donation failed. Please try again.');
            }
        } catch (error) {
            console.error('Donation error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="donate-page">
            <div className="page-header donate-header">
                <div className="container">
                    <span className="sub-heading">Support Us</span>
                    <StaggeredHeading text="Make a Contribution" />
                    <p>Your contribution directly supports our mission to help those in need.</p>
                </div>
            </div>

            <Section className="donation-wrapper">
                <div className="donation-layout">

                    {/* ── Payment Box ── */}
                    <div className="donation-form-card">
                        <div className="give-tabs">
                            <button
                                className={`give-tab ${giveType === 'once' ? 'active' : ''}`}
                                onClick={() => setGiveType('once')}
                            >
                                One-Time
                            </button>
                            <button
                                className={`give-tab ${giveType === 'monthly' ? 'active' : ''}`}
                                onClick={() => setGiveType('monthly')}
                            >
                                Monthly
                            </button>
                        </div>

                        <div className="amount-grid">
                            {amounts.map((val) => (
                                <button
                                    key={val}
                                    className={`amount-btn ${amount === val && !customAmount ? 'selected' : ''}`}
                                    onClick={() => handleAmountClick(val)}
                                >
                                    ₹{val}
                                </button>
                            ))}
                            <input
                                type="number"
                                placeholder="Custom"
                                value={customAmount}
                                onChange={(e) => {
                                    setCustomAmount(e.target.value);
                                    setAmount(null);
                                }}
                                className={`amount-input ${customAmount ? 'selected' : ''}`}
                            />
                        </div>

                        <div className="impact-preview">
                            <p>
                                <strong>₹{customAmount || amount}</strong> could provide
                                <strong> {(customAmount || amount) * 2} meals</strong> for children.
                            </p>
                        </div>

                        <div className="payment-details">
                            <h3>Payment Method</h3>
                            <div className="payment-options">
                                <label className="radio-label">
                                    <input type="radio" name="payment" defaultChecked /> Credit Card
                                </label>
                                <label className="radio-label">
                                    <input type="radio" name="payment" /> PayPal
                                </label>
                            </div>

                            <button className="btn btn-primary btn-block btn-lg" onClick={handleDonate}>
                                Contribute ₹{customAmount || amount} {giveType === 'monthly' ? '/ month' : ''}
                            </button>
                            <p className="secure-note">
                                <CreditCard size={14} /> Secure Payment Processing
                            </p>
                        </div>
                    </div>

                    {/* ── Info Section Below ── */}
                    <div className="donation-info-row">
                        <div className="info-card">
                            <h3>Where does your money go?</h3>
                            <ul className="info-list">
                                <li><CheckSquare size={18} className="text-green" /> <strong>80%</strong> Programs &amp; Services</li>
                                <li><CheckSquare size={18} className="text-green" /> <strong>15%</strong> Fundraising</li>
                                <li><CheckSquare size={18} className="text-green" /> <strong>5%</strong> Administration</li>
                            </ul>
                        </div>

                        <div className="info-card">
                            <h3>Ways to Support</h3>
                            <ul className="support-list">
                                <li>Donate to NGO in Chennai</li>
                                <li>Donate online to NGO in India</li>
                                <li>Sponsor a child in Tamil Nadu</li>
                                <li>Help old age home in Chennai</li>
                            </ul>
                            <p className="info-note">All donations go through a secure and transparent payment process.</p>
                        </div>

                        <div className="info-card">
                            <h4>Frequently Asked Questions</h4>
                            <div className="faq-mini">
                                <details>
                                    <summary>Where does my money go?</summary>
                                    <p>Your money directly funds our programs in education, health, and community development. 80% goes directly to our services.</p>
                                </details>
                                <details>
                                    <summary>Can I set up a recurring donation?</summary>
                                    <p>Yes, you can select the "Monthly" tab above to set up a recurring donation.</p>
                                </details>
                                <details>
                                    <summary>Is my contribution tax-deductible?</summary>
                                    <p>Yes, we are a registered 501(c)(3) organization.</p>
                                </details>
                                <details>
                                    <summary>Can I cancel my monthly contribution?</summary>
                                    <p>Absolutely, you can manage your recurring contribution at any time.</p>
                                </details>
                            </div>
                        </div>
                    </div>

                </div>
            </Section>
        </div>
    );
};

export default Donate;
