import React, { useState, useEffect } from 'react';
import './vv_specialist.css';
import { NavLink, useParams } from 'react-router-dom';
import Vv_Navbar from '../../vv_Navbar/vv_navbar';

const Vv_Specialist = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [doctors, setDoctors] = useState([]);
    const { hospitalId } = useParams();

    const specialists = [
        'Dentist',
        'Cardiologist',
        'Dermatologist',
        'Pediatrician',
        'Gynecologist',
        'Orthopedic Surgeon',
        'Psychiatrist',
        'Neurologist'
    ];

    useEffect(() => {
        const fetchImages = async () => {
            debugger;
            const newDoctors = await Promise.all(specialists.map(async (specialist, index) => {
                try {
                    const response = await fetch(
                        `https://api.unsplash.com/photos/random?query=${encodeURIComponent(specialist)}&client_id=_PRKwe1atbNW58pFe_9vfmieuf8g56o5GZzL9EeNFA4`
                    );
                    const data = await response.json();
                    return {
                        id: index + 1,
                        name: specialist,
                        src: data.urls.regular,
                    };
                } catch (error) {
                    console.error('Error fetching images:', error);
                    return {
                        id: index + 1,
                        name: specialist,
                        src: 'default-image-url', // fallback image
                    };
                }
            }));
            setDoctors(newDoctors);
        };

        fetchImages();
    }, []); // Fetch images once on component mount

    const filteredDoctors = doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Vv_Navbar />
            <div className="specialists-container">
                <h2>Specialists &#127867;</h2>
                <div>
                    <input
                        className="search-bar"
                        type="text"
                        placeholder="Search Specialist"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="specialist-list">
                    {filteredDoctors.map((doctor) => (
                        <div key={doctor.id} className="specialist-item">
                            <NavLink to={`/specialist_dtls/${doctor.id}`}>
                                <img src={doctor.src} alt={doctor.name} />
                                <h3>{doctor.name}</h3>
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Vv_Specialist;
