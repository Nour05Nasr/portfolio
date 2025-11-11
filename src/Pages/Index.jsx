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


// const items = [
//   {
//     label: 'home',
//     href: '#',
//     ariaLabel: 'Home',
//     rotation: -8,
//     hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
//   },
//   {
//     label: 'about',
//     href: '#',
//     ariaLabel: 'About',
//     rotation: 8,
//     hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
//   },
//   {
//     label: 'projects',
//     href: '#',
//     ariaLabel: 'Projects',
//     rotation: 8,
//     hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
//   },
//   {
//     label: 'blog',
//     href: '#',
//     ariaLabel: 'Blog',
//     rotation: 8,
//     hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
//   },
//   {
//     label: 'contact',
//     href: '#',
//     ariaLabel: 'Contact',
//     rotation: -8,
//     hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
//   }
// ];


  const  Index= () => {
    return ( 
        <div style={{
//   height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
//   backdrop-filter: blur(25px),
//   background: (176, 176, 176, 0.4),
}}>
  <GooeyNav
    items={items}
    particleCount={15}
    particleDistances={[90, 10]}
    particleR={100}
    initialActiveIndex={0}
    animationTime={600}
    timeVariance={300}
    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
  />
    {/* <section> 
            <div class="hero">
                <div class="hero_temp">
                    <h1 class="h1_temp">Nour Nasr UI/UX Designer<br>& Creative Art Director</h1>
                    <div class="cta_div">
                        <button class="cta_temp_1">Let’s build your next project</button>
                        <div class="cta_bg"></div>
                    </div>
                </div>
            </div>
            <video class="vid" autoplay loop src={hero}></video>
    </section> */}
</div>

//         <BubbleMenu
// //   logo={<span style={{ fontWeight: 700 }}>RB</span>}
//   logo={<img src={logo}></img>}
//   items={items}
//   menuAriaLabel="Toggle navigation"
//   menuBg="#ffffff"
//   menuContentColor="#111111"
//   useFixedPosition={false}
//   animationEase="back.out(1.5)"
//   animationDuration={0.5}
//   staggerDelay={0.12}
// />
//         <PillNav
//   logo={logo}
//   logoAlt="Company Logo"
//   items={[
//     { label: 'Home', href: '/' },
//     { label: 'About', href: '/about' },
//     { label: 'Services', href: '/services' },
//     { label: 'Contact', href: '/contact' }
//   ]}
//   activeHref="/"
//   className="custom-nav"
//   ease="power2.easeOut"
//   baseColor="#000000"
//   pillColor="#ffffff"
//   hoveredPillTextColor="#ffffff"
//   pillTextColor="#000000"
// />
     );
  }
   
  export default Index;