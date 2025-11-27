import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Button.css';

const Button = (props) => {
    return ( 
        <>
            <div className="cta_div">
                <Link to={props.url}><Button title={props.title} /></Link>
                {/* <button className="cta_temp_1">{props.title}</button> */}
                <div className="cta_bg"></div>
            </div>
        </>
     );
}
 
export default Button;