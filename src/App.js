import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Media from './components/Media';
import GameDevelopment from './components/GameDevelopment';
import WebDesign from './components/WebDesign';
import ServicesSection from './components/ServicesSection';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/media" element={<Media />} />
                <Route path="/game-development" element={<GameDevelopment />} />
                <Route path="/web-design" element={<WebDesign />} />
                {/* Add other routes as needed */}
            </Routes>
        </Router>
    );
};

export default App;
