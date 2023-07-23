import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import '../Homepage/stars.css'
import { AiFillGithub, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';

const Contact = () => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // e.target.elements.name.value = '';
  // e.target.elements.email.value = '';
  // e.target.elements.message.value = '';
  // };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2h4pe0p', 'template_9g3nqzb', form.current, 'UP2OyFgOF4hHWLOCM')
      .then((result) => {
        console.log(result.text);
        alert('Email sent successfully!');
      }, (error) => {
        console.log(error.text);
      });
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  };

  return (
    <>
    <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
    <section id="contact">
      <h1 className="section-header lg:text-7xl md:text-6xl sm:text-5xl xs:text-5xl font-montserrat font-bold uppercase tracking-wider text-center p-2 pb-6 text-white">
        Co<span className="border-green border-b-4">nta</span>ct
      </h1>
      <div className="contact-wrapper p-5 pt-6 m-1rem">
        <form ref={form} id="contact-form" className="form-horizontal" role="form" onSubmit={sendEmail} >
          <div className="mb-1rem">
            <input
              type="text"
              className="form-control w-full px-4 py-3 rounded-md text-gray-dark border-lightgreen border-2"
              id="name"
              placeholder="NAME"
              name="user_name"
              required
            />
          </div>
          <div className="mb-1rem">
            <input
              type="email"
              className="form-control w-full px-4 py-3 rounded-md text-gray-dark border-lightgreen border-2"
              id="email"
              placeholder="EMAIL"
              name="user_email"
              required
            />
          </div>
          <div className="mb-1rem">
            <textarea
              className="form-control w-full px-4 py-3 rounded-md text-gray-dark border-lightgreen border-2"
              rows="5"
              placeholder="MESSAGE"
              name="message"
              required
            ></textarea>
          </div>
          <button
            className="btn px-32 py-3 border-2 hover:border-lightgreen hover:bg-opacity-0 rounded-2xl hover:text-lightgreen bg-lightgreen text-gray-dark "
            id="submit"
            type="submit"
            value="Send"
          >
            SEND
          </button>
        </form>
        <div className="direct-contact-container mt-10">
          <ul className="contact-list">
            <li className="list-item">
              <i className="contact-text name">Geetika Padam</i>
            </li>
            <li className="list-item">
              <i className="contact-text place">Jamshedpur, Jharkhand, India</i>
            </li>
            <li className="list-item">
              <i className="contact-text gmail">
                <a href="mailto:geetikapadam1106@gmail.com" title="Send me an email">
                  geetikapadam1106@gmail.com
                </a>
              </i>
            </li>
          </ul>
          <hr className="my-6 border-gray" />
          <ul className="social-media-list flex justify-center text-2xl p-2">
            <li>
              <a
                href="https://github.com/Gpadam11"
                target="_blank"
                className="contact-icon "
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/geetika-padam-544033226/"
                target="_blank"
                className="contact-icon "
              >
                <GrLinkedinOption />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/geetika_padam"
                target="_blank"
                className="contact-icon "
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/geet_amy/"
                target="_blank"
                className="contact-icon"
              >
                <AiOutlineInstagram />
              </a>
            </li>
          </ul>
          <hr className="my-6 border-gray" />
          <div className="text-center text-gray p-4 text-sm">&copy;Geetika Padam. All rights reserved</div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
