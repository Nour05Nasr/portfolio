import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './Pages/Index';
import AboutMe from './Pages/AboutMe';
import Error404 from './Pages/Error404';

const RoutingApp = () => {
    return (
        
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/AboutMe" element={<AboutMe />} />

        <Route path="*" element={<Error404 />} />
    </Routes>
    </BrowserRouter>
    
     );
}
 
export default RoutingApp;