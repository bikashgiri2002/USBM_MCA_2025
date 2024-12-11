// src/App.jsx
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

const App = () => {
    return (
        <ThemeProvider>
            <div className="App">
                <h1>Theme Toggle App</h1>
                <ThemeToggle />
                <p>This is a simple app demonstrating theme toggling.</p>
            </div>
        </ThemeProvider>
    );
};

export default App;
