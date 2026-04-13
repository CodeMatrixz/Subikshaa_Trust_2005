const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const ScholarshipApplication = require('../models/ScholarshipApplication');
const sendEmail = require('../utils/emailService');

// Configure Local Mutler Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = 'uploads/scholarships';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        cb(null, `${req.params.id || 'new'}-${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|pdf/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);
        if (mimetype && extname) return cb(null, true);
        cb(new Error('Error: Only .pdf, .jpg, .jpeg, and .png formats are allowed!'));
    }
});

// Helper for final submission email
const sendFinalEmail = async (application) => {
    const adminEmail = process.env.EMAIL_USER || 'subikshaatrust.org@gmail.com';
    const subject = `Scholarship Application Submitted: ${application.studentName}`;
    const html = `<h3>Application Confirmed!</h3>
                  <p>Hi ${application.studentName},</p>
                  <p>Thank you for applying for the ${application.scholarshipCategory} scholarship with Subikshaa Trust. Your application has been successfully submitted and is now under official review.</p>
                  <p><strong>Application Reference:</strong> ${application._id}</p>
                  <p>We will contact you via email or phone if further information is required.</p>`;

    // Send to Student
    await sendEmail({ to: application.email, subject, html });
    
    // Notify Admin
    await sendEmail({ 
        to: adminEmail, 
        subject: `New Scholarship Application: ${application.studentName}`,
        html: `<p>A new ${application.scholarshipCategory} application has been submitted by ${application.studentName}.</p>
               <p><a href="${process.env.ADMIN_URL}">View in Admin Panel</a></p>`
    });
};

// 1. POST /api/scholarships/start - Initial Stage
router.post('/start', async (req, res) => {
    try {
        const application = new ScholarshipApplication({
            ...req.body,
            currentStage: 1
        });
        await application.save();
        res.status(201).json({ success: true, data: application });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
});

// 2. PATCH /api/scholarships/:id/stage - Update Progress
router.patch('/:id/stage', async (req, res) => {
    try {
        const { stage, data } = req.body;
        const application = await ScholarshipApplication.findByIdAndUpdate(
            req.params.id,
            { ...data, currentStage: stage },
            { new: true }
        );
        
        if (!application) return res.status(404).json({ success: false, message: 'Not found' });

        // Trigger email ONLY on final submission
        if (stage === 5) {
            application.isSubmitted = true;
            await application.save();
            await sendFinalEmail(application);
        }

        res.json({ success: true, data: application });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
});

// 3. POST /api/scholarships/:id/upload - Handle file uploads
router.post('/:id/upload', upload.fields([
    { name: 'photo', maxCount: 1 },
    { name: 'incomeCertificate', maxCount: 1 },
    { name: 'gradeSheet', maxCount: 1 },
    { name: 'idProof', maxCount: 1 }
]), async (req, res) => {
    try {
        const application = await ScholarshipApplication.findById(req.params.id);
        if (!application) return res.status(404).json({ success: false, message: 'Not found' });

        if (req.files) {
            // Helper to normalize Windows paths to URL-safe forward slashes
            const normalizePath = (p) => p ? p.replace(/\\/g, '/') : null;
            
            if (req.files.photo) application.photo = normalizePath(req.files.photo[0].path);
            if (req.files.incomeCertificate) application.incomeCertificate = normalizePath(req.files.incomeCertificate[0].path);
            if (req.files.gradeSheet) application.gradeSheet = normalizePath(req.files.gradeSheet[0].path);
            if (req.files.idProof) application.idProof = normalizePath(req.files.idProof[0].path);
            await application.save();
        }

        res.json({ success: true, data: application });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
});

// 4. GET /api/scholarships - Admin View
router.get('/', async (req, res) => {
    try {
        const apps = await ScholarshipApplication.find().sort({ createdAt: -1 });
        res.json({ success: true, data: apps });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

module.exports = router;
