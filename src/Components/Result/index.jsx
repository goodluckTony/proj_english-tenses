import React from "react";
import "./index.scss";

const Result = ({ redirectToRegistration }) => {
  return (
    <div className="result-container container" id='result'>
      <div className="result-box box">
        <div className="bg"></div>
        <div className="title-box">
          <h2 className='heading2'>Що ви отримаєте після проходження курсу?</h2>
          <ul>
            <li>
              <div className="svg"></div>
              <p className='paragraph'>
                Знатимете чому на Олімпіаді з логіки перше місце отримала б
                англійська граматика
              </p>
            </li>
            <li>
              <div className="svg"></div>
              <p className='paragraph'>Опануєте усі можливі часові конструкції для побудови висловлювань</p>
            </li>
            <li>
              <div className="svg"></div>
              <p className='paragraph'>Упевнено систематизуєте ваші знання про граматику і залежні від
              неї конструкції, що є характерними для різноманітних
              комунікативних ситуацій</p>
            </li>
            <li>
              <div className="svg"></div>
              <p className='paragraph'>Отримаєте естетично-приємний, проте, віртуальний досвід
              спілкування під супроводом неймовірно талановитого викладача</p>
            </li>
            <li>
              <div className="svg"></div>
              <p className='paragraph'>
                Матимете чудовий досвід навчання за допомогою застосування
                сучасних методів, що безумовно сприятиме створенню максимально
                наближених до реальності мовних ситуацій та атмосфери
                присутності у автентично-мовному середовищі
              </p>
            </li>
          </ul>
          <button onClick={redirectToRegistration}>Записатися</button>
        </div>
      </div>
    </div>
  );
};

export default Result;
