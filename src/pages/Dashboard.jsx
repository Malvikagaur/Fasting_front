import React from 'react';
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6">Welcome to your dashboard!</main>
      </div>
    </div>
  );
};

export default Dashboard;
