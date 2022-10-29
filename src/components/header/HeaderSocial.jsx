import React from 'react'
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {BsFacebook} from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/bobby-khadka-972494225/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/khadkabobby" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.facebook.com/profile.php?id=100081597245112" target="_blank" rel="noreferrer"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocial;