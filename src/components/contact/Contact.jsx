import React, { useRef, useState } from 'react'
import './contact.css'
import LinkedIn from '../../img/linkedin.png'
import GitHub from '../../img/github.png'
import WhatsApp from '../../img/whatsapp.png'
import emailjs from '@emailjs/browser';

const Contact = () => {

const formRef = useRef()
const [done, setDone] = useState(false)

const handleSubmit = (e)=> {
  e.preventDefault()

  emailjs.sendForm(
      'service_tk81xfe', 
      'template_8kdc576', 
      formRef.current, 
      'vYIF2fM3MWTNTfIrV'
      )
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
}

return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <a href="https://github.com/Greysonnn" target='_blank'><img src={GitHub} alt="GitHub" className="c-icon" /></a>
              
            </div>
            <div className="c-info-item">
              <a href="https://www.linkedin.com/in/greyson-e-70b72a20a/" target='_blank'><img className="c-icon" src={LinkedIn} alt="LinkedIn" /></a>
              
            </div>
            <div className="c-info-item">
              <a href="https://www.whatsapp.com/" target='_blank'><img className="c-icon" src={WhatsApp} alt="WhatsApp" /></a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Get in touch</b> Always available for
            freelancing if the right project comes aross my desk.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder='Name' name='user_name' />
            <input type="text" placeholder='Subject' name='user_subject' />
            <input type="text" placeholder='Email' name='user_email' />
            <textarea placeholder='Message' name="message" id="" cols="30" rows="10"></textarea>
            <button className='c-btn'>Submit</button>
            <div className="confirm">{done && "Message sent, thank you!"}</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;