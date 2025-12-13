import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import ContactMe from './Pages/ContactMe';
import Category from './Pages/Category';
import ProjectDetails from './Pages/ProjectDetails';
import MyPortfolio from './Pages/MyPortfolio';
import Test from './Pages/Test';
import Error404 from './Pages/Error404';

const RoutingApp = () => {
    return (
        
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/ContactMe" element={<ContactMe />} />
        {/* <Route path="/Category" element={<Category />} />
        <Route path="/ProjectDeails" element={<ProjectDetails />} /> */}
        <Route path="/Category/:id" element={<Category />} />
        <Route path="/ProjectDetails/:id" element={<ProjectDetails />} />
        <Route path="/MyPortfolio" element={<MyPortfolio />} />
        <Route path="/Test" element={<Test />} />

        <Route path="*" element={<Error404 />} />
    </Routes>
    </BrowserRouter>
    
     );
}
 
export default RoutingApp;