import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import logo from '../Assets/logo.svg';
import portfolio from './../Assets/portfolio.svg';
import GooeyNav from '../Components/Layout/GooeyNav';
import FigmaLogo from './../Assets/FigmaLogo.png';
import VSCLogo from './../Assets/VSCLogo.png';
import AELogo from './../Assets/AELogo.png';
import AILogo from './../Assets/AILogo.png';
import PSLogo from './../Assets/PSLogo.png';
import P from '../Components/Common/P';
import H1 from '../Components/Common/H1';
import HeroCard from '../Components/Layout/HeroCard';
import Button from '../Components/Common/Button';
import me4 from './../Assets/me4.png';
import OvrCard from './../Components/Common/OvrCard';
import projHero from './../Assets/projHero.png';
import certf from './../Assets/certf.png';
import exhbt from './../Assets/exhbt.png';
import AboutCard from '../Components/Layout/AboutCard';
import AboutCard2 from '../Components/Layout/AboutCard2';
import Logos from '../Components/Layout/Logos';
import Footer from '../Components/Layout/Footer';
import FAQ from "../Components/Layout/FAQ";
import contact from './../Assets/contact.png';
import VideoMask from '../Components/Layout/VideoMask';
import './AboutMe.css';
//2222


const items = [
  { label: "About Me", href: "/AboutMe" },  
  { label: "My Services", href: "/Myservices" },
  { label: <img src={logo} alt="Logo" className="nav-logo" />, href:"/"},
  { label: "My Portfolio", href: "/MyPortfolio" },
  { label: "Contact Me", href: "/ContactMe" },
];  



const AboutMe = () => {
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
        <Helmet>
           <meta name="description" content="This is the Contact Me page" />
          <meta property="og:title" content="Contact Me" />
          <meta property="og:image" content="/images/about.png" />
       </Helmet>

       {/* <VideoMask /> */}

       <section className='relative'>
        <H1 title='My Socials' />
        <img className='top_temp2' src={contact} />
       </section>


    <section class="section2_temp top_temp2">
        <H1 title='FAQ'/>
        <FAQ />
    </section>

  <section class="section2_temp top_temp2">
         <H1 title='My Tool Kit'/>
         <Logos />
    </section>

  <Footer />

        </div>
     );
}
 
export default AboutMe;