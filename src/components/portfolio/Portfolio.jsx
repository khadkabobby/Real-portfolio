import React from 'react'
import PortfoliCard from './PortfoliCard'
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <PortfoliCard/>
      </div>
    </section>
  )
}

export default Portfolio