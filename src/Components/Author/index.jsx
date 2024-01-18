import React from 'react';
import "./index.scss";

const Author = () => {
  return (
    <div className='author-container container' id='author'>
      <div className='box'>
        <div className='bg'></div>
        <div className='title'>
          <h2>Про автора</h2>
          <div className='title-text'>
            <h3>Ольга Патієвич</h3>
            <ul className='title-list'>
              <li className='title-list-item'>
                <div className="title-svg"></div>
                <span>17 років у викладанні англійської студентам різних мовних рівнів та спеціальностей у Львівському університеті, ІТ компаніях та фінансових установах</span>
              </li>
              <li className='title-list-item'>
                <div className="title-svg"></div>
                <span>Досвід тривалого проживання у Лондоні</span>
              </li>
              <li className='title-list-item'>
                <div className="title-svg"></div>
                <span>Безумовна любов до студентів і викладання</span>
              </li>
              <li className='title-list-item'>
                <div className="title-svg"></div>
                <span>Численні авторські розробки англомовних навчальних матеріалів авторка:</span>
              </li>
                <ul className='title-sublist'>
                  <li className='title-sublist-item'>- Курсу «English Tenses: Weekend with Eddie»</li>
                  <li className='title-sublist-item'>- Курсу «General English»</li>
                  <li className='title-sublist-item'>- «A-to-Z of Business and Economics»: mini-dictionary</li>
                  <li className='title-sublist-item'>- «English planner»</li>
                  <li className='title-sublist-item'>- Статей у численних наукових виданнях України та світу</li>
                </ul>
              <li className='title-list-item'>
                <div className="title-svg"></div>
                <span>Багаторічний досвід проведення англомовних квестів, ігор, олімпіад та створення е-курсів</span>
              </li>
              <li className='title-list-item'>
                <div className="title-svg"></div>
                <span>Додаткові бонуси для потіхи власного его та рівня кваліфікації: диплом кандидата педагогічних наук та атестат доцента</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Author;