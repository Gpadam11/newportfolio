import React from 'react';
import './Skills.css';
import { FaJava } from 'react-icons/fa';
import { SiJavascript, SiCss3, SiHtml5 } from 'react-icons/si';
import { RiCPlusPlusLine, RiCLine } from 'react-icons/ri';

const Skills = () => {
    return (
        <>
            <section id="skills">
                <div className="skills-wrapper p-5 pt-6 m-1rem flex">
                    <div className="skills-list text-white">
                        <h3 className="skills-list-title text-white text-4xl font-montserrat font-bold uppercase mb-2rem">Languages</h3>
                        <ul className="skills-list">
                            <li className="skills-list-item border-2 bg-blue">
                                <img src="https://img.icons8.com/color/240/c-plus-plus-logo.png" alt="C++" className="icon" />
                                C++
                            </li>
                            <li className="skills-list-item border-2 bg-yellow">
                                <img src="https://img.icons8.com/color/240/c-programming.png" alt="C" className="icon" />
                                C
                            </li>
                            <li className="skills-list-item border-2 bg-white flex">
                                <img src="https://img.icons8.com/color/240/java-coffee-cup-logo.png" alt="Java" className="icon" />
                                Java
                            </li>
                            <li className="skills-list-item border-2 bg-green">
                                <img src="https://img.icons8.com/color/240/javascript--v1.png" alt="JavaScript" className="icon" />
                                JavaScript
                            </li>
                            <li className="skills-list-item border-2 bg-lightgreen">
                                <img src="https://img.icons8.com/color/240/html-5--v1.png" alt="HTML" className="icon" />
                                HTML
                            </li>
                            <li className="skills-list-item border-2 bg-orange">
                                <img src="https://img.icons8.com/color/240/css3.png" alt="CSS" className="icon" />
                                CSS
                            </li>
                            <li className="skills-list-item border-2 bg-orange">
                                <img src="https://img.icons8.com/?size=512&id=13406&format=png" alt="CSS" className="icon" />
                                SQL
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
                            <li className="skills-list-item border-2 bg-white flex">
                                <img src="https://img.icons8.com/?size=512&id=84710&format=png" alt="Java" className="icon" />
                                Bootstrap
                            </li>
                            <li className="skills-list-item border-2 bg-green">
                                <img src="https://img.icons8.com/?size=512&id=40253&format=png" alt="JavaScript" className="icon" />
                                jQuery
                            </li>
                            <li className="skills-list-item border-2 bg-lightgreen">
                                <img src="https://img.icons8.com/?size=512&id=CIAZz2CYc6Kc&format=png" alt="HTML" className="icon" />
                                TailwindCSS
                            </li>
                            <li className="skills-list-item border-2 bg-lightgreen">
                                <img src="https://img.icons8.com/?size=512&id=JChm4IprHBiD&format=png" alt="HTML" className="icon" />
                                ExpressJS
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
                            <li className="skills-list-item border-2 bg-white flex">
                                <img src="https://img.icons8.com/?size=512&id=tBBf3P8HL0vR&format=png" alt="Java" className="icon" />
                                MongoDB
                            </li>
                            <li className="skills-list-item border-2 bg-lightgreen">
                                <img src="https://img.icons8.com/?size=2x&id=wWh3KNXLFm0y&format=png" alt="HTML" className="icon" />
                                DSA
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skills;
