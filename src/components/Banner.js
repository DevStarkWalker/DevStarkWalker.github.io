import React from 'react';
import './Banner.css';
import Newlogo from './Newlogo.png'; // Update with the correct path to your logo

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-content">
                <h1 className="banner-text">Novaeh</h1>
                <img src={Newlogo} alt="Novaeh Studios Logo" className="banner-logo" />
                <h1 className="banner-text">Studios</h1>
            </div>
        </div>
    );
};

export default Banner;
