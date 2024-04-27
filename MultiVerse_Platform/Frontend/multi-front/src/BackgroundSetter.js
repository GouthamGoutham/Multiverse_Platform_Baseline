import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import logBackground from '../src/Authentication/Login/Login.jpg';
import home from '../src/HomePage/homepage.jpg';
import portfoliobg from '../src/HomePage/Portfolio/portfolio.jpg'; 
import sm_home_bg from '../src/shopsphere_marketplace/sm_home/sm_home.jpg';

const BackgroundSetter = () => {
  const location = useLocation();
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const RouteBackgrounds = {
      '/': logBackground,
      '/login': logBackground,
      '/register': logBackground,
      '/home': home,
      '/portfolio': portfoliobg,
      '/contact':home,
      '/shopsphere':sm_home_bg
    };

    setImageUrl(RouteBackgrounds[location.pathname]);
  }, [location]);

  useEffect(() => {
    // Set background image when component mounts
    document.body.style.backgroundImage = `url(${imageUrl})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';

    // Cleanup when component unmounts
    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.backgroundPosition = '';
    };
  }, [imageUrl]); // Re-run effect if imageUrl changes

  return null; // This component doesn't render anything
};

export default BackgroundSetter;
