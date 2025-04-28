import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import MainLayout from '../layout/MainLayout';
import AuthLayout from '../layout/AuthLayout';

import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import ProfilePage from '../pages/ProfilePage';
import FastingPage from '../pages/FastingPage';
import MealPage from '../pages/MealPage';
import ActivityPage from '../pages/ActivityPage';
import GoalsPage from '../pages/GoalsPage';
import ProgressPage from '../pages/ProgressPage';
import BmiPage from '../pages/BmiPage';
import NotFound from '../pages/NotFound';

import { AuthContext } from '../context/AuthContext';

const AppRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Routes>
      
      <Route path="/" element={<Home />} />

      
      <Route element={<AuthLayout />}>
        <Route path="/login" element={!isAuthenticated ? <LoginPage /> : <Navigate to="/dashboard" />} />
        <Route path="/register" element={!isAuthenticated ? <RegisterPage /> : <Navigate to="/dashboard" />} />
      </Route>

      
      <Route element={isAuthenticated ? <MainLayout /> : <Navigate to="/login" />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/fasting" element={<FastingPage />} />
        <Route path="/meals" element={<MealPage />} />
        <Route path="/activity" element={<ActivityPage />} />
        <Route path="/goals" element={<GoalsPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/bmi" element={<BmiPage />} />
      </Route>

      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

