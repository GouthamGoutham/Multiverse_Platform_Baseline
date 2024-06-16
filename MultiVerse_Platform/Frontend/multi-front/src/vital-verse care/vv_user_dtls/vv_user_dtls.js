import React, { useState, useEffect } from 'react';
import './vv_user_dtls.css';
import Vv_Navbar from '../vv_Navbar/vv_navbar';

const Vv_User_Details = () => {
    const [userDetails, setUserDetails] = useState({
        name: '',
        address: '',
        contact: '',
        email: ''
    });
    const [existingDetails, setExistingDetails] = useState(null);
    const [documents, setDocuments] = useState([]);
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Fetch existing user details from backend if available
        const fetchUserDetails = async () => {
            try {
                const response = await fetch('https://your-backend-api.com/user-details');
                const data = await response.json();
                if (data) {
                    setExistingDetails(data);
                    setUserDetails({
                        name: data.name,
                        address: data.address,
                        contact: data.contact,
                        email: data.email
                    });
                }
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        fetchUserDetails();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Save user details to backend
        try {
            const response = await fetch('https://your-backend-api.com/user-details', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userDetails),
            });
            const data = await response.json();
            setExistingDetails(data);
            setMessage('User details saved successfully.');
        } catch (error) {
            console.error('Error saving user details:', error);
            setMessage('Error saving user details.');
        }
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('https://your-backend-api.com/upload', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            setDocuments([...documents, data.file]);
            setMessage('File uploaded successfully.');
        } catch (error) {
            console.error('Error uploading file:', error);
            setMessage('Error uploading file.');
        }
    };

    return (
        <div>
            <Vv_Navbar />
            <div className="user-details-container">
                <h2>User Details</h2>
                {existingDetails ? (
                    <div className="existing-details">
                        <p>Name: {existingDetails.name}</p>
                        <p>Address: {existingDetails.address}</p>
                        <p>Contact: {existingDetails.contact}</p>
                        <p>Email: {existingDetails.email}</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="user-details-form">
                        <div className="form-group">
                            <label>Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={userDetails.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Address:</label>
                            <input
                                type="text"
                                name="address"
                                value={userDetails.address}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Contact:</label>
                            <input
                                type="text"
                                name="contact"
                                value={userDetails.contact}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={userDetails.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button type="submit" className="submit-button">Save Details</button>
                    </form>
                )}

                <div className="upload-section">
                    <h3>Upload Documents</h3>
                    <input type="file" onChange={handleFileChange} />
                    <button onClick={handleUpload} className="upload-button">Upload</button>
                </div>

                {documents.length > 0 && <div className="documents-list">
                    <h3>Uploaded Documents</h3>
                    <ul>
                        {documents.map((doc, index) => (
                            <li key={index}>
                                <a href={`https://your-backend-api.com/uploads/${doc}`} target="_blank" rel="noopener noreferrer">{doc}</a>
                            </li>
                        ))}
                    </ul>
                </div>}
                

                {message && <p className="message">{message}</p>}
            </div>
        </div>
    );
};

export default Vv_User_Details;
