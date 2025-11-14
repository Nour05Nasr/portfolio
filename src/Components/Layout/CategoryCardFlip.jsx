import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import H1 from '../Common/H1';
import P from '../Common/P';
import Button from '../Common/Button';    
import H3 from '..//Common/H3';
// import cardbg2 from './../Assets/cardbg2.png';  
import './CategoryCardFlip.css';

const CategoryCardFlip = (props) => {
    return ( 
        <>
                <div class="card_temp2 card_flip card_marg">
            <div class="section_temp">
                <div class="div_temp2_flip">
                    <H3 title={props.title} />
                    <P title='Logos, visual systems, social media templates, and digital assets and full branding strategies' />
                </div>
               <div className='cta_div_flip top_temp'>
                    <Link to={props.url}><Button title='View All Projects' /></Link>
                  {/* <Button title='View All Projects'/> */}
                </div>
            </div>
        </div>
        </>
     );
}
 
export default CategoryCardFlip;