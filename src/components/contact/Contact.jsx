import React from 'react'
import "./contact.css";
import {MdOutlineMail} from "react-icons/md";
import {RiMessengerLine} from "react-icons/ri";
import {BsWhatsapp} from "react-icons/bs";
import  { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s9xi18s', 'template_blj05o9', form.current, '9J6YPEGLT5zvhPW0P')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert("Your message has sent successfully");
      }, (error) => {
          console.log(error.text);
          alert("Error occured");
      });
  };
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>khadkabobby916@gmail.com</h5>
            <a href="mailto:khadkabobby916@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Bobby Khadka</h5>
            <a href="https://www.messenger.com/t/100081597245112" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+977-9869482916</h5>
            <a href="https://api.whatsapp.com/send?phone=9779869482916" target="_blank">Send a message</a>
          </article>
        </div>
        {/* end of contact options*/ }
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='Name' placeholder='Your Name' required />
          <input type="email" name='Email' placeholder='Your Email' required />
          <textarea name="Message" rows="7" required placeholder='Your Message'></textarea> 
          <button className='btn btn-primary'>Send message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact