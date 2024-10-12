import React from 'react';
import './ServicesSection.css';
import { FaLaptopCode, FaFilm, FaUnity } from 'react-icons/fa'; // Import icons from react-icons
import { BsVectorPen } from "react-icons/bs";

const ServicesSection = () => {
    return (
        <section className="services-section">
            <h1 className="services-title">Services</h1>
            <div className="services-grid">
                <div className="service-card">
                    <FaLaptopCode className="service-icon" />
                    <h2>Web Design</h2>
                    <p>Custom webpages that capture your brand’s essence.</p>
                </div>
                <div className="service-card">
                    <BsVectorPen className="service-icon" />
                    <h2>Logo Design</h2>
                    <p>Elegant and unique logos tailored to your needs.</p>
                </div>
                <div className="service-card">
                    <FaFilm className="service-icon" />
                    <h2>Media</h2>
                    <p>All types of media to elevate your visual storytelling.</p>
                </div>
                <div className="service-card">
                    <FaUnity className="service-icon" />
                    <h2>Game Development</h2>
                    <p>Interactive games with immersive experiences.</p>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
