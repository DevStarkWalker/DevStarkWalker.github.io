import React from 'react';
import './AboutUs.css'; // Import the CSS for styling
import Header from './Header'; // Adjust the path to your Header component
import Footer from './Footer'; // Adjust the path to your Footer component
import Newlogo from './Newlogo.png'; // Update with the correct path to your logo

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <Header /> {/* Header component */}
      <div className="about-us-container">
        <img src={Newlogo} alt="Newlogo" className="about-us-logo" />
        <section className="about-section">
          <h2 className="about-us-section-title">About Us</h2>
          <p className="about-us-section-description">
                At Novaeh Studios, we are passionate creators dedicated to turning visions into reality. 
                Founded and led by our CEO, creator, and developer, our company thrives on transforming ideas into exceptional digital experiences. 
                From crafting unique logos and engaging animations to developing captivating web pages and innovative games, we bring creativity and precision into every project.
                Working alongside our talented Creative Director, we merge technical expertise with a keen sense of artistic vision.
                This collaboration ensures that every product we deliver is infused with both professional quality and creative flair.
                We believe that true success lies in capturing the essence of each idea and exceeding expectations through our dedication and craftsmanship.
                At Novaeh Studios, we don’t just build products; we create experiences that resonate with our clients' goals and imaginations.
                Our commitment to quality drives us to deliver work that speaks not just to what you envisioned but beyond what you thought possible.
          </p>
        </section>
        <section className="logo-section">
          <h2 className="about-us-section-title">The Logo</h2>
          <p className="about-us-section-description">
          Our logo features a depiction of Daedalus, the legendary craftsman and innovator from Greek mythology, symbolizing creativity, skill, and the power of bringing ideas to life.
          Known as the master artisan who created some of the most ingenious inventions in myth, Daedalus represents the spirit of Novaeh Studios—a place where vision meets creation.
          The image of Daedalus forging, with the prominent "N" on the anvil, beautifully aligns with our mission of transforming concepts into reality. 
          Just as Daedalus was renowned for his artistry and precision, we strive to deliver the highest quality in every logo, animation, web page, and game we create. 
          The "N" stands for Novaeh, our brand, and represents our dedication to crafting products that perfectly embody our clients' visions.
          This logo is more than just a visual mark; it encapsulates the essence of who we are—a team that forges creativity and innovation into tangible, impactful work.
          It symbolizes our commitment to taking raw ideas and skillfully shaping them into products that resonate with both our clients and our own artistic standards.
          </p>
        </section>
      </div>
      <Footer /> {/* Footer component */}
    </div>
  );
};

export default AboutUs;
