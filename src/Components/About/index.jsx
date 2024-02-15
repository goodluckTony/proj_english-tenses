import React from 'react';
import "./index.scss";
// import aboutPhoto from "../../assets/img/about/about-photo.svg";
import aboutPhoto from "../../assets/img/about/about-photo-2.png";

const About = () => {
  return (
    <div className='about-container container' id='about'>
      <div className='about-box box'>
        <img className='about-photo' src={aboutPhoto} alt="about-course" />
        <div className='about-title'>
          <h2 className='heading2'>Про курс</h2>
          <p className='paragraph'>Курс складається з 4-х відео-уроків, що охоплюють усі 12 часів англійської мови! Кожен відео-урок включає усні схематичні пояснення часових конструкцій у візуально цікавому форматі та кумедних мікро-контекстах! Тривалість міні-курсу – лише один вікенд! Проте він залишиться з вами назавжди</p>
          <button>Записатися</button>
        </div>
      </div>
    </div>
  )
}

export default About;