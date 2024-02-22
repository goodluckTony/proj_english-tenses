import React, { useState } from "react";
import "./index.scss";
import imageList from "./images.json";

import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";

const Diplomas = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = (index) => {
    setCurrentIndex(index);
    setIsPopupOpen(true);
  };

  const closePopup = (event) => {
    console.log(event.target)
    if (!event.target.closest('.popup-img')) {
      setIsPopupOpen(false);
    }
  };

  return (
    <div className="diplomas-container container">
      <div className="diplomas-box box">
        <h2 className="heading2">Дипломи</h2>
        <div className="slider-container">
          <Slider {...settings}>
            {imageList.map((img, idx) => (
              <div className="img-box" key={idx}>
                <img key={idx} src={img.src} alt={img.alt} onClick={() => openPopup(idx)} />
              </div>
            ))}
          </Slider>
        </div>

        {isPopupOpen && (
          <div className="popup" onClick={closePopup}>
            <img className="popup-img" src={imageList[currentIndex].src} alt={imageList[currentIndex].alt}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Diplomas;
