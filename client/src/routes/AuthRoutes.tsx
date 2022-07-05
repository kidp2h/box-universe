import Login from '@pages/Login/Login';
import Register from '@pages/Register/Register';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const AuthRoutes: React.FC = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Routes>
);
