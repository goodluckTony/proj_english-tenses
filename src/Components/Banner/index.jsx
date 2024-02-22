import React from 'react';
import "./index.scss"
import Timer from "../Timer";

const Banner = () => {

  return (
    <div className='banner-container'>
      <div className='banner-box'>
        <h2>Зареєструйся та прокачай усі часи англійської</h2>
        <h3>375 грн. <span>1200 грн.</span></h3>
        <Timer />
      </div>
    </div>
  )
}

export default Banner;