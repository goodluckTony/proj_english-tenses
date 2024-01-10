import React from 'react';
import "./index.scss";

const About = () => {
  return (
    <div className='about-container container'>
      <div className='about-box'>
        <div className='about-photo'></div>
        <div className='about-title'>
          <h2>Про курс</h2>
          <p>Курс складається з 4-х відео-уроків, що охоплюють усі 12 часів англійської мови! Кожен відео-урок включає усні схематичні пояснення часових конструкцій у візуально цікавому форматі та кумедних мікро-контекстах! Тривалість міні-курсу – лише один вікенд! Проте він залишиться з вами назавжди</p>
          <button>Записатися</button>
        </div>
      </div>
    </div>
  )
}

export default About;