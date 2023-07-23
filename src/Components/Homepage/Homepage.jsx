import React, {useRef} from 'react';
import './stars.css'
import "./Homepage.css"
import './shootingstar.css'
import weather from './images/weather-concept-illustration_114360-1234.jpg';
import bmi from './images/bmi image.png';
import drumkit from './images/drumkit.jpg';
import dice from './images/dice-game.jpg';
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";


const Homepage = () => {
  const nextSectionRef = useRef(null);
  const handleArrowClick = () => {
    nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>

      <div class="night ml-85% mt-15rem">
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
      </div>

      {/* <div class="wrapper w-40rem ml-15rem">

  <div class="scenes">
    <div class="scene-1">
                
                          
      <h2 class="scene-title">Welcome</h2>
    </div>
    <div class="scene-2">
      <h2 class="scene-title">Geetika Padam</h2>
    </div>
  </div>
</div> */}
      <div className='p-4 lg:m-5rem md:m-5rem sm:m-3rem'>
        <div className='heading text-white p-3 uppercase font-bold font-calibre'> Hi there👋🏻, I'm</div>
        <div className='heading-name font-calibre font-bold lg:text-7xl md:text-6xl sm:text-5xl xs:text-5xl text-white p-3'>Geetika Padam</div>
        <div className='subheading-one uppercase text-green font-bold font-calibre p-3'>designer + developer👩🏻‍💻</div>
        <div className='subheading-two font-thin pl-3 text-lightgreen'>I'm a design minded full-stack developer</div>
        <div className='subheading-two font-thin pl-3 text-lightgreen'>transforming ideas into beautiful digital experiences</div>
        <a href="../Contact"><button className='button-contact btn m-2rem text-lightgreen text-2xl sm:text-xl '>Get in touch </button></a>
      </div>
      <button className="arrow right-16" onClick={handleArrowClick}></button>


      <div class="container" ref={nextSectionRef}>
        <p class="container-title text-lightgreen md:text-4xl sm:text-3xl">Here are some Projects</p>

        <div class="gradient-cards">
          <div class="card">
            <div class="container-card bg-blue">
              <img src={weather} alt="Weather" class="image h-15rem w-100%" />
              <p class="card-title ">Weather Forecast</p>
              <p class="card-description">A React-based UI, which integrates real-time data from the Weather API for accurate forecasts.</p>
              <div className="card-actions justify-stretch w-100%">
                <div className="flex justify-between items-center space-x-3 w-100%">
                  <a href={"https://weatherapi-khaki.vercel.app/"} target="_blank" rel="noreferrer">
                    <AiOutlineArrowRight className="text-xl text-lightgreen absolute right-16" />

                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="container-card bg-yellow">
              <img src={bmi} alt="BMI" class="image h-15rem w-100%" />
              <p class="card-title">BMI Calculator</p>
              <p class="card-description">This BMI calculator helps you determine your body mass index (BMI), providing valuable insights into your health and fitness journey.</p>
              <div className="card-actions justify-stretch w-100%">
                <div className="flex justify-between items-center space-x-3 w-100%">
                  <a href={"https://bmi-calculator-gpadam11.vercel.app/"} target="_blank" rel="noreferrer">
                    <AiOutlineArrowRight className="text-xl text-lightgreen absolute right-16" />

                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="container-card bg-white">
              <img src={drumkit} alt="Weather" class="image h-15rem w-100%" />
              <p class="card-title ">Drum Kit</p>
              <p class="card-description">A dynamic drum kit created using JavaScript and DOM manipulation.</p>
              <div className="card-actions justify-stretch w-100%">
                <div className="flex justify-between items-center space-x-3 w-100%">
                  <a href={"https://gpadam11.github.io/drum-kit/"} target="_blank" rel="noreferrer">
                    <AiOutlineArrowRight className="text-xl text-lightgreen absolute right-16" />

                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="container-card bg-green">
              <img src={dice} alt="Weather" class="image h-15rem w-100%" />
              <p class="card-title ">Dice Roll</p>
              <p class="card-description">This is an engaging dice roll game that utilizes JavaScript and DOM manipulation to determine the victorious player.</p>
              <div className="card-actions justify-stretch w-100%">
                <div className="flex justify-between items-center space-x-3 w-100%">
                  <a href={"https://gpadam11.github.io/Dice-game/"} target="_blank" rel="noreferrer">
                    <AiOutlineArrowRight className="text-xl text-lightgreen absolute right-16" />

                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Homepage;