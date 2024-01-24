import React from 'react';
import './index.scss';
// import "../../assets/style/index.scss";

const Header = () => {
  return (
    <div className='header-container container'>
      <div className="header-box">
        <div className='logo-box'>
          <p className='logo-icon'>LOGO</p>
        </div>
        <div className='header__menu-content-box'>
          <nav className='header-nav-menu'>
            <ul className='links-list'>
              <li className='links-item'><a href="#target">Для кого курс?</a></li>
              <li className='links-item'><a href="#about">Про курс</a></li>
              <li className='links-item'><a href="#description">Опис курсу</a></li>
              <li className='links-item'><a href="#result">Що ти отримаєш?</a></li>
              <li className='links-item'><a href="#author">Про автора</a></li>
            </ul>
          </nav>
          <div className='btn-box'>
            <button className='btn'>Записатися</button>
          </div>
          <a className='menu-icon-open' href="#menu"></a>
        </div>
      </div>

      <aside className='menu-box' id='menu'>
        <div className='menu__logo-box'>
          <h2 className='menu__logo-icon'>LOGO</h2>
          <a className='menu-icon-close' href=""></a>
        </div>
        <nav>
          <ul className='menu__links-list'>
            <li className='menu__links-item'><a href="#target">Для кого курс?</a></li>
            <li className='menu__links-item'><a href="#about">Про курс</a></li>
            <li className='menu__links-item'><a href="#description">Опис курсу</a></li>
            <li className='menu__links-item'><a href="#result">Що ти отримаєш?</a></li>
            <li className='menu__links-item'><a href="#author">Про автора</a></li>
          </ul>
        </nav>
        <div className='menu__btn-box'>
          <button className='menu__btn'>Записатися</button>
        </div>
      </aside>
    </div>
  )
}

export default Header;