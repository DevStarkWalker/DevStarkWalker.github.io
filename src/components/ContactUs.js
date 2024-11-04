import React from 'react';
import { useState } from 'react';
import './ContactUs.css'; // Import the CSS for styling
import Header from './Header'; // Adjust the path to your Header component
import Footer from './Footer'; // Adjust the path to your Footer component
import Newlogo from './Newlogo.png'; // Update with the correct path to your logo

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    fetch("https://formspree.io/f/manyebal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message
      })
    })
      .then((response) => {
        if (response.ok) {
          alert("Message sent successfully!");
        } else {
          alert("Failed to send the message, please try again.");
        }
      })
      .catch((error) => {
        console.error("Formspree Error:", error);
        alert("Failed to send the message, please try again.");
      });
  };
  

  return (
    <div className="contact-us-page">
      <Header />
      <div className="contact-us-container">
      <img src={Newlogo} alt="Newlogo" className="contact-us-logo-image" />
        <div className="contact-section">
            <h2 className="contact-us-section-title">Contact Us</h2>
          <p className="contact-us-section-description">
            We’d love to hear from you! Whether you have a question about our services, need assistance, or just want to chat, feel free to reach out.
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" id="name" className="form-input" placeholder="Your Name" value={formData.name} onChange={handleChange} required />

            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" id="email" className="form-input" placeholder="Your Email" value={formData.email} onChange={handleChange} required />

            <label htmlFor="message" className="form-label">Message:</label>
            <textarea id="message" className="form-textarea" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>

            <button type="submit" className="form-button">Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
