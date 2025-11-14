import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";
import GooeyNav from './../Components/Layout/GooeyNav';
import logo from './../Assets/logo.svg';
import Button from './../Components/Common/Button';
import H1 from './../Components/Common/H1';
import P from './../Components/Common/P';
import project1 from "./../Assets/project1.png"
import project_overview from './../Assets/project_overview.svg';
import './ProjectDetails.css';

  const items = [
  { label: "About Me", href: "#" },
  { label: "My Services", href: "#" },
  { label: <img src={logo} alt="Logo" className="nav-logo" />, href: "#" },
  { label: "My Portfolio", href: "#" },
  { label: "Contact Me", href: "#" },
];

const ProjectDetails = () => {
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

        <section>
            <img src={project1} alt="" />
            <div className='overview_card'>
              <H1 title='ARTMENTO App Overview' />
              <P title='Led the creative direction and participated in the design of a 6 members group project aimed at mentoring and guiding artists through the AI art mentor App with interactive design emphasizing on teamwork, Multidisciplinary and balancing creativity with technical execution.' />
            </div>
        </section>
</div>
     );
}
 
export default ProjectDetails;