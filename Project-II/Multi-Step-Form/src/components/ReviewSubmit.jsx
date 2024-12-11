// src/components/ReviewSubmit.jsx
import React from 'react';

const ReviewSubmit = ({ formData, prevStep, handleSubmit }) => {
    return (
        <div>
            <h2>Review and Submit</h2>
            <p><strong>First Name:</strong> {formData.firstName}</p>
            <p><strong>Last Name:</strong> {formData.lastName}</p>
            <p><strong>Address:</strong> {formData.address}</p>
            <p><strong>City:</strong> {formData.city}</p>
            <button onClick={prevStep}>Back</button>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default ReviewSubmit;
