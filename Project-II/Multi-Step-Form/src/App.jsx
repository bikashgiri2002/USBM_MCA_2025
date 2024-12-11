// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import PersonalInfo from './components/PersonalInfo';
import AddressInfo from './components/AddressInfo';
import ReviewSubmit from './components/ReviewSubmit';
import './App.css';

const App = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted successfully!');
    };

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<PersonalInfo formData={formData} setFormData={setFormData} />} />
                    <Route path="/address" element={<AddressInfo formData={formData} setFormData={setFormData} />} />
                    <Route path="/review" element={<ReviewSubmit formData={formData} handleSubmit={handleSubmit} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
