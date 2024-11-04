import React, { useState } from 'react';
import './Testimonials.css';
import Header from './Header';
import Footer from './Footer';
import Newlogo from './Newlogo.png'

const Testimonial = () => {
  const [testimonialData, setTestimonialData] = useState({
    name: '',
    company: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setTestimonialData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://formspree.io/f/xqakpdnq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testimonialData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Thank you for your feedback!");
        } else {
          alert("There was an issue submitting your feedback. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Formspree Error:", error);
        alert("There was an issue submitting your feedback. Please try again.");
      });
  };

  return (
    <div className="testimonial-page">
      <Header />
      <div className="testimonial-container">
        <img src={Newlogo} alt="Newlogo" className="contact-us-logo-image" />
          <div className="testimonial-section">
            <h2 className="testimonial-title">Leave a Testimonial</h2>
            <p className="testimonial-description">
              We value your feedback. Please let us know how Novaeh Studios helped you and your business!
            </p>
            <form className="testimonial-form" onSubmit={handleSubmit}>
              <label htmlFor="name" className="form-label">Name:</label>
              <input
                type="text"
                id="name"
                className="form-input"
                placeholder="Your Name"
                value={testimonialData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="company" className="form-label">Company:</label>
              <input
                type="text"
                id="company"
                className="form-input"
                placeholder="Your Company"
                value={testimonialData.company}
                onChange={handleChange}
                required
              />

              <label htmlFor="service" className="form-label">Service Provided:</label>
              <input
                type="text"
                id="service"
                className="form-input"
                placeholder="Service Provided"
                value={testimonialData.service}
                onChange={handleChange}
                required
              />

              <label htmlFor="message" className="form-label">Message:</label>
              <textarea
                id="message"
                className="form-textarea"
                placeholder="Your Message"
                value={testimonialData.message}
                onChange={handleChange}
                required
              ></textarea>

            <button type="submit" className="form-button">Submit Testimonial</button>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Testimonial;
