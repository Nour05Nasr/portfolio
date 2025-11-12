import React, { Component } from 'react';
import H1 from '../Common/H1'
import Button from '../Common/Button'
import './HeroCard.css';

const HeroCard = () => {
    return ( 
        <>
            <div className="hero">
                <div className="hero_temp">
                  <H1 title='Nour Nasr UI/UX Designer & Creative Art Director'/>
                  <Button title='Let’s build your next project'/>
                </div>
            </div>
        </>
     );
}
 
export default HeroCard;