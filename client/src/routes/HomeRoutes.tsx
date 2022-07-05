import Home from '@pages/Home/Home';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const HomeRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);
