/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateClients from '../pages/Client';

const RouteClients = () => {
  console.log('aqui');
  return (
    <Routes>
      <Route path="/" element={<CreateClients />} />
    </Routes>
  );
};

export default RouteClients;