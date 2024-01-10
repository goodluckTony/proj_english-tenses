import React from 'react';
import "./index.scss";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='box'>
        <div className='top-box'>
          <div className='logo-box'>
            <h2>LOGO</h2>
          </div>
          <div className='menu-box'>
            <h2>Меню</h2>
            <div className='menu-subbox'>
              <p>Для кого курс?</p>
              <p>Про курс</p>
              <p>Опис курсу</p>
              <p>Що ти отримаєш?</p>
              <p>Про автора</p>
            </div>
          </div>
          <div className='resource-box'>
            <h2>Ресурси</h2>
            <div className='resource-subbox'>
              <p>Help</p>
              <p>Cookie Settings</p>
              <p>IP Policy</p>
              <p>Privacy Policy</p>
              <p>Term of Service</p>
            </div>
          </div>
          <div className='register-box'>
            <h2>Зареєструйся на курс</h2>
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