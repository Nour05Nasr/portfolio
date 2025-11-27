import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";
import GooeyNav from './../Components/Layout/GooeyNav';
import logo from './../Assets/logo.svg';
import Button from './../Components/Common/Button';
import HeroCard from './../Components/Layout/HeroCard';
import H1 from './../Components/Common/H1';
import P from './../Components/Common/P';
import project1 from "./../Assets/project1.png"
import project2 from './../Assets/project2.png';
import project3 from './../Assets/project3.png';
import process from "./../Assets/process.png";
import figma from './../Assets/figma.png';
import teams from './../Assets/teams.png';
import vsc2 from './../Assets/vsc2.png';
import OvrCard from './../Components/Common/OvrCard';
import Filter from '../Components/Common/Filter';
import Image from '../Components/Common/Image';
import projHero from './../Assets/projHero.png';
import Footer from '../Components/Layout/Footer';
import './ProjectDetails.css';

const items = [
  { label: "About Me", href: "/AboutMe" },
  { label: "My Services", href: "/Myservices" },
  { label: <img src={logo} alt="Logo" className="nav-logo" />, href:"/"},
  { label: "My Portfolio", href: "/MyPortfolio" },
  { label: "Contact Me", href: "/ContactMe" },
];


const ProjectDetails = (props) => {
    let projects ={
        project1:{
            title: "ARTMENTO App",
            content: "This is the content for category 1",
            projimg: {project1},
        },
        project2:{
            title: "AR Escape Room Web",
            content: "This is the content for category 2",
            projimg: {project2},
        },
        project3:{
            title: "ITN TV OS",
            content: "This is the content for category 3",
            projimg: {project3},
        }
    }

      const { id } = useParams();
      console.log(id);
    //   console.log(projects[project1].title);

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

            {/* <Image img={project1} alt="project" /> */}

      <section className='relative section2_temp'>
      <HeroCard  title='Artmento the AI Art Mentor App' />
      <img className='vid' src={projHero} alt="project1" />
      </section>
      
        <section className='relative section2_temp top_temp2'>
            <img className='proj_img' src={project1} alt="project1" />
      <OvrCard 
      project='Project Overview' 
      desc='Led the creative direction and participated in the design of a 6 members group project aimed at mentoring and guiding artists through the AI art mentor App with interactive design emphasizing on teamwork, Multidisciplinary and balancing creativity with technical execution.' />

            <section className='section_temp0'>
            <div className='section2_temp'>
              <H1 title='Categories' />
                <div className='section_temp0'>
                    <Filter title='UI/UX Design'/>
                    <Filter title='Art Direction'/>
                </div>
              </div>

            <div className='section2_temp'>
              <H1 title='Tools Used' />
                <div className='section_temp0'>
                 <img src={figma} />
                 <img src={teams} />
                 <img src={vsc2} />
                </div>
              </div>
            </section>

      <OvrCard
      project='Design Process' 
      desc='Led the creative direction and participated in the design of a 6 members group project aimed at mentoring and guiding artists through the AI art mentor App with interactive design emphasizing on teamwork, Multidisciplinary and balancing creativity with technical execution.' />
               <img className='proj_img' src={process} alt="project1" />
        </section>

          <Footer />
</div>
     );
}
 
export default ProjectDetails;