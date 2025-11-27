import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import H1 from '../Common/H1'
import P from '../Common/P'
import Button from '../Common/Button'
import './HeroCard.css';

const HeroCard = (props) => {
    return ( 
        <>
            <div className="hero">
                <div className="hero_temp">
                  <H1 title={props.title} />
                  {/* <P title={props.desc} /> */}
                     <Link to={props.url}><Button title='Let’s build your next project' /></Link>
                </div>
            </div>
        </>
     );
}
 
export default HeroCard;