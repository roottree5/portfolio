// src/components/Contact.js
import React, { useState } from 'react';
import './Contact.css';
import GithubIcon from '../assets/github.svg';
import LinkedinIcon from '../assets/linkedin.svg';
import VelogIcon from '../assets/velog.svg';

const Contact = () => {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [message, setMessage] = useState('');

 const handleSubmit = (e) => {
   e.preventDefault();
   const mailtoLink = `mailto:man506828@gmail.com?subject=Contact from ${name}&body=${message}%0D%0A%0D%0AFrom: ${email}`;
   window.location.href = mailtoLink;
 };

 return (
   <section className="contact" id="contact">
     <div className="container">
       <h2>Contact</h2>
       <form className="contact-form" onSubmit={handleSubmit}>
         <div className="form-group">
           <label htmlFor="name">Name</label>
           <input
             type="text"
             id="name"
             value={name}
             onChange={(e) => setName(e.target.value)}
             required
           />
         </div>
         <div className="form-group">
           <label htmlFor="email">Email</label>
           <input
             type="email"
             id="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             required
           />
         </div>
         <div className="form-group">
           <label htmlFor="message">Message</label>
           <textarea
             id="message"
             value={message}
             onChange={(e) => setMessage(e.target.value)}
             required
           ></textarea>
         </div>
         <button type="submit">Send Message</button>
       </form>
       
       <div className="social-links">
         <a href="https://github.com/roottree5" target="_blank" rel="noopener noreferrer">
           <img src={GithubIcon} alt="Github" className="social-icon" />
         </a>
         <a href="https://www.linkedin.com/in/yeon-kim-78a9a82a7/" target="_blank" rel="noopener noreferrer">
           <img src={LinkedinIcon} alt="LinkedIn" className="social-icon" />
         </a>
         <a href="https://velog.io/@man506828/posts" target="_blank" rel="noopener noreferrer">
           <img src={VelogIcon} alt="Velog" className="social-icon" />
         </a>
       </div>
     </div>
   </section>
 );
};

export default Contact;