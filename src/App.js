import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials'; // Singular, not plural




const App = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path ="/testimonials" element={<Testimonials/>} />
                {/* Add other routes as needed */}
            </Routes>
        </Router>
    );
};

export default App;
