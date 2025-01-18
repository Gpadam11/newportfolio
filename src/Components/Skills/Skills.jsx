import React from 'react';
import './Skills.css';
import '../Homepage/stars.css'

const Skills = () => {
    return (
        <>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <section id="skills">
                <div className="skills-wrapper p-5 pt-6 m-1rem">
                    <div className="skills-list text-white">
                        <h3 className="skills-list-title text-white text-4xl font-montserrat font-bold uppercase mb-2rem">Languages</h3>
                        <ul className="skills-list">
                            <li className="skills-list-item border-2 bg-blue">
                                <img src="https://img.icons8.com/color/240/c-plus-plus-logo.png" alt="C++" className="icon" />
                                C++
                            </li>
                            <li className="skills-list-item border-2 bg-white">
                                <img src="https://img.icons8.com/color/240/java-coffee-cup-logo.png" alt="Java" className="icon" />
                                Java
                            </li>
                            <li className="skills-list-item border-2 bg-green">
                                <img src="https://img.icons8.com/color/240/javascript--v1.png" alt="JavaScript" className="icon" />
                                JavaScript
                            </li>
                            <li className="skills-list-item border-2 bg-white">
                                <img src="https://img.icons8.com/?size=100&id=l75OEUJkPAk4&format=png&color=000000" alt="Python" className="icon" />
                                Python
                            </li>
                            <li className="skills-list-item border-2 bg-red">
                                <img src="https://img.icons8.com/color/240/html-5--v1.png" alt="HTML" className="icon" />
                                HTML
                            </li>
                            <li className="skills-list-item border-2 bg-orange">
                                <img src="https://img.icons8.com/color/240/css3.png" alt="CSS" className="icon" />
                                CSS
                            </li>
                            
                        </ul>
                        <h3 className="skills-list-title text-white text-4xl font-montserrat font-bold uppercase mb-2rem mt-5rem">Libraries & Framewrks</h3>
                        <ul className="skills-list">
                            <li className="skills-list-item border-2 bg-blue">
                                <img src="https://img.icons8.com/?size=512&id=123603&format=png" alt="C++" className="icon" />
                                React
                            </li>
                            <li className="skills-list-item border-2 bg-yellow">
                                <img src="https://img.icons8.com/?size=512&id=54087&format=png" alt="C" className="icon" />
                                NodeJS
                            </li>
                            <li className="skills-list-item border-2 bg-white">
                                <img src="https://img.icons8.com/?size=512&id=84710&format=png" alt="Java" className="icon" />
                                Bootstrap
                            </li>
                            <li className="skills-list-item border-2 bg-green">
                                <img src="https://img.icons8.com/?size=512&id=40253&format=png" alt="JavaScript" className="icon" />
                                jQuery
                            </li>
                            <li className="skills-list-item border-2 bg-red">
                                <img src="https://img.icons8.com/?size=512&id=CIAZz2CYc6Kc&format=png" alt="HTML" className="icon" />
                                TailwindCSS
                            </li>
                            <li className="skills-list-item border-2 bg-white">
                                <img src="https://img.icons8.com/?size=512&id=JChm4IprHBiD&format=png" alt="HTML" className="icon" />
                                ExpressJS
                            </li>
                            <li className="skills-list-item border-2 bg-yellow">
                                <img src="https://img.icons8.com/?size=100&id=5mbMwDZ796xj&format=png&color=000000" alt="HTML" className="icon" />
                                Flask
                            </li>
                            <li className="skills-list-item border-2 bg-blue">
                                <img src="https://img.icons8.com/?size=100&id=apebs8fnmi4m&format=png&color=000000" alt="HTML" className="icon" />
                                OpenCV
                            </li>
                            <li className="skills-list-item border-2 bg-green">
                                <img src="https://img.icons8.com/?size=100&id=n3QRpDA7KZ7P&format=png&color=000000" alt="HTML" className="icon" />
                                TensorFlow
                            </li>
                        </ul>
                        <h3 className="skills-list-title text-white text-4xl font-montserrat font-bold uppercase mb-2rem mt-5rem">Other Skills</h3>
                        <ul className="skills-list">
                            <li className="skills-list-item border-2 bg-blue">
                                <img src="https://img.icons8.com/?size=2x&id=20906&format=png" alt="C++" className="icon" />
                                Git
                            </li>
                            <li className="skills-list-item border-2 bg-yellow">
                                <img src="https://img.icons8.com/?size=2x&id=AZOZNnY73haj&format=png" alt="C" className="icon" />
                                Github
                            </li>
                            <li className="skills-list-item border-2 bg-white">
                                <img src="https://img.icons8.com/?size=512&id=tBBf3P8HL0vR&format=png" alt="Java" className="icon" />
                                MongoDB
                            </li>
                            <li className="skills-list-item border-2 bg-red">
                                <img src="https://img.icons8.com/?size=2x&id=wWh3KNXLFm0y&format=png" alt="HTML" className="icon" />
                                DSA
                            </li>
                            <li className="skills-list-item border-2 bg-blue">
                                <img src="https://img.icons8.com/?size=512&id=13406&format=png" alt="CSS" className="icon" />
                                SQL
                            </li>
                            <li className="skills-list-item border-2 bg-blue">
                                <img src="https://img.icons8.com/?size=100&id=LoPeMbYQidFV&format=png&color=000000" alt="CSS" className="icon" />
                                AI/ML
                            </li>
                        </ul>
                        <h3 className="skills-list-title text-white text-4xl font-montserrat font-bold uppercase mb-2rem mt-5rem">Soft Skills</h3>
                        <ul className="skills-list">
                            <li className="skills-list-item border-2 bg-blue">
                                <img src="https://img.icons8.com/?size=100&id=CnsAhdkyB9wu&format=png&color=000000" alt="C++" className="icon" />
                                Business Development
                            </li>
                            <li className="skills-list-item border-2 bg-yellow">
                                <img src="https://img.icons8.com/?size=100&id=TqYI4WnBYInE&format=png&color=000000" alt="C" className="icon" />
                                Communication
                            </li>
                            <li className="skills-list-item border-2 bg-white">
                                <img src="https://img.icons8.com/?size=100&id=Xvgz6ComUhTH&format=png&color=000000" alt="Java" className="icon" />
                                Lead Generation
                            </li>
                            <li className="skills-list-item border-2 bg-red">
                                <img src="https://img.icons8.com/?size=100&id=n5RaIp9ynUMp&format=png&color=000000" alt="HTML" className="icon" />
                                Content Creation
                            </li>

                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skills;
