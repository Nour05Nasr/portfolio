import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PillNav from './../Components/Layout/PillNav';
import BubbleMenu from './../Components/Layout/BubbleMenu';
import GooeyNav from './../Components/Layout/GooeyNav';
import logo from '../Assets/logo.svg';
import hero from './../Assets/hero.mp4';
import portfolio from './../Assets/portfolio.png';
import me2 from './../Assets/me2.jpg';
import HeroCard from './../Components/Layout/HeroCard';
import Button from './../Components/Common/Button';
import H2 from './../Components/Common/H2'
import P from './../Components/Common/P';
import './Index.css';
import SpotlightCard from './../Components/Layout/SpotlightCard';

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
      {/* <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
 TESTTTTTTTTTTTTTTT
</SpotlightCard> */}
      <HeroCard />
      <video className="vid" autostart autoPlay loop src={hero}></video>

        <img class="port_temp" src={portfolio} alt="portfolio" />
        <img class="me_temp" src={me2} alt="self portrait" />
        <section class="section_temp1 top_temp">
            <div class="div_temp">
                <H2 title='About Me'/>
                <P title='Welcome there, you have landed on my creative heaven. I’m a UI/UX Designer, Art Director, Graphic Designer and Front-End Developer. As a UI/UX designer I help to make your ideas come to life into an impactful visual identity, and user-friendly experiences. From branding walking through UI/UX Design to front-end development. I the between creativity and functionality. With experience in branding, UI/UX Design, and digital product design, I make designs that do not only look great but also make a real impact.'/>
                <Button title='Let’s build your next project'/>
            </div>
        </section>
</div>
     );
  }
   
  export default Index;