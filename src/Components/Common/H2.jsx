import React, { Component } from 'react';
import './H2.css';

const H2 = (props) => {
    return (  
        <>
          <h2 className="h2_temp">{props.title}</h2>
        </>
    );
}
 
export default H2;