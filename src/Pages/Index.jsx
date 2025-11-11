import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PillNav from './../Components/Layout/PillNav';
import logo from '../Assets/logo.svg';
import BubbleMenu from './../Components/Layout/BubbleMenu'
import GooeyNav from './../Components/Layout/GooeyNav'
import hero from './../Assets/hero.mp4'
import './Index.css';

// update with your own items
const items = [
  { label: "About Me", href: "#" },
  { label: "My Services", href: "#" },
  { label: <img src={logo} alt="Logo" className="nav-logo" />, href: "#" },
  { label: "My Portfolio", href: "#" },
  { label: "Contact Me", href: "#" },
];

  const  Index= () => {
    return ( 
        <div style={{
//   height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
}}>
  <GooeyNav className='nav'
    items={items}
    particleCount={15}
    particleDistances={[90, 10]}
    particleR={100}
    initialActiveIndex={0}
    animationTime={600}
    timeVariance={300}
    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
  />
    <section> 
            <div className="hero">
                <div className="hero_temp">
                    <h1 className="h1_temp">Nour Nasr UI/UX Designer<br />& Creative Art Director</h1>
                    <div className="cta_div">
                        <button className="cta_temp_1">Let’s build your next project</button>
                        <div className="cta_bg"></div>
                    </div>
                </div>
            </div>
            <video className="vid" autoplay loop src={hero}></video>
    </section>
</div>
     );
  }
   
  export default Index;