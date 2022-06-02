import React from 'react'
import './Contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vaerx9k', 'template_py8084q', form.current, '8wVr5zay34cP1yWJD')
    e.target.reset();
  }
  return (
    <section id='contact'>
      <h5>Get In Tutch</h5>
      <h2>Contact Me</h2>
      <div className="container conatact_container">
        <div className="conact_options">
          <article className="contact_option">
            <MdOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>sofiane77.nedjai@gmail.com</h5>
            <a href="mailto:sofiane77.nedjai@gmail.com">Send a message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon"/>
            <h4>Messanger</h4>
            <h5>Sifou Breezy</h5>
            <a href="https://m.me/sifou.breezy">Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon"/>
            <h4>WatsApp</h4>
            <h5>+213676920598</h5>
            <a href="https://api.watsapp.com/send?phone+213676920598">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Full name" required/>
          <input type="text" name="email" placeholder="Email" required/>
          <textarea name="message"  rows="7" placeholder='your messagea' ></textarea>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact