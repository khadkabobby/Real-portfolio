import React from 'react'
import "./testinomial.css";

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import AVTR1 from "../../assests/avatar1.jpg";
import AVTR2 from "../../assests/avatar2.jpg";
import AVTR3 from "../../assests/avatar3.jpg";
import AVTR4 from "../../assests/avatar4.jpg";

const data=[
  {
    avatar:AVTR1,
    name:"Bobby Khadka",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, officiis, quo labore corrupti, saepe debitis architecto similique est numquam minima officia ab provident repellendus nostrum."
  },
  {
    avatar:AVTR2,
    name:"Giriraj Khadka",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, officiis, quo labore corrupti, saepe debitis architecto similique est numquam minima officia ab provident repellendus nostrum."
  },
  {
    avatar:AVTR3,
    name:"Nirman Khadka",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, officiis, quo labore corrupti, saepe debitis architecto similique est numquam minima officia ab provident repellendus nostrum."
  },
  {
    avatar:AVTR4,
    name:"Rabee Khadka",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, officiis, quo labore corrupti, saepe debitis architecto similique est numquam minima officia ab provident repellendus nostrum."
  },
]



const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container" 
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        
      
       {
        data.map(({avatar,name,review},index)=>(
           <SwiperSlide className="testimonials" id={index}>
          <div className="client__avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <h5 className="client__name">{name}</h5>
          <small className="client__review">
            {review}
          </small>
        </SwiperSlide>
        ))
       }
      </Swiper>
    </section>
  )
}

export default Testimonial