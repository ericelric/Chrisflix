import AuthContext from '../../context/AuthContext';
import { useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

const ProfilePage = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      toast('Successfully logged out.');
      navigate('/');
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <h1>Hi {currentUser ? currentUser.email : 'test'}</h1>
      <button onClick={handleLogout}>logout</button>
    </>
  );
};
export default ProfilePage;
