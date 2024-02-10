import React from 'react';
import "./index.scss";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='box'>
        <div className='top-box'>
          {/* <div className='logo-box'>
            <h2>LOGO</h2>
          </div> */}
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
          <div className='resource-box'>
            <h2>Ресурси</h2>
            <ul className='resource-subbox'>
              <li>Help</li>
              <li>Cookie Settings</li>
              <li>IP Policy</li>
              <li>Privacy Policy</li>
              <li>Term of Service</li>
            </ul>
          </div>
          <div className='register-box'>
            <h2 className='register-title'>Зареєструйся на курс</h2>
            <input type="text"
            placeholder='Введіть email' />
            <button>Записатися</button>
            <div className='register-subbox'>
              <p>infoemaileamil@gmail.com</p>
              <div className='social-box'>
                <div className='insta-icon icon'></div>
                <div className='fb-icon icon'></div>
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