import React from "react";
import { Route, Routes } from "react-router-dom";
import RegisterComponents from '../pages/Components/Register';

const RoutesComponents:React.FC = () => {
    return (
        <Routes>
            <Route path="/register" element={<RegisterComponents />} />
        </Routes>
    )
}

export default RoutesComponents;