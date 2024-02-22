import React, { useState } from "react";
import "./index.scss";
// import { imageList } from "./imageList.jsx";
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

  // const extendedList = imageList;
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

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 1) % imageList.length);
  // };

  // const nextSlide = () => {
  //   setCurrentIndex((nextIndex) => (nextIndex + 1) % imageList.length);
  // };

  // const numberOfItemsToDisplay = 4;
  // const numberOfItemsToTake = Math.min(
  //   numberOfItemsToDisplay,
  //   imageList.length - currentIndex
  // );
  // console.log(imageList);
  // const items = imageList
  //   .slice(currentIndex, currentIndex + numberOfItemsToTake)
  //   .concat(imageList.slice(0, numberOfItemsToDisplay - numberOfItemsToTake));
  // console.log(items);

  // const renderImages = () => {
  //   return imageList.map((image, index) => (
  //     <img key={index} src={image.src} alt={image.alt} onClick={() => openPopup(index)} />
  //   ));
  // };

  return (
    <div className="diplomas-container container">
      <div className="diplomas-box box">
        <h2 className="heading2">Дипломи</h2>
        {/* <div className="carousel">
          <div className="slides">
            {items.map((image, index) => (
              <img key={index} src={image.src} alt={image.alt} />
            ))}
          </div>
          <div className="pagination-box">
            <button className="prev-btn" onClick={prevSlide}>
              &#10094;
            </button>
            <div className="pagination">
              {currentIndex + 1} / {imageList.length}
            </div>
            <button className="next-btn" onClick={nextSlide}>
              &#10095;
            </button>
          </div>
        </div> */}
        
        <div className="slider-container">
          <Slider {...settings}>
            {imageList.map((img, idx) => (
              <div className="img-box" key={idx}>
                <img key={idx} src={img.src} alt={img.alt} onClick={() => openPopup(idx)} />
              </div>
            ))}
          </Slider>
        </div>

        {/* <div className="slider">
          {renderImages()}
        </div> */}
        {isPopupOpen && (
          <div className="popup" onClick={closePopup}>
            {/* <span className="close-btn" onClick={closePopup}></span> */}
            <img className="popup-img" src={imageList[currentIndex].src} alt={imageList[currentIndex].alt}/>
            {/* <button onClick={prevSlide}>&#10094;</button>
            <div className="pagination">
              {currentIndex + 1} / {imageList.length}
            </div>
            <button onClick={nextSlide}>&#10095;</button> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Diplomas;

// <div className="diplomas-container container">
//   <div className="diplomas-box box">
//     <h2 className='heading2'>Дипломи</h2>
//     <div className="box-img">
//       <img src={d5} alt="d5" />
//       <img src={d2} alt="d2" />
//       <img src={d3} alt="d3" />
//       <img src={d4} alt="d4" />
//     </div>
//   </div>
// </div>
