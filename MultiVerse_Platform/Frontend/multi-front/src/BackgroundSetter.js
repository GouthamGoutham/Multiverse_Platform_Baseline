import React, { useEffect } from 'react';

const BackgroundSetter = ({ imageUrl }) => {
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
