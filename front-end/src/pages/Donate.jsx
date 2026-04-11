import React, { useState } from 'react';
import Section from '../components/Section';
import { CreditCard, Calendar, CheckSquare } from 'lucide-react';
import StaggeredHeading from '../components/StaggeredHeading';
import '../styles/Donate.css';

const Donate = () => {
    const [giveType, setGiveType] = useState('once'); // once, monthly
    const [amount, setAmount] = useState(500);
    const [customAmount, setCustomAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('credit_card');
    const [transactionId, setTransactionId] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

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

        setIsSubmitting(true);
        try {
            const response = await fetch('/api/donations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: finalAmount,
                    type: giveType,
                    paymentMethod: paymentMethod,
                    transactionId: transactionId || `TXN-${Date.now()}`
                }),
            });

            const result = await response.json();
            if (result.success) {
                alert('Thank you for your donation! We have received your contribution intent.');
                setTransactionId('');
            } else {
                alert(result.message || 'Donation failed. Please try again.');
            }
        } catch (error) {
            console.error('Donation error:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const getUpiLink = () => {
        const finalAmount = customAmount || amount;
        const upiId = "subikshaatrust@upi"; // Placeholder
        const name = "Subikshaa Trust";
        return `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${finalAmount}&cu=INR`;
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
                                <label className={`payment-option ${paymentMethod === 'credit_card' ? 'active' : ''}`}>
                                    <input 
                                        type="radio" 
                                        name="payment" 
                                        value="credit_card"
                                        checked={paymentMethod === 'credit_card'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    /> 
                                    <span>Credit Card</span>
                                </label>
                                <label className={`payment-option ${paymentMethod === 'paypal' ? 'active' : ''}`}>
                                    <input 
                                        type="radio" 
                                        name="payment" 
                                        value="paypal"
                                        checked={paymentMethod === 'paypal'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    /> 
                                    <span>PayPal</span>
                                </label>
                                <label className={`payment-option ${paymentMethod === 'upi' ? 'active' : ''}`}>
                                    <input 
                                        type="radio" 
                                        name="payment" 
                                        value="upi"
                                        checked={paymentMethod === 'upi'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    /> 
                                    <span>UPI</span>
                                </label>
                            </div>

                            {paymentMethod === 'upi' && (
                                <div className="upi-details-container animate-fade-in">
                                    <div className="upi-qr-box">
                                        <div className="qr-placeholder">
                                            {/* Pre-generating a dynamic QR for better UX */}
                                            <img 
                                                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(getUpiLink())}`} 
                                                alt="UPI QR Code" 
                                            />
                                        </div>
                                        <p className="upi-id-text">UPI ID: <strong>subikshaatrust@upi</strong></p>
                                    </div>
                                    <div className="upi-actions">
                                        <a href={getUpiLink()} className="btn btn-outline btn-upi-app">
                                            Pay via UPI App
                                        </a>
                                        <div className="txn-input-box">
                                            <input 
                                                type="text" 
                                                placeholder="Enter Transaction ID (Optional)" 
                                                value={transactionId}
                                                onChange={(e) => setTransactionId(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            <button 
                                className="btn btn-primary btn-block btn-lg" 
                                onClick={handleDonate}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Processing...' : `Contribute ₹${customAmount || amount} ${giveType === 'monthly' ? '/ month' : ''}`}
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
