import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePracticalTest  from '../pages/PracticalTest';

const RoutePracticalTest:React.FC = () => {
    return(
        <Routes>
       
            <Route index element={<HomePracticalTest />} />
        </Routes>
    )
}

export default RoutePracticalTest;