import React, { Component } from 'react';
// import project1 from "../Assets/project1.png"
// import project2 from '../Assets/project2.png';
// import project3 from '../Assets/project3.png';

const Image = (props) => {
    return ( <>
                <img className='proj_img' src={props.img} alt="project1" />
    </> );
}
 
export default Image;