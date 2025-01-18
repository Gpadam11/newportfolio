import React, { useState } from 'react';
import './about.css';
// import '../Homepage/stars.css';
import mypic from './WhatsApp Image 2025-01-18 at 19.01.17_eb6a4e69.jpg';

const About = () => {
  const [expanded, setExpanded] = useState(false);

  const readMore = (event) => {
    event.preventDefault();
    const expandInfo = document.getElementById('more-info-js');
    const readMoreBtn = document.querySelector('.link');
    readMoreBtn.style.display = 'none';


    expandInfo.style.height = '350px';
    setExpanded(true);

  };


  return (
    <>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div className="container text-gray-light">
        <div className="container-inner">
          <div className="main-content">
            <div className="main-headings" id="main-headings-js">
              <p id="by-line">Welcome to my digital realm of skillful creations.</p>

              <div className="heading">
                <h3 id="heading1">Geetika</h3>
                <h3 id="heading2">Padam</h3>
                <h1 id="heading3">ABOUT</h1>
              </div>

              <div className="short-bio mb-1rem">
                <p>
                  I'm a passionate full stack developer with a creative flair for design, video editing, and UI/UX. I am committed to delivering exceptional work, paying close attention to detail, and ensuring the success of my team.


                </p>
              </div>

              <a href="#" className="link text-lightgreen" onClick={readMore}>
                <span className='border-b-white border-b pb-2'>Rea</span>d more
              </a>
            </div>

            <div
              className={`more-info ${expanded ? 'expanded' : ''}`}
              id="more-info-js"
            >
              <h4 className='xs:text-sm mt-2rem'>Welcome to my flavorful world!</h4>
              <p className='xs:text-sm'>
                I sprinkle magic across digital platforms, crafting captivating campaigns and optimizing websites for maximum impact. With a dash of HTML, CSS, and JavaScript, I create web applications that are as visually stunning as they are functional.
              </p>

              <p className='xs:text-sm'>
                But my secret ingredient lies in the power of words. As a content connoisseur, I serve up delectable blog posts and mouthwatering website copy that leaves a lasting impression.
              </p>

              <p className='xs:text-sm'>
                So, pull up a seat and get ready for a taste of my skills. Together, we'll create a digital feast that satisfies cravings and leaves a lasting impression. Welcome to my flavorful world!
              </p>
            </div>
          </div>

          <div className="image-wrapper">
            <div className="image-container">
              <img src={mypic} alt="mypic" className="myImage" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
