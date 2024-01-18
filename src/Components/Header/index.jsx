import React from 'react';
import './index.scss';
// import "../../assets/style/index.scss";

const Header = () => {
  return (
    <div className='header-container container'>
      <div className="box">
        <div className='logo-box'>
          <p className='logo-icon'>LOGO</p>
        </div>
        <ul className='links-list'>
          <li className='links-item'><a href="#target">Для кого курс?</a></li>
          <li className='links-item'><a href="#about">Про курс</a></li>
          <li className='links-item'><a href="#description">Опис курсу</a></li>
          <li className='links-item'><a href="#result">Що ти отримаєш?</a></li>
          <li className='links-item'><a href="#author">Про автора</a></li>
        </ul>
        <div className='btn-box'>
          <button className='btn'>Записатися</button>
        </div>
      </div>
    </div>
  )
}

export default Header;