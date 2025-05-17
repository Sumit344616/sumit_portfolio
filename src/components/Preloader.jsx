import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only show preloader on initial page load
    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      window.addEventListener('load', () => {
        setLoading(false);
      });
    }

    return () => {
      window.removeEventListener('load', () => {
        setLoading(false);
      });
    };
  }, []);

  if (!loading) return null;

  return (
    <div id="preloader">
      <div className="line"></div>
    </div>
  );
};

export default Preloader; 