import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import ScrollStack, { ScrollStackItem } from '../Components/Layout/ScrollStack'
import CardSwap, { Card } from '../Components/Layout/CardSwap';
import PillNav from '../Components/Layout/PillNav';
import BubbleMenu from '../Components/Layout/BubbleMenu';
import GooeyNav from '../Components/Layout/GooeyNav';
import logo from '../Assets/logo.svg';
import hero from './../Assets/hero.mp4';
import portfolio from './../Assets/portfolio.svg';
import me3 from './../Assets/me3.png';
import me4 from './../Assets/me4.png';
import HeroCard from '../Components/Layout/HeroCard';
import Button from '../Components/Common/Button';
import H1 from '../Components/Common/H1';
import H2 from '../Components/Common/H2';
import H3 from '../Components/Common/H3';
import P from '../Components/Common/P';
import SpotlightCard from '../Components/Layout/SpotlightCard';
import showreel from './../Assets/showreel.mp4';
import LogoLoop from '../Components/Layout/LogoLoop';
import FigmaLogo from './../Assets/FigmaLogo.png';
import VSCLogo from './../Assets/VSCLogo.png';
import AELogo from './../Assets/AELogo.png';
import AILogo from './../Assets/AILogo.png';
import PSLogo from './../Assets/PSLogo.png';
import CategoryCard from '../Components/Layout/CategoryCard';
import CategoryCardFlip from '../Components/Layout/CategoryCardFlip';
import Input from '../Components/Common/Input'
import CategoryCardContainer from "../Components/Layout/CategoryCardContainer";
import Footer from '../Components/Layout/Footer';
import Logos from '../Components/Layout/Logos';
import Orb from '../Components/Common/Orb';
import './Home.css';

const items = [
  { label: "About Me", href: "/AboutMe" },
  { label: "My Services", href: "*" },
  { label: <img src={logo} alt="NN Logo" className="nav-logo" />, href:"/"},
  { label: "My Portfolio", href: "/MyPortfolio" },
  { label: "Contact Me", href: "/ContactMe" },
];

// const techLogos = [
//   { node: <SiReact />, title: "React", href: "https://react.dev" },
//   { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
//   { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
//   { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
// ];

const techLogos = [
  { src: FigmaLogo, alt: "Figma", href: "#" },
  { src: VSCLogo, alt: "VSC", href: "#" },
  { src: AELogo, alt: "AE", href: "#" },
  { src: AILogo, alt: "AI", href: "#" },
  { src: PSLogo, alt: "AI", href: "#" },
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
      <section className='relative section2_temp'>
      <HeroCard title="Nour Nasr UI/UX Designer & Creative Art Director" url="/ContactMe" />
      <video className="vid" autostart autoPlay loop src={hero}></video>
      </section>

<section className='relative'>
        <img class="port_temp" src={portfolio} alt="portfolio" />
        <img class="me_temp" src={me4} alt="self portrait" />
        <section class="section_temp1">
            <div class="div_temp">
                <H1 title='About Me'/>
                <P title='Welcome there, you have landed on my creative heaven. I’m a UI/UX Designer, Art Director, Graphic Designer and Front-End Developer. As a UI/UX designer I help to make your ideas come to life into an impactful visual identity, and user-friendly experiences. From branding walking through UI/UX Design to front-end development. I the between creativity and functionality. With experience in branding, UI/UX Design, and digital product design, I make designs that do not only look great but also make a real impact.'/>
                {/* <Button title='Know More About Me' url="/AboutMe"/> */}
                <Link to="/AboutMe"><Button title='Know More About Me'/></Link>
                {/* <Button title='Know More About Me' url="AboutMe" /> */}
            </div>
        </section>
</section>


<ScrollStack useWindowScroll={true} >
      <H1 title='What I can offer ?'/>
  <ScrollStackItem>
    <CategoryCard title="UI/UX Design & Prototyping" url="/Category/UI_UX_Design"/>
  </ScrollStackItem>
  
  <ScrollStackItem>
    <CategoryCard title='Graphic Design & Brand Identity' url="/Category/Graphic_Design"/>
  </ScrollStackItem>

  <ScrollStackItem>
    <CategoryCard title="Web Design & Front-End" url="/Category/Web_Design"/>
  </ScrollStackItem>

  <ScrollStackItem>
    <CategoryCard title="Motion Graphics" url="/Category/Motion_Graphics" />
  </ScrollStackItem>

  <ScrollStackItem>
    <CategoryCard title="Art Direction" url="/Category/Art_Direction" />
  </ScrollStackItem>
</ScrollStack>


{/* <div style={{ height: '100vh', position: 'relative' }}>
  <CardSwap
    cardDistance={60}
    verticalDistance={70}
    delay={5000}
    pauseOnHover={false}
  >
    <Card>
      <h3>Card 1</h3>
      <p>Your content here</p>
    </Card>
    <Card>
      <h3>Card 2</h3>
      <p>Your content here</p>
    </Card>
    <Card>
      <h3>Card 3</h3>
      <p>Your content here</p>
    </Card>
  </CardSwap>
</div> */}

        {/* <section class="section2_temp cards-container top_temp2">
            <h2 class="h1_temp h2_2">What I can offer ?</h2>
            <Link to="//Category/UI_UX_Design"><CategoryCard title='UI/UX Design & Prototyping'/></Link>
            <Link to="/Category/Graphic_Design"><CategoryCardFlip /></Link>
            <Link to="/AboutMe"><CategoryCard /></Link>
            <Link to="/AboutMe"><CategoryCardFlip /></Link>
            <Link to="/AboutMe"><CategoryCard /></Link>
        </section> */}

{/* <section className='relative'>
            <h1 className='cards_h'>What I can offer ?</h1>
        <section class="section2_temp top_temp relative">
            <CategoryCard title="UI/UX Design & Prototyping" url="/Category/UI_UX_Design"/>
            <CategoryCardFlip title='Graphic Design & Brand Identity' />
            <CategoryCard title="Web Design & & Front-End" url="/Category/Web_Design"/>
            <CategoryCardFlip title="Motion Graphics" url="/Category/Motion_Graphics" />
            <CategoryCard title="Art Direction" url="/Category/Art_Direction" />
        </section>
</section> */}

    {/* <div className="App">
      <CategoryCardContainer />
    </div> */}

  <section class="section2_temp top_temp2">
             <H1 title='My Showreel'/>
             <video class="img_temp top_temp2" controls src={showreel}></video>
  </section>
  

<div className='top_temp2' style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Orb
    hoverIntensity={1}
    rotateOnHover={true}
    hue={0}
    forceHoverState={false}
  />
</div>
  <section class="section2_temp">
          <h1 class="h1_temp q_h2"><span class="q_h1">“</span> I design & develop experiences that make people lives better <span class="q_h1">”</span></h1>
  </section>

  <section class="section2_temp top_temp1">
         <H1 title='My Tool Kit'/>
         <Logos />
    {/* <div className='top_temp2' style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
      Basic horizontal loop
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
      />
    </div> */}
  </section>

  <Footer />

</div>
     );
  }
   
  export default Index;