import React, { useEffect, useRef, useState } from 'react';
import './HomePage.css';
import Header from './Header';
import Banner from './Banner';
import ServicesSection from './ServicesSection';
import Footer from './Footer';

const HomePage = () => {
  const servicesRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };


    window.addEventListener('resize', handleResize);

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
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="homepage">
      {isMobile ? (
        <>
          <Banner />
          <Header />
        </>
      ) : (
        <>
          <Header />
          <Banner />
        </>
      )}
      <div ref={servicesRef}>
        <ServicesSection />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
