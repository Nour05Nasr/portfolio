import React, { Component } from 'react';
import H1 from '../Common/H1';
import P from '../Common/P';
import Button from '../Common/Button';    
import H3 from '..//Common/H3';
import {Link} from 'react-router-dom';
// import cardbg2 from './../Assets/cardbg2.png';  
import './CategoryCardFlip.css';

const CategoryCardFlip = () => {
    return ( 
        <>
                <div class="card_temp2 card_flip card_marg">
            <div class="section_temp">
                <div class="div_temp2_flip">
                  <h2 class="h2_temp2">Graphic Design & Brand Identity</h2>
                    <P title='Logos, visual systems, social media templates, and digital assets and full branding strategies' />
                </div>
               <div className='cta_div_flip top_temp'>
                    <Link to="/Category"><Button title='View All Projects' /></Link>
                  {/* <Button title='View All Projects'/> */}
                </div>
            </div>
        </div>
        </>
     );
}
 
export default CategoryCardFlip;