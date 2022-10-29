import React from 'react'
import "./service.css";
import {BiCheck} from "react-icons/bi";

const Service = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>My Services</h2>
      <div className="container container__services">
        <article className="service">
          <div className="service__head">
            <h3>Project Managing</h3>
          </div>
          <ul className="service__list">
            <li>
                <BiCheck className='service__list-icon'/>
                <p>Zira</p>
            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>Asana</p>
            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>Requirement analysis</p>
            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>Proudct analysis</p>
            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>Perfect Planning</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
                <BiCheck className='service__list-icon'/>
                <p>React Development</p>
            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>Next js Development</p>
            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>Vanilla Development</p>
            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>Wordpress Development</p>
            </li>
            
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Designing</h3>
          </div>
          <ul className="service__list">
            <li>
                <BiCheck className='service__list-icon'/>
                <p>Figma</p>
            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>Photoshop</p>
            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>Lo-fi Design</p>
            </li>
           
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Service