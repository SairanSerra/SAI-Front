import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Login from '../pages/SignIn';
import Feature from '../pages/Feature';

const PrincipalRoutes:React.FC = () => (

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/feature" element={<Feature />} />
        </Routes>
    </BrowserRouter>

);

export default PrincipalRoutes;