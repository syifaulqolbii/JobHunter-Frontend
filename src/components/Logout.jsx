// components/Logout.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem('token');

    // Redirect the user to the login page
    navigate('/login');
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
