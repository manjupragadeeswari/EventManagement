import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import "../Styles/RegisterationForm.css";

const RegisterForm = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [formData, setFormData] = useState({
    brideName: "",
    groomName: "",
    date: "",
    place: "",
    time: "",
    document: null,  // For file upload
  });

  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData({ ...formData, document: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const jsonData = {
      brideName: formData.brideName,
      groomName: formData.groomName,
      date: formData.date,
      place: formData.place,
      time: formData.time,
      document: formData.document ? formData.document.name : "No file uploaded",
    };

    try {
      const response = await axios.post("http://localhost:8000/registrations", jsonData);
      console.log("Registration successful:", response.data);
      setMessage("Registration successful!");
      setFormData({ brideName: "", groomName: "", date: "", place: "", time: "", document: null });
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("Failed to register. Try again.");
    }
  };

  return (
    <div className="register-page">
      {/* Back Button placed outside the form container */}
      <button className="back-btn" onClick={() => navigate("/")}>⬅ Back to Templates</button>

      <div className="register-container">
        <h2>Register Your Wedding Template</h2>
        {message && <p className="message">{message}</p>}
        <form onSubmit={handleSubmit}>
          <label>Bride's Name</label>
          <input type="text" name="brideName" value={formData.brideName} onChange={handleChange} required />

          <label>Groom's Name</label>
          <input type="text" name="groomName" value={formData.groomName} onChange={handleChange} required />

          <label>Wedding Date</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />

          <label>Venue/Place</label>
          <input type="text" name="place" value={formData.place} onChange={handleChange} required />

          <label>Time</label>
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />

          <label>Upload Document (Optional)</label>
          <input type="file" name="document" onChange={handleFileChange} />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
