import React, { useEffect, useState } from "react";
import Vc_Navbar from "../vv_Navbar/vv_navbar"
import { Link } from 'react-router-dom';
import './vv_home.css';

const Vv_Home = () => {
    const [resources, setResources] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchResources = async () => {
            try {
                const response = await fetch(
                    'https://api.fda.gov/drug/label.json?limit=20'
                );
                const data = await response.json();
                console.log(data);
                setResources(data.results || []);
                console.log("Resources",resources);
            } catch (error) {
                setError('Error fetching health resources');
            } finally {
                setLoading(false);
            }
        };

        fetchResources();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <Vc_Navbar />
            <div className="vv-home-container">
                <h1>Welcome to Vitalverse Care</h1>
                <p>At Vitalverse Care, we are dedicated to providing the best healthcare services to ensure your well-being.</p>
                <p>Explore our resources to learn more about maintaining a healthy lifestyle.</p>
                <div className="vv-resources">
                    <h2>Medical Resources</h2>
                    <ul>
                        {resources.map((resource, index) => (
                            <li key={index}>
                                <Link to={`/resource/${resource.openfda?.brand_name?.[0]}`}>
                                    {resource.openfda?.brand_name?.[0]}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <p className="motto">~"Be Fit. Stay Healthy!"</p>
            </div>
        </div>
    );
}

export default Vv_Home;
