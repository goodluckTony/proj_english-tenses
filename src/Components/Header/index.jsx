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
          <li className='links-item'>Для кого курс?</li>
          <li className='links-item'>Про курс</li>
          <li className='links-item'>Опис курсу</li>
          <li className='links-item'>Що ти отримаєш?</li>
          <li className='links-item'>Про автора</li>
        </ul>
        <div className='btn-box'>
          <button className='btn'>Записатися</button>
        </div>
      </div>
    </div>
  )
}

export default Header;