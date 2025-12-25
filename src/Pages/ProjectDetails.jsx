import React, { Component, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { supabase } from '../Supabase';
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
  { label: "My Services", href: "*" },
  { label: <img src={logo} alt="NN Logo" className="nav-logo" />, href:"/"},
  { label: "My Portfolio", href: "/MyPortfolio" },
  { label: "Contact Me", href: "/ContactMe" },
];

const ProjectDetails = (props) => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([{
      id:"",
      Title: "",
      Thumbnail: "",       
      Path: "",       
      Cover_img: "",
      Cover_Title: "",
      Date: "",       
      Category: [],       
      Overview: "",       
      Process: "",       
      Images: "",       

  }]);
  
      useEffect(() => {
          async function CallGetAPI(){
              const res = await supabase.from("Projects").select("*");
              setProjects(res.data);
              setLoading(false);
              // console.log(res.data[0].Title);
              // console.log(res.data[0].Cover_img);
              // console.log(res.data[0].Date);
          }
          CallGetAPI();
      },[]);

    if (loading) return <p>Loading...</p>;
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
        <title>Project Details</title>
        <meta name="description" content="This is the ProjectDetails page" />
        <meta property="og:title" content="ProjectDetails" />
        <meta property="og:image" content="/images/about.png" />
       </Helmet>

            {/* <Image img={project1} alt="project" /> */}

      <section className='relative section2_temp'>
      <HeroCard  title= {projects[2].Cover_Title}/>
      <img className='vid' src={projects[2].Cover_img} alt="" />
      </section>
      
        <section className='relative section2_temp top_temp2'>
      <img className='proj_img' src={projects[2].ThumbNail} alt="project1" />
      <OvrCard 
      project='Project Overview' 
      desc={projects[2].Overview} />

            <section className='section_temp0'>
            <div className='section2_temp'>
              <H1 title='Categories' />
              
                <div className='section_temp0'>
                  {
                  projects[0].Category.map((c)=>{
                   return <Filter title={c}/>
        })}
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
      desc={projects[2].Process}/>
               {/* <img className='proj_img' src={process} alt="project1" /> */}
                {
          projects[2].Images.map((c)=>{
            console.log(c); 
            return <div>
              
              <img src={c.url} alt={c.alt}/>
              </div>
          })
        }
        </section>

        <Footer />
</div>
     );
}
 
export default ProjectDetails;