import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="left-nav-menu">
                <Link to="/about-us">About Us</Link>
                <Link to="/contact-us">Contact Us</Link>
            </nav>

            <nav className='logo'>
                <Link to="/">Novaeh Studios</Link>
            </nav>
                
            <nav className="right-nav-menu">
                <Link to="/gallery">Gallery</Link>
                <Link to="/testimonials">Testimonials</Link>
            </nav>
        </header>
    );
};

export default Header;
