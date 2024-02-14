import React from 'react';
import './index.scss';
import titleImg from '../../assets/img/course/course-bg.svg';

const Course = () => {
  return (
    <div className='course-container container'>
      <div className='title-container'>
        <div className='title-top'>
          <div className='heading-box'>
            <h1>Курс «English Tenses:<br /><span >Weekend with Eddie</span>»</h1>
            <p className='paragraph'>Найулюбленіший та найпопулярніший серед студентів курс, що відкриває двері у світ складної граматики у простий спосіб. Більше жодних заморочок, зубріння нудних правил і купи списаних паперів! Відкрийте для себе цікаву подорож в часі за допомогою логіки і асоціацій. 
            <br /><br />
            Знайомтесь з новими друзями – Хельгою та равликом Едді, з якими ви не лише навчитесь секретиків, які так ретельно приховують часи англійської, а ще й неодмінно порозважаєтесь!</p>
          </div>
          <div className='buttons'>
            <button>Зареєструватися</button>
            <button>Про курс</button>
          </div>
        </div>
        <div className='title-bottom'>
          <span>+ 800</span>
          <p>Задоволених <br />студентів</p>
        </div>
      </div>
      <div className='bg-box'></div>
      {/* <img className='bg-container' src={titleImg} alt='course-img'/> */}
    </div>
  )
}

export default Course;