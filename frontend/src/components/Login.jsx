// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import '../Styles/Login.css';

// const Login = () => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/login`, formData);
//       alert('Login Successful');
//       navigate('/home');
//     } catch (err) {
//       console.error('Error logging in:', err);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h2 className="login-title">Login</h2>

//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <label className="input-label">Email</label>
//             <input
//               type="email"
//               name="email"
//               className="input-field"
//               placeholder="Enter your email"
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <label className="input-label">Password</label>
//             <input
//               type="password"
//               name="password"
//               className="input-field"
//               placeholder="Enter your password"
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <button type="submit" className="login-button">Login</button>
//         </form>

//         <p className="register-text">
//           Don't have an account? <Link to="/register" className="register-link">Register here</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../Styles/Login.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors before submitting
    setErrors({});

    // Basic client-side validation
    if (!formData.email || !formData.password) {
      setErrors({ message: 'Please enter both email and password.' });
      return;
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/login`, formData);
      alert('Login Successful');
      navigate('/home');
    } catch (err) {
      console.error('Error logging in:', err);

      // If the error is a response error (e.g., invalid credentials)
      if (err.response && err.response.data) {
        setErrors({ message: err.response.data.message || 'Login failed. Please try again.' });
      } else {
        setErrors({ message: 'An unexpected error occurred. Please try again later.' });
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="input-label">Email</label>
            <input
              type="email"
              name="email"
              className="input-field"
              placeholder="Enter your email"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>

          <div className="input-group">
            <label className="input-label">Password</label>
            <input
              type="password"
              name="password"
              className="input-field"
              placeholder="Enter your password"
              onChange={handleChange}
              value={formData.password}
              required
            />
          </div>

          {/* Show error message if present */}
          {errors.message && <div className="error-message">{errors.message}</div>}

          <button type="submit" className="login-button">Login</button>
        </form>

        <p className="register-text">
          Don't have an account? <Link to="/register" className="register-link">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
