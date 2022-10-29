import React from 'react'
import ME from "../../assests/me-about.jpg";
import "./about.css";


import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
             <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ years</small>
             </article>
             <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Connections</h5>
              <small>70+ developers</small>
             </article>
             <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ completed</small>
             </article>
            </div>
            <p>I am excellent at <strong>Project Managing</strong> better at <strong>Frontend development</strong> and good at <strong>UI/UX Designing.</strong> </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About