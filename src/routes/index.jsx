import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import SignUP from '../pages/SignUP';
import RouteProject from './project';
import RouteComponents from './components';
import RouteSteps from './steps';

const PrincipalRoutes = () => (

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<SignUP />} />
      <Route path="/project/*" element={<RouteProject />} />
      <Route path="/components/*" element={<RouteComponents />} />
      <Route path="/steps/*" element={<RouteSteps />} />
    </Routes>
  </BrowserRouter>

);

export default PrincipalRoutes;