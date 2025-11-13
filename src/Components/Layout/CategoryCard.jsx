import React, { Component } from 'react';
import H1 from '../Common/H1';
import P from '../Common/P';
import Button from '../Common/Button';    
import H3 from '..//Common/H3';
import {Link} from 'react-router-dom';
// import cardbg2 from './../Assets/cardbg2.png';  
import './CategoryCard.css';

const CategoryCard = (params) => {
    return ( 
        <>
        <div class="card_temp2 card_marg">
            <div class="section_temp">
                <div class="div_temp2">
                    <H3 title='UI/UX Design & Prototyping' />
                    <P title='Research, wireframes, user flows, and interfaces designed for user-friendly experiences' />
                </div>
                <div className='top_temp'>
                    <Link to="/Category"><Button title='View All Projects' /></Link>
                  {/* <Button title='View All Projects'/> */}
                </div>
            </div>
        </div>
        </>
     );
}
 
export default CategoryCard;