import React from 'react';
import './ContactUs.css'; // Import the CSS for styling
import Header from './Header'; // Adjust the path to your Header component
import Footer from './Footer'; // Adjust the path to your Footer component
import Newlogo from './Newlogo.png'; // Update with the correct path to your logo

const ContactUs = () => {
  return (
    <div className="contact-us-page">
      <Header /> {/* Header component */}
        <div className="contact-us-logo">
          <img src={Newlogo} alt="Newlogo" className="logo-image" />
          </div>
        <div className="contact-us-container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-description">
          We’d love to hear from you! Whether you have a question about our services, need assistance, or just want to chat, feel free to reach out.
        </p>
        <form className="contact-form">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" id="name" className="form-input" placeholder="Your Name" required />

          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" id="email" className="form-input" placeholder="Your Email" required />

          <label htmlFor="message" className="form-label">Message:</label>
          <textarea id="message" className="form-textarea" placeholder="Your Message" required></textarea>

          <button type="submit" className="form-button">Send Message</button>
        </form>
      </div>
      <Footer /> {/* Footer component */}
    </div>
  );
};

export default ContactUs;
