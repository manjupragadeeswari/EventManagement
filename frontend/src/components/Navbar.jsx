import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import '../Styles/Navbar.css'; // Import the custom CSS file
import logo from '../Images/logo-img.png'; 
import { useNavigate } from 'react-router-dom'; // Import the logo image

export const Navbar = () => {
    
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate(); // Initialize navigate function
    
    const handleSearch = (e) => {
        e.preventDefault();
        // Redirect to the SearchResults page with search query
        navigate('/searchresults', { state: { query: searchQuery } });
    };
    

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

  

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo on the left */}
                <div className="navbar-brand">
                    <img src={logo} alt="Eventlytic Logo" className="logo" />
                </div>

                {/* Navbar Links in the center */}
                <div className="navbar-links">
                    <Link to="/home" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/service" className="nav-link">Service</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                    <Link to="/searchresults" className="nav-link">Template</Link>
                </div>

{/*                
                <div className="search-form">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="search-input"
                    />
                    <button className="search-button" type="button" onClick={handleSearch}>Search</button>
                </div> */}
            </div>
        </nav>
    );
};

export default Navbar;
