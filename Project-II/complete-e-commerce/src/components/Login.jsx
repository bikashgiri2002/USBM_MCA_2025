// src/components/Login.jsx
import React from 'react';
import { useAuth } from '../AuthContext';

const Login = () => {
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        login();
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" required />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
