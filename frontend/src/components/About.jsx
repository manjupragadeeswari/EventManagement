import React from "react";
import { Navbar } from "./Navbar"; // Import Navbar component
import "../Styles/About.css";

const About = () => {
  return (
    <div className="about-page">
      <Navbar /> {/* Include Navbar at the top */}

      <div className="about-content">
        <h2 className="about-header">About Us</h2>
        <p className="about-description">
          Welcome to our Event Management platform! We specialize in making your
          events seamless and memorable, offering a user-friendly experience for
          planning weddings, corporate events, and social gatherings.
        </p>

        <div className="features-row">
          <div className="feature-card">
            <div className="card">
              <h4>Customizable Templates</h4>
              <p>
                Choose from a variety of event templates to match your unique
                style and needs.
              </p>
            </div>
          </div>
          <div className="feature-card">
            <div className="card">
              <h4>Easy Registrations</h4>
              <p>
                Streamline event registrations with an efficient online system.
              </p>
            </div>
          </div>
          <div className="feature-card">
            <div className="card">
              <h4>Secure Payments</h4>
              <p>Make hassle-free payments with our built-in payment scanner.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
