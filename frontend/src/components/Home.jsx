import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import { Navbar } from './Navbar';
import '../Styles/Home.css';

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleGetStarted = () => {
    // Navigate to the CustomTemplatePage when the button is clicked
    navigate('/customtemplate');
  };

  return (
    <div className="home-container">
      <Navbar />

      <div className="content">
        <h1 className="content-heading">Plan, Celebrate & Cherish Every Moment!</h1>
        <p className="content-text">
          Welcome to <strong>Eventlytic</strong> – your ultimate event planning partner!
          Whether it's a grand wedding, a corporate gala, or a lively social gathering,
          we provide all the tools you need to make your event a stress-free success.
        </p>

        <p className="content-text">
          Take the stress out of planning and let your event shine with our
          seamless and intuitive platform.
        </p>

        <button className="get-started-btn" onClick={handleGetStarted}>Get Started Now</button>
      </div>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Eventlytic. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
