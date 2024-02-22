import React, { useState } from 'react';
import './index.scss';

const Header = ({ redirectToRegistration }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="header-container">
      <div className="header-box" id='header'>
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
            <button className='btn' onClick={redirectToRegistration}>Записатися</button>
          </div>
        </div>
        <a className='menu-icon-open' onClick={toggleMenu} href="#menu"></a>
      </div>

      <aside className={`menu-box ${isMenuOpen ? 'open' : ''}`} id='menu'>
        <div className='menu__logo-box'>
          <h2 className='menu__logo-icon'>LOGO</h2>
          <a className='menu-icon-close' onClick={toggleMenu}></a>
        </div>
        <nav>
          <ul className='menu__links-list' onClick={closeMenu}>
            <li className='menu__links-item'><a href="#target">Для кого курс?</a></li>
            <li className='menu__links-item'><a href="#about">Про курс</a></li>
            <li className='menu__links-item'><a href="#description">Опис курсу</a></li>
            <li className='menu__links-item'><a href="#result">Що ти отримаєш?</a></li>
            <li className='menu__links-item'><a href="#author">Про автора</a></li>
          </ul>
        </nav>
        <div className='menu__btn-box'>
          <button className='menu__btn' onClick={redirectToRegistration}>Записатися</button>
        </div>
      </aside>
    </div>
  )
}

export default Header;