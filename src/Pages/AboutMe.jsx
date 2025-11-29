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
        <title>About Me</title>
        <meta name="description" content="This is the About Me page" />
        <meta property="og:title" content="About Us" />
        <meta property="og:image" content="/images/about.png" />
       </Helmet>
      
<section className='relative'>
        <img class="port_temp" src={portfolio} alt="portfolio" />
        <img class="me_temp" src={me4} alt="self portrait" />
        <section class="section_temp1">
            <div class="div_temp">
                <H1 title='About Me'/>
                <P title='Welcome there, you have landed on my creative heaven. I’m a UI/UX Designer, Art Director, Graphic Designer and Front-End Developer. As a UI/UX designer I help to make your ideas come to life into an impactful visual identity, and user-friendly experiences. From branding walking through UI/UX Design to front-end development. I the between creativity and functionality. With experience in branding, UI/UX Design, and digital product design, I make designs that do not only look great but also make a real impact.'/>
            </div>
        </section>
</section>

<section className='relative top_temp2 section2_temp'>
   <AboutCard 
   img={certf}
      title='My certificates' 
      desc='I was accepted in to the ALX course AI Career Essentials in which helped in deepening my understanding of AI and its tools, and how they can be harnessed to optimize my workflow.' />
   
   <AboutCard2 
      title='My certificates' 
      desc='I participated as an exhibitor at Story Of Stone photography exhibition at Darb 1718 from Archcity with my photograph called "pyramids from a new perspective"  
      shedding the light on the Egyptian civilization and culture from various aspects.'
      img={exhbt} />
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