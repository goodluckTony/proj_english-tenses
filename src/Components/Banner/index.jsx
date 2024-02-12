import React from 'react';
import "./index.scss"

const Banner = () => {
  return (
    <div className='banner-container container'>
      <div className='banner-box'>
        <h2>Зареєструйся та прокачай усі часи англійської</h2>
        <div className='box-timer'>
          <h3>399 грн. <span>1200 грн.</span></h3>
          <h4>00 : 07 : 12 : 34</h4>
        </div>
      </div>
    </div>
  )
}

export default Banner;