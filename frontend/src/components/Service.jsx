import React from "react";

import { Navbar } from './Navbar';
import '../Styles/Service.css'

const Services = () => {
  return (
    <div classname="service-container">
      <Navbar />
    
    <div className="services-page">
      <h2 className="services-header">Our Services</h2>
      <p className="services-description">
        We offer a wide range of services to make your events successful and
        hassle-free.
      </p>

      <div className="services-row">
        <div className="service-card">
          <div className="card">
            <h4>Event Planning</h4>
            <p>
              From weddings to corporate events, we handle everything for a
              seamless experience.
            </p>
          </div>
        </div>
        <div className="service-card">
          <div className="card">
            <h4>Venue Booking</h4>
            <p>
              Find and book the perfect venue with ease, customized to your
              needs.
            </p>
          </div>
        </div>
        <div className="service-card">
          <div className="card">
            <h4>Invitation Management</h4>
            <p>
              Design and send customized invitations to your guests
              effortlessly.
            </p>
          </div>
        </div>
      </div>

      <div className="services-row">
        <div className="service-card">
          <div className="card">
            <h4>Guest Registration</h4>
            <p>
              Keep track of guest lists and RSVPs with an easy-to-use system.
            </p>
          </div>
        </div>
        <div className="service-card">
          <div className="card">
            <h4>Event Scheduling</h4>
            <p>
              Plan your event timeline with structured and well-organized
              scheduling tools.
            </p>
          </div>
        </div>
        <div className="service-card">
          <div className="card">
            <h4>Secure Payments</h4>
            <p>
              Accept payments seamlessly with our integrated payment scanner.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Services;
