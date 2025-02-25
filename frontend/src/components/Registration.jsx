import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Styles/Registration.css'

const Registration = () => {
  const [formData, setFormData] = useState({ firstname: '', lastname: '', email: '', password: '', cpassword: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let validationErrors = {};
    if (!formData.firstname) validationErrors.firstname = 'First name required';
    if (!formData.lastname) validationErrors.lastname = 'Last name required';
    if (!formData.email) validationErrors.email = 'Email required';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) validationErrors.email = 'Invalid email format';
    if (!formData.password) validationErrors.password = 'Password required';
    if (formData.password.length < 6) validationErrors.password = 'Password must be at least 6 characters';
    if (formData.cpassword !== formData.password) validationErrors.cpassword = 'Passwords do not match';
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/users/register`, formData);
      alert('Registration Successful');
      navigate('/');
    } catch (err) {
      console.error('Error adding user:', err);
    }
  };

  return (
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{ borderRadius: '15px' }}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Create an Account</h2>

              {Object.keys(errors).length > 0 && (
                <span className="text-error">{Object.values(errors).join(' | ')}</span>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                <label className="form-label">Your First Name</label>
                  <input
                    type="text"
                    name="firstname"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                  />
                  
                </div>

                <div className="form-outline mb-4">
                <label className="form-label">Your Last Name</label>
                  <input
                    type="text"
                    name="lastname"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                  />
                  
                </div>

                <div className="form-outline mb-4">
                <label className="form-label">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                  />
                  
                </div>

                <div className="form-outline mb-4">
                <label className="form-label">Your Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                  /><br/>
                 
                </div>

                <div className="form-outline mb-4">
                <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    name="cpassword"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                  />
                 
                </div>

                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-success btn-block btn-lg w-100">
                    Register
                  </button>
                </div>

                <p className="text-center text-muted mt-5 mb-0">
                  Already have an account? <a href="/">Login Now</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
