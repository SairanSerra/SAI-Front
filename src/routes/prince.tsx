import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePrince from '../pages/Price';
import RegisterPrice from '../pages/Price/Register';

const RoutePrince:React.FC = () => {
    return(
        <Routes>
            <Route index element={<HomePrince />} />
            <Route path='/register' element={<RegisterPrice />} />
        </Routes>
    )
}

export default RoutePrince;