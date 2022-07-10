import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthRoutes } from './AuthRoutes';
import { MainRoutes } from './MainRoutes';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthRoutes />
      <MainRoutes />
    </BrowserRouter>
  );
};

export default Router;
