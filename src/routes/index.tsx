import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from '../pages/Home/Contact';
import Home from '../pages/Home';
import Login from '../pages/SignIn';
import Feature from '../pages/Home/Feature';
import SignUP from '../pages/SignUp';
import ProductHome from '../pages/Home/Product';
import HomeLogged from '../pages/HomeLogged';

const PrincipalRoutes:React.FC = () => (

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home/feature" element={<Feature />} />
            <Route path="/signup" element={<SignUP />} />
            <Route path="/home/product" element={<ProductHome />} />
            <Route path="/home" element={<HomeLogged />} />
        </Routes>
    </BrowserRouter>

);

export default PrincipalRoutes;