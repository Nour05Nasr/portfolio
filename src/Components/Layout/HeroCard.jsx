import React, { Component } from 'react';
import H1 from '../Common/H1'
import Button from '../Common/Button'
import './HeroCard.css';

const HeroCard = (props) => {
    return ( 
        <>
            <div className="hero">
                <div className="hero_temp">
                  <H1 title={props.title} />
                  <Button title='Let’s build your next project'/>
                </div>
            </div>
        </>
     );
}
 
export default HeroCard;