import React, { useEffect, useRef } from 'react';
import './HomePage.css';
import Header from './Header';
import Banner from './Banner';
import ServicesSection from './ServicesSection';
import Footer from './Footer';

const HomePage = () => {
  const servicesRef = useRef(null);

  useEffect(() => {
    // Scroll down by 100 pixels when the component mounts
    window.scrollTo(0, 100);

    // Scroll to services section on click
    const handleClick = (event) => {
      // Prevent scrolling if the clicked element is a button or a link
      if (
        event.target.tagName === 'BUTTON' ||
        event.target.tagName === 'A' ||
        event.target.closest('.no-scroll') // Add a specific class to prevent scrolling
      ) {
        return; // Do nothing if it's a button, link, or has the 'no-scroll' class
      }

      // Scroll to the services section if the conditions are met
      if (servicesRef.current) {
        servicesRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Add click event listener
    document.addEventListener('click', handleClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="homepage">
      <Header />
      <Banner />
      <div ref={servicesRef}>
        <ServicesSection />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
