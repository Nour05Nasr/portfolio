 import React from 'react';
 import { BrowserRouter, Routes, Route } from 'react-router-dom';
 import Index from '../Pages/Index';

const RoutingApp = () => {
    return (
        
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Index />} />

        <Route path="*" element={<Error404 />} />
    </Routes>
    </BrowserRouter>
    
     );
}
 
export default RoutingApp;