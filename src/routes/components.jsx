/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateComponents from '../pages/Component';

const RouteComponents = () => {
  console.log('aqui');
  return (
    <Routes>
      <Route path="/" element={<CreateComponents />} />
    </Routes>
  );
};

export default RouteComponents;