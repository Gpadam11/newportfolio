import React from 'react';
import './Certificates.css';

import fullstack from './2105460 full stack.pdf';
import fullstackImg2pdf from './Udemy-Web Development.pdf';
import sql from './sql_intermediate certificate.pdf';
import GenAIpdf1 from './Coursera H8T2GGR3RZMX.pdf';
import GenAIpdf2 from './Coursera NTWSFXQ367QL.pdf';
import GenAIpdf3 from './Coursera WFSO0703CD4K.pdf';
import AWSpdf from './/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge20240319-34-xyknt8.pdf';
import internshippdf from './Internship Completion - Geetika Padam- INT137[1].pdf';
import researchpdf from './Geetika Padam.pdf';
import hackathonpdf from './8a80b8e2-7e57-4534-a6ae-dfb6eef77225.pdf';

import AWS from './AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge20240319-34-xyknt8_page-0001.jpg';
import fullstackImg from './2105460 full stack_page-0001.jpg';
import fullstackIMG2 from './Udemy-Web Development_page-0001.jpg';
import sqlImg from './sql_intermediate certificate_page-0001.jpg';
import GenAI1 from './Coursera H8T2GGR3RZMX_page-0001.jpg';
import GenAI2 from './Coursera NTWSFXQ367QL_page-0001.jpg';
import GenAI3 from './Coursera WFSO0703CD4K_page-0001.jpg';
import internship from './internship completion.jpg';
import research from './Geetika Padam research paper certificate.jpg';
import hackathon from './8a80b8e2-7e57-4534-a6ae-dfb6eef77225_page-0001.jpg';

import "../Homepage/stars.css"

const Certificates = () => {
  return (
    <>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
  
      <section className="certificate-cards-wrapper">
        <div className="certificate-card-grid-space">
          <div className="num text-gray-dark">01</div>
          <a className="certificate-card" href={internshippdf}>
            <img src={internship} alt="Internship" />
            <div className="overlay">
              <h3>Internship</h3>
            </div>
          </a>
        </div>
        <div className="certificate-card-grid-space">
          <div className="num text-gray-dark">02</div>
          <a className="certificate-card" href={researchpdf}>
            <img src={research} alt="Reseach paper" />
            <div className="overlay">
              <h3>Research Publication</h3>
            </div>
          </a>
        </div>
        <div className="certificate-card-grid-space">
          <div className="num text-gray-dark">03</div>
          <a className="certificate-card" href={AWSpdf}>
            <img src={AWS} alt="AWS fundamental" />
            <div className="overlay">
              <h3>AWS Fundamental</h3>
            </div>
          </a>
        </div>
        <div className="certificate-card-grid-space">
          <div className="num text-gray-dark">04</div>
          <a className="certificate-card" href={fullstack}>
            <img src={fullstackImg} alt="Fullstack" />
            <div className="overlay">
              <h3>Full Stack Certificate</h3>
            </div>
          </a>
        </div>
        <div className="certificate-card-grid-space">
          <div className="num text-gray-dark">05</div>
          <a className="certificate-card" href={fullstackImg2pdf}>
            <img src={fullstackIMG2} alt="Fullstack" />
            <div className="overlay">
              <h3>Full Stack Certificate</h3>
            </div>
          </a>
        </div>
        <div className="certificate-card-grid-space">
          <div className="num text-gray-dark">06</div>
          <a className="certificate-card" href={sql}>
            <img src={sqlImg} alt="SQL Intermediate" />
            <div className="overlay">
              <h3>SQL Certificate</h3>
            </div>
          </a>
        </div>
        <div className="certificate-card-grid-space">
          <div className="num text-gray-dark">07</div>
          <a className="certificate-card" href={GenAIpdf1}>
            <img src={GenAI1} alt="GenAI" />
            <div className="overlay">
              <h3>Generative AI</h3>
            </div>
          </a>
        </div>
        <div className="certificate-card-grid-space">
          <div className="num text-gray-dark">08</div>
          <a className="certificate-card" href={GenAIpdf2}>
            <img src={GenAI2} alt="GenAI" />
            <div className="overlay">
              <h3>Generative AI</h3>
            </div>
          </a>
        </div>
        <div className="certificate-card-grid-space">
          <div className="num text-gray-dark">09</div>
          <a className="certificate-card" href={GenAIpdf3}>
            <img src={GenAI3} alt="GenAI" />
            <div className="overlay">
              <h3>Generative AI</h3>
            </div>
          </a>
        </div>
        <div className="certificate-card-grid-space">
          <div className="num text-gray-dark">10</div>
          <a className="certificate-card" href={hackathonpdf}>
            <img src={hackathon} alt="Ideathon" />
            <div className="overlay">
              <h3>Ideathon</h3>
            </div>
          </a>
        </div>
        
      </section>
    </>
  );
}

export default Certificates;
