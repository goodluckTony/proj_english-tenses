import React from 'react';
import "./index.scss";

const Author = () => {
  return (
    <div className='author-container container'>
      <div className='box'>
        <div className='bg'></div>
        <div className='title'>
          <h2>Про автора</h2>
          <div className='title-text'>
            <h3>Ольга Патієвич</h3>
            <ul className='title-list'>
              <li className='title-list-item'>17 років у викладанні англійської студентам різних мовних рівнів та спеціальностей у Львівському університеті, ІТ компаніях та фінансових установах</li>
              <li className='title-list-item'>Досвід тривалого проживання у Лондоні</li>
              <li className='title-list-item'>Безумовна любов до студентів і викладання</li>
              <li className='title-list-item'>Численні авторські розробки англомовних навчальних матеріалів авторка:</li>
                <ul className='title-sublist'>
                  <li className='title-sublist-item'>- Курсу «English Tenses: Weekend with Eddie»</li>
                  <li className='title-sublist-item'>- Курсу «General English»</li>
                  <li className='title-sublist-item'>- «A-to-Z of Business and Economics»: mini-dictionary</li>
                  <li className='title-sublist-item'>- «English planner»</li>
                  <li className='title-sublist-item'>- Статей у численних наукових виданнях України та світу</li>
                </ul>
              <li className='title-list-item'>Багаторічний досвід проведення англомовних квестів, ігор, олімпіад та створення е-курсів</li>
              <li className='title-list-item'>Додаткові бонуси для потіхи власного его та рівня кваліфікації: диплом кандидата педагогічних наук та атестат доцента</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Author;