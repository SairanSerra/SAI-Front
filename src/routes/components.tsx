import React from "react";
import { Route, Routes } from "react-router-dom";
import RegisterComponents from '../pages/Components/Register';
import HomeComponents from '../pages/Components'

const RoutesComponents:React.FC = () => {
    return (
        <Routes>
            <Route index element={<HomeComponents />} />
            <Route path="/register" element={<RegisterComponents />} />
        </Routes>
    )
}

export default RoutesComponents;