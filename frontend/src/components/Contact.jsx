import React from "react";
import { Navbar } from './Navbar';
import "../Styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-navbar">
      <Navbar />
   
      <div className="contact-container">
        <h2 className="contact-header">Contact Us</h2>
        <p className="contact-subheading">
          Have any questions? Reach out to us, and we'll be happy to help!
        </p>

        <div className="contact-row">
          {/* Contact Details (Left side) */}
          <div className="contact-card">
            <div className="card-content">
              <h4>Our Office</h4>
              <p>123 Event Street, City, Country</p>

              <h4>Email</h4>
              <p>support@eventmanagement.com</p>

              <h4>Phone</h4>
              <p>+91 1234567890</p>

              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook fa-2x"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form (Right side) */}
          <div className="contact-form-card">
            <div className="form-content">
              <h4>Feedback</h4>
              <form>
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-input" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-input" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea className="form-input" rows="4" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="form-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
