/*eslint-disable jsx-a11y/anchor-is-valid*/
import React from 'react'
import "./footer.css";
import {BsFacebook} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>BOBBY</a>
      <ul className="footer_permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100081597245112" rel="noreferrer" target="_blank"><BsFacebook/></a>
        <a href="https://www.instagram.com/khadka_bobby/" rel="noreferrer" target="_blank"><BsInstagram/></a>
        <a href="https://www.linkedin.com/in/bobby-khadka-972494225/" rel="noreferrer" target="_blank"><BsLinkedin/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Bobby Khadka. All rights reserverd</small>
      </div>
    </footer>
  )
}

export default Footer