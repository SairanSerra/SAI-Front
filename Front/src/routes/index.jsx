import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import SignUP from '../pages/SignUP';

const PrincipalRoutes = () => (

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<SignUP />} />
    </Routes>
  </BrowserRouter>

);

export default PrincipalRoutes;