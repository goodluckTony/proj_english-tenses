import React from 'react';
import "./index.scss";

const Footer = ({ redirectToRegistration }) => {
  const handleEmail = () => {
    window.location.href = 'mailto:infoemaileamil@gmail.com';
  };

  const handleInstagram = () => {
    const instargamProfile = 'loki_disaster';
    window.location.href = `https://www.instagram.com/${instargamProfile}/`;
  };

  const handleFacebook = () => {
    const facebookProfile = '';
    window.location.href = `https://www.facebook.com/${facebookProfile}`;
  };

  return (
    <div className='footer-container'>
      <div className='footer-box'>
        <div className='top-box'>
          <div className='logo-box'>
            <h2>LOGO</h2>
          </div>
          <div className='menu-box'>
            <h2>Меню</h2>
            <ul className='menu-subbox'>
              <li><a href="#target">Для кого курс?</a></li>
              <li><a href="#about">Про курс</a></li>
              <li><a href="#description">Опис курсу</a></li>
              <li><a href="#result">Що ти отримаєш?</a></li>
              <li><a href="#author">Про автора</a></li>
            </ul>
          </div>
          <div className='register-box'>
            <h2 className='register-title'>Зареєструйся на курс</h2>
            <button onClick={redirectToRegistration}>Записатися</button>
            <div className='register-subbox'>
              <p className='email-link-btn' onClick={handleEmail}>infoemaileamil@gmail.com</p>
              <div className='social-box'>
                <div className='insta-icon icon' onClick={handleInstagram}></div>
                <div className='fb-icon icon' onClick={handleFacebook}></div>
              </div>
            </div>
          </div>
        </div>
        <div className='bottom-box'>
          <p>Copyright © 2023 LOGO | All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;