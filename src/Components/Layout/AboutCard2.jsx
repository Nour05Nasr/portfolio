import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Button from '../Common/Button';
import H1 from '../Common/H1';
import P from '../Common/P';
import './AboutCard.css';

const AboutCard2 = (props) => {
    return ( <>
        <section className='relative about_card section_temp'>
            <div className=' section2_temp'>
              <H1 title={props.title} />
              <P title={props.desc} />
            </div>
            <img className='img0' src={props.img} alt="certificate" />
      </section>
      </> );
}
 
export default AboutCard2;