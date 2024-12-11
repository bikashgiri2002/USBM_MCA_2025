// src/components/Contact.jsx
import React from 'react';

const Contact = () => (
    <div>
        <h2>Contact Us</h2>
        <form>
            <div>
                <label>Name</label>
                <input type="text" required />
            </div>
            <div>
                <label>Email</label>
                <input type="email" required />
            </div>
            <div>
                <label>Message</label>
                <textarea required></textarea>
            </div>
            <button type="submit">Send</button>
        </form>
    </div>
);

export default Contact;
