import React, { useEffect } from 'react';
import  useAuth  from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate('/');
  }, []);

  return <p className="text-center mt-6">Logging out...</p>;
};

export default Logout;
