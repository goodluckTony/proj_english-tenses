import React from "react";
import "./index.scss";
// import imagesData from "./images.json";
import d5 from "../../assets/img/diplomas/d-5.png";
import d2 from "../../assets/img/diplomas/d-2.png";
import d3 from "../../assets/img/diplomas/d-3.png";
import d4 from "../../assets/img/diplomas/d-4.png";

const Diplomas = () => {
  return (
    <div className="diplomas-container container">
      <div className="box">
        <h2>Дипломи</h2>
        <div className="box-img">
          <img src={d5} alt="d5" />
          <img src={d2} alt="d2" />
          <img src={d3} alt="d3" />
          <img src={d4} alt="d4" />

          {/* {imagesData.map((image) => (
            <img key={image.id} src={image.src} alt={image.alt} />
          ))} */}

          {/* <div className='img'></div>
          <div className='img'></div>
          <div className='img'></div>
          <div className='img'></div> */}

          {/* <img  src="../../assets/img/diplomas/d-2.png" alt='asd'/>
          <img  src="../../assets/img/diplomas/d-3.png" />
          <img  src="../../assets/img/diplomas/d-4.png" /> */}
        </div>
      </div>
    </div>
  );
};

export default Diplomas;
