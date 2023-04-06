/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateProject from '../pages/Project';

const RouteProject = () => {
  console.log('aqui');
  return (
    <Routes>
      <Route path="/" element={<CreateProject />} />
    </Routes>
  );
};

export default RouteProject;