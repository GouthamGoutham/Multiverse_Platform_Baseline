import React, { useState } from 'react';
import './contact.css';
import Navbar from '../nav';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e)=>{
    const {name , value} = e.target;
    setFormData({...formData,[name]:value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const toEmail = encodeURIComponent(email); // Encode the email for URL
    const mailtoLink = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${message}`)}`;
    window.location.href = mailtoLink;
  };
  
  

  return (
    <div>
    <Navbar/>
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Subject:</label>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Contact;
