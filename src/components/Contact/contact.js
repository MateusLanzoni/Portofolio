import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import linkedinIcon from '../../assets/circle-linkedin.png';
import xIcon from '../../assets/xIcon.png';
import youtubeIcon from '../../assets/youtube.png';
import instagramIcon from '../../assets/instagram.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_n7ldfzq', 'template_6tlmmfr', form.current, 'qDKedRmkQayq7A43k')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent!');
            }, (error) => {
                console.log(error.text);
            });
    };
    
    return (
        <div id='contactPage'>
            <div id="clients">
                <h1 className="contactPageTitle">My clients</h1>
                <span className="clientDesc">
                I have had the opportunity to work with a diverse group of companies. 
                Some of the notable companies I have worked with include:
                </span>
                <div className="clientImgs">
                    <img src={Walmart} alt="Client" className="clientImg" />
                    <img src={Adobe} alt="Client" className="clientImg" />
                    <img src={Microsoft} alt="Client" className="clientImg" />
                    <img src={Facebook} alt="Client" className="clientImg" />                   
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your name' name='your_name' />
                    <input type="text" className="email" placeholder='Your Email' name='your_email' />
                    <textarea name="message" placeholder='Your Message' rows={5} className='msg' ></textarea>
                    <button type="submit" value="Send" className='submitBtn'>Submit</button>
                    <div className="links">
                    <a href="https://www.linkedin.com/in/mateus-trejos-65610b275/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIcon} alt="Linkedin" className="link" />
                        </a>
                        <a href="https://x.com/mateus_trejos" target="_blank" rel="noopener noreferrer">
                            <img src={xIcon} alt="Twitter" className="link" />
                        </a>
                        <a href="https://www.youtube.com/@mateustrejos3499" target="_blank" rel="noopener noreferrer">
                            <img src={youtubeIcon} alt="YouTube" className="link" />
                        </a>
                        <a href="https://www.instagram.com/mateuslt02/" target="_blank" rel="noopener noreferrer">
                            <img src={instagramIcon} alt="Instagram" className="link" />
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;