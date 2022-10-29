/*eslint-disable jsx-a11y/anchor-is-valid*/
import React from 'react'
import "./nav.css";
import {AiOutlineHome} from "react-icons/ai";
import {BiBook} from "react-icons/bi";
import {AiOutlineUser} from "react-icons/ai";
import {RiServiceLine} from "react-icons/ri";
import {BiMessageSquareDetail} from "react-icons/bi";
import { useState } from 'react';

const Nav = () => {
  const [navActive,setNavActive]=useState("#");
  return (
    <nav className="nav">
      <a href="#" onClick={()=>setNavActive("#")} className={navActive==="#"? "active":" "}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setNavActive("#about")} className={navActive==="#about"?"active":" "}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setNavActive("#experience")} className={navActive==="#experience"?"active":" "}><BiBook/></a>
      <a href="#services" onClick={()=>setNavActive("#services")} className={navActive==="#services"?"active":" "}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>setNavActive("#contact")} className={navActive==="#contact"?"active":" "} ><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav