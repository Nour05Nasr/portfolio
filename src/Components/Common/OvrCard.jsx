import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Button from '../Common/Button';
import H1 from '../Common/H1';
import P from '../Common/P';
import './OvrCard.css';

const OvrCard = (props) => {
    return ( <>
        <section className='relative section2_temp'>
            <div className='proj_card'>
              <H1 title={props.project} />
              <P title={props.desc} />
            </div>
      </section>
      </> );
}
 
export default OvrCard;