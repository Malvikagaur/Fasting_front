import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to FastiTrack</h1>
      <p className="text-lg mb-6">Your personalized fasting and health tracker</p>
      <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Get Started
      </Link>
    </div>
  );
};

export default Home;
