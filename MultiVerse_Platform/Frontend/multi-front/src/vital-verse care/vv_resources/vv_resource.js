import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Vc_Navbar from "../vv_Navbar/vv_navbar";
import './vv_resource.css';

const Vv_ResourceDetails = () => {
    const { resourceId } = useParams();
    const [resource, setResource] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        const fetchResource = async () => {
            try {
                
                const response = await fetch(
                    `https://api.fda.gov/drug/label.json?search=${encodeURIComponent(resourceId)}`
                );
                const data = await response.json();
                console.log("data", data);
                setResource(data.results[0]);
                // Fetch image based on product name
                const brandName = data.results[0]?.openfda?.brand_name?.[0];
                if (brandName) {
                    fetchImage(brandName);
                }
            } catch (error) {
                setError('Error fetching resource details');
            } finally {
                setLoading(false);
            }
        };
    
        fetchResource();
    }, [resourceId]);
    
    

    const fetchImage = async (productName) => {
        try {
            // Use an external image API to fetch images based on product name
            const response = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(productName)}&client_id=_PRKwe1atbNW58pFe_9vfmieuf8g56o5GZzL9EeNFA4`);
            const data = await response.json();
            if (data.results && data.results.length > 0) {
                setImageUrl(data.results[0].urls.small); // Adjust the image size as needed
            }
        } catch (error) {
            console.error('Error fetching image:', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!resource) {
        return <div>No resource found</div>;
    }

    return (
        <div>
            <Vc_Navbar />
            <div className="vv-resource-details-container">
                {imageUrl && <img src={imageUrl} alt={resource.openfda?.brand_name?.[0] || 'Unknown'} className="resource-image" />}
                <h1>{resource.openfda?.brand_name?.[0] || 'Unknown'}</h1>
                <p>{resource.description || 'No description available.'}</p>
            </div>
        </div>
    );
}

export default Vv_ResourceDetails;
