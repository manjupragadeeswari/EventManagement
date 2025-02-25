import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styles/CustomTemplateForm.css";

const CustomTemplateForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    eventType: "",
    theme: "",
    colorScheme: "",
    fontStyle: "",
    additionalElements: "",
    referenceFiles: null,
  });

  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData({ ...formData, referenceFiles: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert data into JSON format
    const jsonData = {
      eventType: formData.eventType,
      theme: formData.theme,
      colorScheme: formData.colorScheme,
      fontStyle: formData.fontStyle,
      additionalElements: formData.additionalElements,
      referenceFiles: formData.referenceFiles ? formData.referenceFiles.name : "No file uploaded",
    };

    try {
      // Store in JSON Server at `registrations`
      await axios.post("http://localhost:8000/registrations", jsonData);
      setMessage("Your registration has been successfully submitted!");

      // Reset form
      setFormData({
        eventType: "",
        theme: "",
        colorScheme: "",
        fontStyle: "",
        additionalElements: "",
        referenceFiles: null,
      });

      // Redirect to home after 2 seconds
      setTimeout(() => navigate("/home"), 2000);
    } catch (error) {
      console.error("Error submitting registration:", error);
      setMessage("Failed to submit registration. Try again.");
    }
  };

  return (
    <div className="full-page-wrapper">
      <button className="back-btn" onClick={() => navigate(-1)}>⬅ Back</button>
      <div className="custom-template-container">
        <h2>Register for a Custom Template</h2>
        {message && <p className="message">{message}</p>}
        <form onSubmit={handleSubmit}>
          <label>Event Type:</label>
          <select name="eventType" value={formData.eventType} onChange={handleChange} required>
            <option value="">Select Event Type</option>
            <option value="Wedding">Wedding</option>
            <option value="Birthday">Birthday</option>
            <option value="Corporate">Corporate Event</option>
            <option value="Others">Others</option>
          </select>

          <label>Theme Preference:</label>
          <input type="text" name="theme" placeholder="Eg: Rustic, Modern" value={formData.theme} onChange={handleChange} required />

          <label>Preferred Color Scheme:</label>
          <input type="text" name="colorScheme" placeholder="Eg: Blue & Gold" value={formData.colorScheme} onChange={handleChange} required />

          <label>Preferred Font Style:</label>
          <input type="text" name="fontStyle" placeholder="Eg: Cursive, Elegant" value={formData.fontStyle} onChange={handleChange} required />

          <label>Additional Elements:</label>
          <textarea name="additionalElements" placeholder="Eg: Include a custom message, add a logo..." value={formData.additionalElements} onChange={handleChange} required></textarea>

          <label>Upload Reference Files (Optional):</label>
          <input type="file" onChange={handleFileChange} accept=".jpg, .png, .pdf" />

          <button type="submit">Submit Registration</button>
        </form>
      </div>
    </div>
  );
};

export default CustomTemplateForm;
