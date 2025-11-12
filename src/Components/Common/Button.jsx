import React, { Component } from 'react';
import './Button.css';

const Button = (props) => {
    return ( 
        <>
            <div className="cta_div">
                <button className="cta_temp_1">{props.title}</button>
                <div className="cta_bg"></div>
            </div>
        </>
     );
}
 
export default Button;