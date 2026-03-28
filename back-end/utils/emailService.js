const nodemailer = require('nodemailer');

// Create a transporter using environment variables
// Defaults to a mock transport if credentials aren't provided
const createTransporter = () => {
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        return nodemailer.createTransport({
            service: process.env.EMAIL_SERVICE || 'gmail', // Default to gmail if not specified
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
    } else {
        // Return a mock object if no credentials
        console.log('EMAIL_USER or EMAIL_PASS not set. Using mock email service.');
        return null;
    }
};

const sendEmail = async ({ to, subject, html }) => {
    try {
        const transporter = createTransporter();

        if (!transporter) {
            console.log(`[MOCK EMAIL] To: ${to}, Subject: ${subject}`);
            return true;
        }

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to,
            subject,
            html
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        return false; // Don't crash the server, just return failure
    }
};

module.exports = sendEmail;
