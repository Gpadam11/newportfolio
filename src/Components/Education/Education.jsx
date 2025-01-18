import react from 'react';
import './education.css';
import "../Homepage/stars.css";

const Education = () => {
    return (
        <>

            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <header id="main">
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
            </header>
            <section id="education">


                <div className="about-title lg:ml-17rem xs:ml-1rem sm:ml-1rem">
                    <div className="hover relative inline-block ">
                        <div className="text-gray  text-center xs:text-5xl sm:text-6xl md:text-8xl lg:text-12xl font-bold hover:text-white hover:scale-150  transition-all duration-300 ease-in-out ">
                            E
                        </div>
                    </div>
                    <div className="hover relative inline-block">
                        <div className="text-transparent text-center xs:text-5xl sm:text-6xl md:text-8xl lg:text-12xl font-bold text-gray hover:text-white hover:scale-150  transition-all duration-300 ease-in-out">
                            D
                        </div>
                    </div>
                    <div className="hover relative inline-block">
                        <div className="text-transparent text-center xs:text-5xl sm:text-6xl md:text-8xl lg:text-12xl font-bold text-gray hover:text-white hover:scale-150  transition-all duration-300 ease-in-out">
                            U
                        </div>
                    </div>
                    <div className="hover relative inline-block">
                        <h1 className="text-transparent text-center xs:text-5xl sm:text-6xl md:text-8xl lg:text-12xl font-bold text-gray-dark hover:text-white hover:scale-150 transition-all duration-300 ease-in-out">
                            C
                        </h1>
                    </div>
                    <div className="hover relative inline-block">
                        <h1 className="text-transparent text-center xs:text-5xl sm:text-6xl md:text-8xl lg:text-12xl font-bold text-gray-dark hover:text-white hover:scale-150 transition-all duration-300 ease-in-out">
                            A
                        </h1>
                    </div>
                    <div className="hover relative inline-block ">
                        <h1 className="text-gray-dark  text-center xs:text-5xl sm:text-6xl md:text-8xl lg:text-12xl font-bold hover:text-white hover:scale-150  transition-all duration-300 ease-in-out">
                            T
                        </h1>
                    </div>
                    <div className="hover relative inline-block ">
                        <h1 className="text-gray-dark  text-center xs:text-5xl sm:text-6xl md:text-8xl lg:text-12xl font-bold hover:text-white hover:scale-150 transition-all duration-300 ease-in-out">
                            I
                        </h1>
                    </div>
                    <div className="hover relative inline-block ">
                        <h1 className="text-gray-dark  text-center xs:text-5xl sm:text-6xl md:text-8xl lg:text-12xl font-bold hover:text-white hover:scale-150  transition-all duration-300 ease-in-out">
                            O
                        </h1>
                    </div>
                    <div className="hover relative inline-block ">
                        <h1 className="text-gray-dark  text-center xs:text-5xl sm:text-6xl md:text-8xl lg:text-10xl font-bold hover:text-white hover:scale-150 transition-all duration-300 ease-in-out">
                            N
                        </h1>
                    </div>
                </div>


                <div class="rightbox">
                    <div class="edu-container">


                        <div class="rb-container md:ml-8rem xs:-ml-8rem">
                            <ul class="rb">
                                <li class="rb-item" ng-repeat="itembx">
                                    <div class="timestamp">
                                        Bachelor of Technology<div> Kalinga Institute of Industral Technology
                                        </div>
                                        <div class="item-title">2021-2025</div>
                                        <div class="item-subtitle text-gray">Computer Science Engineering
                                        </div>
                                    </div>
                                </li>
                                <li class="rb-item" ng-repeat="itembx">
                                    <div class="timestamp">
                                        Senior Secondary School <div> J.H. Tarapore School
                                        </div>
                                        <div class="item-title">2019-2021</div>
                                    </div>
                                </li>

                            </ul>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Education;