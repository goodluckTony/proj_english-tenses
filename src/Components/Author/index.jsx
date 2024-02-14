import React from 'react';
import "./index.scss";
import AuthorImg from "../../assets/img/author/author-bg-2.jpg";

const Author = () => {
  return (
    <div className='author-container container' id='author'>
      <div className='author-box box'>
        {/* <div className='bg'></div> */}
        <img className='author-img' src={AuthorImg} alt="Author-Img" />
        <div className='title'>
          <h2 className='heading2'>Про автора</h2>
          <div className='title-text'>
            <h3>Ольга Патієвич</h3>
            <ul className='title-list'>
              <li className='title-list-item'>
                <div className="title-svg"></div>
                <p className='paragraph'>17 років у викладанні англійської студентам різних мовних рівнів та спеціальностей у Львівському університеті, ІТ компаніях та фінансових установах</p>
              </li>
              <li className='title-list-item'>
                <div className="title-svg"></div>
                <p className='paragraph'>Досвід тривалого проживання у Лондоні</p>
              </li>
              <li className='title-list-item'>
                <div className="title-svg"></div>
                <p className='paragraph'>Безумовна любов до студентів і викладання</p>
              </li>
              <li className='title-list-item'>
                <div className="title-svg"></div>
                <p className='paragraph'>Численні авторські розробки англомовних навчальних матеріалів авторка:</p>
              </li>
                <ul className='title-sublist'>
                  <li className='title-sublist-item'><p className='paragraph'>- Курсу «English Tenses: Weekend with Eddie»</p></li>
                  <li className='title-sublist-item'><p className='paragraph'>- Курсу «General English»</p></li>
                  <li className='title-sublist-item'><p className='paragraph'>- «A-to-Z of Business and Economics»: mini-dictionary</p></li>
                  <li className='title-sublist-item'><p className='paragraph'>- «English planner»</p></li>
                  <li className='title-sublist-item'><p className='paragraph'>- Статей у численних наукових виданнях України та світу</p></li>
                </ul>
              <li className='title-list-item'>
                <div className="title-svg"></div>
                <p className='paragraph'>Багаторічний досвід проведення англомовних квестів, ігор, олімпіад та створення е-курсів</p>
              </li>
              <li className='title-list-item'>
                <div className="title-svg"></div>
                <p className='paragraph'>Додаткові бонуси для потіхи власного его та рівня кваліфікації: диплом кандидата педагогічних наук та атестат доцента</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Author;