import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Button from '../Common/Button';
import H1 from '../Common/H1';
import P from '../Common/P';
import './ProjectCard.css';

const ProjectCard = (props) => {
    return ( <>
          <section className='relative section2_temp'>
            <img className='proj_img' src={props.img} alt="project1" />
            <div className='proj_card'>
              <H1 title={props.project} />
              <P title={props.desc} />
              <Link to={props.url}><Button title='View Full Project' /></Link>
            </div>
      </section>
      </> );
}
 
export default ProjectCard;