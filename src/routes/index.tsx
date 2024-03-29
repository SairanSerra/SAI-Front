/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Contact from '../pages/Home/Contact';
import Home from '../pages/Home';
import Login from '../pages/SignIn';
import Feature from '../pages/Home/Feature';
import SignUP from '../pages/SignUp';
import ProductHome from '../pages/Home/Product';
import HomeLogged from '../pages/HomeLogged';
import HTTP404 from '../components/Http/404';
import RoutesComponents from './components';
import RoutePrince from './prince';
import RouteProject from './project';

const PrincipalRoutes:React.FC = () => (

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home/feature" element={<Feature />} />
            <Route path="/signup" element={<SignUP />} />
            <Route path="/home/product" element={<ProductHome />} />
            <Route path="/principal" element={<HomeLogged />} />
            <Route path="*" element={<HTTP404 />} />
            <Route path="/components/*" element={<RoutesComponents />} />
            <Route path="/prince/*" element={<RoutePrince />} />
            <Route path="/project/*" element={<RouteProject />} />
        </Routes>
    </BrowserRouter>

);

export default PrincipalRoutes;