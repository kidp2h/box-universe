import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthRoutes } from './AuthRoutes';
import { HomeRoutes } from './HomeRoutes';

const Router: React.FC = () => (
  <BrowserRouter>
    <AuthRoutes />
    <HomeRoutes />
  </BrowserRouter>
);

export default Router;
