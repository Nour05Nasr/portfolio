import React, { Component } from 'react';
import './H1.css';

const H1 = (props) => {
    return (  
        <>
          <h1 className="h1_temp">{props.title}</h1>
        </>
    );
}
 
export default H1;