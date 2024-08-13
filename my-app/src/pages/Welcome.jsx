import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomeAdmin = () => {
    const navigate = useNavigate();
    const [fadeOut, setFadeOut] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setFadeOut(true);
      }, 2000);
  
      const navigateTimer = setTimeout(() => {
        navigate('/home');
      }, 3000); 
  
      return () => {
        clearTimeout(timer);
        clearTimeout(navigateTimer);
      };
    }, [navigate]);
  
    return (
      <div className={`welcome-admin ${fadeOut ? 'fade-out' : 'fade-in'}`}>
        <h1>Welcome Admin</h1>
      </div>
    );
  };
  
  export default WelcomeAdmin;