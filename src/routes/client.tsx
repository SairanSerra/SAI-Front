import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeClient from '../pages/Client';
import RegisterClient from '../pages/Client/Register';

const RouteClient:React.FC = () => {
    return(
        <Routes>
            <Route index element={<HomeClient />} />
            <Route path='/register' element={<RegisterClient />} />
        </Routes>
    )
}

export default RouteClient;