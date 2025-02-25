import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Styles/SearchResults.css';

// Import images
import ElegantFloral from '../Images/Templates/Elegant floral.jpeg';
import RusticWedding from '../Images/Templates/rustic wedding.jpeg';
import ModernWedding from '../Images/Templates/Modern wedding.jpeg';
import BeachWedding from '../Images/Templates/Beach wedding.jpeg';
import VintageFloral from '../Images/Templates/Vintage Floral.jpeg';
import Corporate1 from '../Images/Templates/corporate1.webp';
import Corporate2 from '../Images/Templates/corporate2.png';
import AnnualGala from '../Images/Templates/Annual gala.jpg';
import Corporate4 from '../Images/Templates/corporate4.jpeg';
import Corporate5 from '../Images/Templates/corporate5.jpeg';
import Birthday1 from '../Images/Templates/birthday1.jpeg';
import Birthday2 from '../Images/Templates/birthday2.jpeg';
import Birthday3 from '../Images/Templates/bithday3.jpeg';
import Birthday4 from '../Images/Templates/birthday4.jpeg';
import Birthday5 from '../Images/Templates/birthday5.jpg';
import Graduation1 from '../Images/Templates/graduation1.jpeg';
import Graduation2 from '../Images/Templates/graduation2.jpeg';
import Graduation3 from '../Images/Templates/graduation3.jpeg';
import Graduation4 from '../Images/Templates/graduation4.jpeg';
import Graduation5 from '../Images/Templates/graduation5.jpeg';
import Charity1 from '../Images/Templates/charity1.jpeg';
import Charity2 from '../Images/Templates/charity2.jpeg';
import Charity3 from '../Images/Templates/charity3.jpeg';
import Charity4 from '../Images/Templates/charity4.jpeg';
import Charity5 from '../Images/Templates/charity5.jpeg';

const SearchResults = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const initialSearchQuery = state?.query || '';
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [templates, setTemplates] = useState([]);
  const [filteredTemplates, setFilteredTemplates] = useState([]);
  const [showRegisterButton, setShowRegisterButton] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:8000/templates')
      .then((response) => {
        console.log("Fetched Templates:", response.data);
        setTemplates(response.data);
      })
      .catch((error) => console.error('Error fetching templates:', error));
  }, []);

  useEffect(() => {
    if (templates.length > 0) {
      filterTemplates(templates, searchQuery);
    }
  }, [searchQuery, templates]);

  const filterTemplates = (templates, query) => {
    if (!query || query.toLowerCase() === 'all') {
      setFilteredTemplates(templates);
    } else {
      const filtered = templates.filter((template) =>
        template.name.toLowerCase().includes(query.toLowerCase()) ||
        template.category.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredTemplates(filtered);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const imageMap = {
    'Elegant Wedding Invitation': ElegantFloral,
    'Rustic Wedding Invite': RusticWedding,
    'Modern Wedding Invitation': ModernWedding,
    'Beach Wedding Invitation': BeachWedding,
    'Vintage Floral Wedding Invite': VintageFloral,
    'Business Conference Invite': Corporate1,
    'Networking Event Invitation': Corporate2,
    'Annual Gala Invitation': AnnualGala,
    'Corporate Workshop Invite': Corporate4,
    'Product Launch Invite': Corporate5,
    'Fun Birthday Party Invite': Birthday1,
    'Superhero Birthday Invitation': Birthday2,
    'Vintage Birthday Invitation': Birthday3,
    'Princess Birthday Invitation': Birthday4,
    'Minimal Birthday Invite': Birthday5,
    'Graduation Ceremony Invitation': Graduation1,
    'Class of 2023 Graduation Invite': Graduation2,
    'Graduation Party Invite': Graduation3,
    'Academic Excellence Graduation Invite': Graduation4,
    'Funny Graduation Invitation': Graduation5,
    'Charity Gala Invitation': Charity1,
    'Fundraising Event Invite': Charity2,
    'Nonprofit Event Invitation': Charity3,
    'Auction Gala Invitation': Charity4,
    'Volunteer Event Invitation': Charity5,
  };

  const handleImageClick = () => {
    setShowRegisterButton(true);
  };

  return (
    <div className="search-results-container">
      <header className="search-header">
        <button className="back-btn" onClick={() => navigate("/home")}>⬅ Back</button>
        <input
          type="text"
          placeholder="Search for templates..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </header>

      <main className="search-results-main">
        <h1>{searchQuery || "All"} Templates</h1>

        {filteredTemplates.length > 0 ? (
          <div className="templates-container">
            {filteredTemplates.map((template) => (
              <div key={template.id} className="template-card">
                <img 
                  src={imageMap[template.name]}  
                  alt={template.name} 
                  className="template-img"
                  onClick={handleImageClick} 
                />
                <h3>{template.name}</h3>
              </div>
            ))}
          </div>
        ) : (
          <p>No templates found for "{searchQuery}".</p>
        )}

        {showRegisterButton && (
          <button className="register-btn" onClick={() => navigate("/registerform")}>Register Now</button>
        )}
      </main>
    </div>
  );
};

export default SearchResults;


// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import '../Styles/SearchResults.css';

// // Import images
// import ElegantFloral from '../Images/Templates/Elegant floral.jpeg';
// import RusticWedding from '../Images/Templates/rustic wedding.jpeg';
// import ModernWedding from '../Images/Templates/Modern wedding.jpeg';
// import BeachWedding from '../Images/Templates/Beach wedding.jpeg';
// import VintageFloral from '../Images/Templates/Vintage Floral.jpeg';
// import Corporate1 from '../Images/Templates/corporate1.webp';
// import Corporate2 from '../Images/Templates/corporate2.png';
// import AnnualGala from '../Images/Templates/Annual gala.jpg';
// import Corporate4 from '../Images/Templates/corporate4.jpeg';
// import Corporate5 from '../Images/Templates/corporate5.jpeg';
// import Birthday1 from '../Images/Templates/birthday1.jpeg';
// import Birthday2 from '../Images/Templates/birthday2.jpeg';
// import Birthday3 from '../Images/Templates/bithday3.jpeg';
// import Birthday4 from '../Images/Templates/birthday4.jpeg';
// import Birthday5 from '../Images/Templates/birthday5.jpg';
// import Graduation1 from '../Images/Templates/graduation1.jpeg';
// import Graduation2 from '../Images/Templates/graduation2.jpeg';
// import Graduation3 from '../Images/Templates/graduation3.jpeg';
// import Graduation4 from '../Images/Templates/graduation4.jpeg';
// import Graduation5 from '../Images/Templates/graduation5.jpeg';
// import Charity1 from '../Images/Templates/charity1.jpeg';
// import Charity2 from '../Images/Templates/charity2.jpeg';
// import Charity3 from '../Images/Templates/charity3.jpeg';
// import Charity4 from '../Images/Templates/charity4.jpeg';
// import Charity5 from '../Images/Templates/charity5.jpeg';

// const SearchResults = () => {
//   const navigate = useNavigate();
//   const { state } = useLocation();
//   const initialSearchQuery = state?.query || '';
//   const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
//   const [templates, setTemplates] = useState([]);
//   const [filteredTemplates, setFilteredTemplates] = useState([]);
//   const [loading, setLoading] = useState(true); // Loading state
//   const [showRegisterButton, setShowRegisterButton] = useState(false);

//   useEffect(() => {
//     axios
//       .get('http://localhost:8000/templates')
//       .then((response) => {
//         setTemplates(response.data);
//         setLoading(false); // Set loading to false after fetching data
//       })
//       .catch((error) => {
//         console.error('Error fetching templates:', error);
//         setLoading(false);
//       });
//   }, []);

//   useEffect(() => {
//     if (templates.length > 0) {
//       filterTemplates(templates, searchQuery);
//     }
//   }, [searchQuery, templates]);

//   const filterTemplates = (templates, query) => {
//     if (!query || query.toLowerCase() === 'all') {
//       setFilteredTemplates(templates);
//     } else {
//       const filtered = templates.filter((template) =>
//         template.name.toLowerCase().includes(query.toLowerCase()) ||
//         template.category.toLowerCase().includes(query.toLowerCase())
//       );
//       setFilteredTemplates(filtered);
//     }
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const imageMap = {
//     'Elegant Wedding Invitation': ElegantFloral,
//     'Rustic Wedding Invite': RusticWedding,
//     'Modern Wedding Invitation': ModernWedding,
//     'Beach Wedding Invitation': BeachWedding,
//     'Vintage Floral Wedding Invite': VintageFloral,
//     'Business Conference Invite': Corporate1,
//     'Networking Event Invitation': Corporate2,
//     'Annual Gala Invitation': AnnualGala,
//     'Corporate Workshop Invite': Corporate4,
//     'Product Launch Invite': Corporate5,
//     'Fun Birthday Party Invite': Birthday1,
//     'Superhero Birthday Invitation': Birthday2,
//     'Vintage Birthday Invitation': Birthday3,
//     'Princess Birthday Invitation': Birthday4,
//     'Minimal Birthday Invite': Birthday5,
//     'Graduation Ceremony Invitation': Graduation1,
//     'Class of 2023 Graduation Invite': Graduation2,
//     'Graduation Party Invite': Graduation3,
//     'Academic Excellence Graduation Invite': Graduation4,
//     'Funny Graduation Invitation': Graduation5,
//     'Charity Gala Invitation': Charity1,
//     'Fundraising Event Invite': Charity2,
//     'Nonprofit Event Invitation': Charity3,
//     'Auction Gala Invitation': Charity4,
//     'Volunteer Event Invitation': Charity5,
//   };

//   // Fallback image in case the template name doesn't exist in imageMap
//   const getImage = (templateName) => {
//     return imageMap[templateName] || 'path/to/placeholder-image.jpg'; // Replace with a valid placeholder image
//   };

//   const handleImageClick = () => {
//     setShowRegisterButton(true);
//   };

//   return (
//     <div className="search-results-container">
//       <header className="search-header">
//         <button className="back-btn" onClick={() => navigate("/home")}>⬅ Back</button>
//         <input
//           type="text"
//           placeholder="Search for templates..."
//           value={searchQuery}
//           onChange={handleSearchChange}
//           className="search-input"
//         />
//       </header>

//       <main className="search-results-main">
//         <h1>{searchQuery || "All"} Templates</h1>

//         {loading ? (
//           <p>Loading templates...</p> // Show loading state while templates are being fetched
//         ) : filteredTemplates.length > 0 ? (
//           <div className="templates-container">
//             {filteredTemplates.map((template) => (
//               <div key={template.id} className="template-card">
//                 <img
//                   src={getImage(template.name)} // Get image with fallback
//                   alt={template.name}
//                   className="template-img"
//                   onClick={handleImageClick}
//                 />
//                 <h3>{template.name}</h3>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No templates found for "{searchQuery}".</p>
//         )}

//         {showRegisterButton && (
//           <button className="register-btn" onClick={() => navigate("/registerform")}>Register Now</button>
//         )}
//       </main>
//     </div>
//   );
// };

// export default SearchResults;
