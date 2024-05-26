import React, { useState, useEffect } from 'react';
import './vv_hospitals.css';
import { NavLink } from 'react-router-dom';
import Vv_Navbar from '../../vv_Navbar/vv_navbar';

const Vv_Hospitals = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [hospitals, setHospitals] = useState([]);
    const [loadCount, setLoadCount] = useState(8);
    const hospitals_arr = [
        'Apollo Hospital',
        /*'Mayo Clinic',
        'Cleveland Clinic',
        'Johns Hopkins Hospital',
        'Massachusetts General Hospital',
        'UCLA Medical Center',
        'Cedars-Sinai Medical Center',
        'NewYork-Presbyterian Hospital',
        'Mount Sinai Hospital',
        'Stanford Health Care'*/
    ];

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const newHospitals = await Promise.all(hospitals_arr.map(async (hospitalName, index) => {
                    const response = await fetch(
                        `https://api.unsplash.com/photos/random?query=${encodeURIComponent(hospitalName)}&client_id=_PRKwe1atbNW58pFe_9vfmieuf8g56o5GZzL9EeNFA4`
                    );
                    const data = await response.json();
                    return {
                        id: index + 1,
                        name: hospitalName,
                        src: data.urls.regular,
                    };
                }));
                setHospitals(newHospitals);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []); // Fetch images once on component mount

    const filteredHospitals = hospitals.filter((hospital) =>
        hospital.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Vv_Navbar />
            <div className="hospitals-container">
                <h2>Hospitals &#127867;</h2>
                <div>
                    <input
                        className="search-bar"
                        type="text"
                        placeholder="Search Hospitals"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="hospital-list">
                    {filteredHospitals.map((hospital) => (
                        <div key={hospital.id} className="hospital-item">
                            <NavLink to={`/specialist/${hospital.id}`}>
                                <img src={hospital.src} alt={hospital.name} />
                                <h3>{hospital.name}</h3>
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Vv_Hospitals;
