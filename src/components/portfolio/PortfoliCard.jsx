import React from 'react'
import Data from "./Portfoli_data";
import "./portfolio_card.css";

const Portfoli_card = () => {
  return (
    Data.map((data)=>(
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={require('../../assests/'+data.img)} alt="" />
          </div>
          <h3>{data.title}</h3>
         <div className="portfolio__item-cta">
            <a href={data.link1} className='btn' rel="noreferrer" target="_blank" >Github</a>
            <a href={data.link2} className="btn btn-primary" rel="noreferrer" target="_blank" >Live Demo</a>
         </div>
        </article>

    ))
    
  )
}

export default Portfoli_card