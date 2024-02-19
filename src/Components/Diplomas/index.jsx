import React, { useState } from "react";
import "./index.scss";
// import { imageList } from "./imageList.jsx";
import imageList from "./images.json";

const Diplomas = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = (index) => {
    setCurrentIndex(index);
    setIsPopupOpen(true);
  };
  
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imageList.length) % imageList.length);
  };

  const renderImages = () => {
    return imageList.map((image, index) => (
      <img key={index} src={image.src} alt={image.alt} onClick={() => openPopup(index)} />
    ));
  };

  return (
    <div className="diplomas-container container">
      <div className="diplomas-box box">
        <h2 className='heading2'>Дипломи</h2>
        <div className="slider">
          {renderImages()}
        </div>
        {isPopupOpen && (
          <div className="popup">
            <span className="close-btn" onClick={closePopup}>X</span>
            <img src={imageList[currentIndex].src} alt={imageList[currentIndex].title} />
            <button onClick={prevSlide}>Previous</button>
            <div className="pagination">
              {currentIndex + 1} / {imageList.length}
            </div>
            <button onClick={nextSlide}>Next</button>
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