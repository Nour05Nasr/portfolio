import React, { Component } from 'react';
import error from '../Assets/error.png';
import "./Error404.css";

const Error404 = () => {
    return ( <>
    <a href="/"><button className='error_cta'>Back To Home</button></a>
    <img className="error_img" src={error} alt="404" />
    </> );
}
 
export default Error404;