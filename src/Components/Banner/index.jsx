import React from 'react';
import "./index.scss"
import Timer from "../Timer";

const Banner = () => {
  const start = 9;
  const startTime = new Date().getTime() + start * 60 * 60 * 1000;

  return (
    <div className='banner-container container'>
      <div className='banner-box'>
        <h2>Зареєструйся та прокачай усі часи англійської</h2>
        <div className='box-timer'>
          <h3>375 грн. <span>1200 грн.</span></h3>
          {/* <h4>00 : 07 : 12 : 34</h4> */}
          <Timer startTime={startTime} />
        </div>
      </div>
    </div>
  )
}

export default Banner;