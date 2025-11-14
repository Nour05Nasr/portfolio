import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";
import GooeyNav from './../Components/Layout/GooeyNav';
import logo from '../Assets/logo.svg';
import HeroCard from './../Components/Layout/HeroCard';
import Button from './../Components/Common/Button';
import H1 from './../Components/Common/H1';
import P from './../Components/Common/P';
import ui_ux2 from './../Assets/ui_ux2.png';
import project1 from "./../Assets/project1.png"
import project2 from './../Assets/project2.png';
import project3 from './../Assets/project3.png';
import ProjectCard from './../Components/Layout/ProjectCard';
import './Category.css';

 const items = [
  { label: "About Me", href: "#" },
  { label: "My Services", href: "#" },
  { label: <img src={logo} alt="Logo" className="nav-logo" />, href: "#" },
  { label: "My Portfolio", href: "#" },
  { label: "Contact Me", href: "#" },
];

const Category = () => {
    let categories ={
        category2:{
            title: "UI/UX Design & Prototyping",
            content: "This is the content for category 1",
            heroimg: {ui_ux2},
        },
        category2:{
            title: "Graphic Design & Brand Identity",
            content: "This is the content for category 2",
            heroimg: {logo},
        },
        category3:{
            title: "Web Design & Front-End",
            content: "This is the content for category 3",
            heroimg: {logo},
        },
        category4:{
            title: "Motion Graphics",
            content: "This is the content for category 4",
            heroimg: {logo},
        },
        category5:{
            title: "Art Direction",
            content: "This is the content for category 5",
            heroimg: {logo},
        }
    }

  const { id } = useParams();
  console.log(id);

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

     <section className='relative section2_temp'>
      <HeroCard  title='UI/UX Design & Prototyping Projects' />
      <img className="vid" src={ui_ux2}></img>
      </section>

      <ProjectCard 
      project='ARTMENTO App' 
      img={project1} desc='Led the creative direction and participated in the design of a 6 members group project aimed at mentoring and guiding artists through the AI art mentor App with interactive design emphasizing on teamwork, Multidisciplinary and balancing creativity with technical execution.' 
      url='/ProjectDetails/AI_Art_Mentor_APP' />
      <ProjectCard 
      project='AR Escape Room Web' 
      img={project2} 
      desc='Led the design and creative direction of a 3-phase AR Escape room group project aimed at merging immersive storytelling with interactive design emphasizing on teamwork, Multidisciplinary and balancing creativity with technical execution.'
       url='/ProjectDetails/AR_Escape_Room_Web' />
      <ProjectCard 
      project='ITN TV OS' 
      img={project3} 
      desc='I designed the ITN Tv Os logo and prototype with the aim to create a user-friendly, visually cohesive, and feature-rich smart TV interface and brand identity while providing an optimal user experience.  The final product integrates interactive features, and modern design ensuring an engaging and intuitive experience for users of all proficiency levels. ' 
      url='/ProjectDetails/ITN_TV_OS' />
</div>
     );
}
 
export default Category;