const mongoose = require('mongoose');

const scholarshipApplicationSchema = new mongoose.Schema({
    // Stage 1: Personal Info
    studentName: { type: String, required: true, trim: true },
    dateOfBirth: { type: String, required: true },
    gender: { type: String, required: true },
    aadhaarNumber: { type: String, required: true, unique: true },
    contactNumber: { type: String, required: true },
    email: { type: String, required: true, trim: true },
    address: { type: String, required: true },
    photo: { type: String }, // File path

    // Stage 2: Scholarship Type & Academics (Optional until Stage 2 completion)
    studentType: { type: String, enum: ['School', 'College'] },
    scholarshipCategory: { type: String, enum: ['Merit-based', 'Need-based', 'Sports', 'General Achievement'] },
    institutionName: { type: String },
    currentGradeOrCourse: { type: String }, 
    previousYearMarks: { type: Number },
    ambition: { type: String },

    // Stage 3: Financial Background
    guardianName: { type: String },
    guardianOccupation: { type: String },
    annualFamilyIncome: { type: Number },
    needStatement: { type: String },

    // Stage 4: Documents (File paths)
    incomeCertificate: { type: String },
    gradeSheet: { type: String },
    idProof: { type: String },

    // Metadata
    status: { type: String, enum: ['Pending', 'In-Review', 'Approved', 'Rejected'], default: 'Pending' },
    currentStage: { type: Number, default: 1 },
    isSubmitted: { type: Boolean, default: false },
    adminRemarks: { type: String }
}, {
    timestamps: true
});

module.exports = mongoose.model('ScholarshipApplication', scholarshipApplicationSchema);
