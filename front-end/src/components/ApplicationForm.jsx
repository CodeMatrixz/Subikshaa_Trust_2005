import React from 'react';
import '../styles/MembershipForm.css'; // Reusing form styles for consistency or clean up if not needed

const ApplicationForm = () => {
    return (
        <div className="membership-form-wrapper" style={{ width: '100%', maxWidth: '700px', margin: '0 auto', overflow: 'hidden' }}>
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSck7w_j_b4uhKlF12t9U7q8LgGrMEmrvUde1nuBgDmJ6Cx1Tw/viewform?embedded=true"
                width="100%"
                height="2618"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Application Form"
                style={{ border: 'none' }}
            >
                Loading…
            </iframe>
        </div>
    );
};

export default ApplicationForm;
