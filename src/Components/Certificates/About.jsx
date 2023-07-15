import React from 'react';
import './About.css';
import myself from './myself.jpeg';
import "../Homepage/stars.css"
import bg from './bg.png';

const About = () => {
    return (
        <>
          <div id='stars2'></div>
      <div id='stars3'></div>
            <div className="about" id="about">

                <div className="about-content flex justify-center items-center">
                    <div className="about-title  mr-5rem ml-5rem sm:justify-normal">
                        <div className="hover relative inline-block ">
                            <h1 className="text-transparent text-center text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold hover:text-white hover:scale-150 hover:-webkit-text-stroke-transparent hover:text-shadow-lg transition-all duration-300 ease-in-out">
                                A
                            </h1>
                        </div>
                        <div className="hover relative inline-block">
                            <h1 className="text-transparent text-center text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold hover:text-white hover:scale-150 hover:-webkit-text-stroke-transparent hover:text-shadow-lg transition-all duration-300 ease-in-out">
                                B
                            </h1>
                        </div>
                        <div className="hover relative inline-block">
                            <h1 className="text-transparent text-center text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold hover:text-white hover:scale-150 hover:-webkit-text-stroke-transparent hover:text-shadow-lg transition-all duration-300 ease-in-out">
                                O
                            </h1>
                        </div>
                        <div className="hover relative inline-block">
                            <h1 className="text-transparent text-center text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold hover:text-white hover:scale-150 hover:-webkit-text-stroke-transparent hover:text-shadow-lg transition-all duration-300 ease-in-out">
                                U
                            </h1>
                        </div>
                        <div className="hover relative inline-block">
                            <h1 className="text-transparent text-center text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold hover:text-white hover:scale-150 hover:-webkit-text-stroke-transparent hover:text-shadow-lg transition-all duration-300 ease-in-out">
                                T
                            </h1>
                        </div>
                    </div>
                    <div className='about-box flex lg:p-8 md:p-3 sm:p-1 justify-items-center right-2 mr-1rem '>
                        <div className='about-image'>
                            <img src={myself} className="about-img cover-full" alt="myself" />
                        </div>

                        <div className="about-description flex justify-center items-center text-lightgreen p-5 lg:text-2xl md:text-xl sm:text-xs font-calibre">
                            I'm a passionate full stack developer with a creative flair for design, video editing, and UI/UX. I am committed to delivering exceptional work, paying close attention to detail, and ensuring the success of my team.

                            With a diverse educational background and strong technical expertise,  I bring a unique perspective to every project. From crafting intuitive user interfaces to developing seamless backend systems, I take pride in delivering high-quality solutions that exceed expectations.
                            Thank you for visiting my portfolio.
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default About;
