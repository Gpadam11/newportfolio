import React from 'react';
import './Certificates.css';
import fullstack from './2105460 full stack.pdf';
import sql from './sql_intermediate certificate.pdf';
import fullstackImg from './2105460 full stack_page-0001.jpg';
import sqlImg from './sql_intermediate certificate_page-0001.jpg';
import "../Homepage/stars.css"

const Certificates = () => {
  return (
    <>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
  
      <section className="cards-wrapper">
        <div className="card-grid-space">
          <div className="num text-gray-dark">01</div>
          <a className="card" href={fullstack}>
            <img src={fullstackImg} alt="Fullstack" />
            <div className="overlay">
              <h3>Full Stack Certificate</h3>
            </div>
          </a>
        </div>
        <div className="card-grid-space">
          <div className="num text-gray-dark">02</div>
          <a className="card" href={sql}>
            <img src={sqlImg} alt="SQL Intermediate" />
            <div className="overlay">
              <h3>SQL Certificate</h3>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}

export default Certificates;
