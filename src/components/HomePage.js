import React from 'react';
import './HomePage.css';
import Header from './Header';
import Banner from './Banner';
import ServicesSection from './ServicesSection';
import Footer from './Footer';


const HomePage = () => {
  return (
    <div className="homepage">
        <Header />
        <Banner />
        <ServicesSection />
        <Footer />
    </div>
  );
};

export default HomePage;