import MainLayout from '@layouts/MainLayout';
import { Chat, Home, Notifications, Settings } from '@pages/';
import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

export const MainRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route path="" element={<Home />} />
      <Route path="settings" element={<Settings />} />
      <Route path="chat" element={<Chat />} />
      <Route path="notifications" element={<Notifications />} />
    </Route>
  </Routes>
);
