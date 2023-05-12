import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RegisterProject from '../pages/Project/Register';
import HomeProject  from '../pages/Project';

const RouteProject:React.FC = () => {
    return(
        <Routes>
       
            <Route index element={<HomeProject />} />
            <Route path='/register' element={<RegisterProject />} />
        </Routes>
    )
}

export default RouteProject;