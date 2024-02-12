import React from "react";
import "./index.scss";

const Result = () => {
  return (
    <div className="result-container container" id='result'>
      <div className="result-box box">
        <div className="bg"></div>
        <div className="title-box">
          <h2>Що ви отримаєте після проходження курсу?</h2>
          <ul>
            <li>
              <div className="svg"></div>
              <span>
                Знатимете чому на Олімпіаді з логіки перше місце отримала б
                англійська граматика
              </span>
            </li>
            <li>
              <div className="svg"></div>
              <span>Опануєте усі можливі часові конструкції для побудови висловлювань</span>
            </li>
            <li>
              <div className="svg"></div>
              <span>Упевнено систематизуєте ваші знання про граматику і залежні від
              неї конструкції, що є характерними для різноманітних
              комунікативних ситуацій</span>
            </li>
            <li>
              <div className="svg"></div>
              <span>Отримаєте естетично-приємний, проте, віртуальний досвід
              спілкування під супроводом неймовірно талановитого викладача</span>
            </li>
            <li>
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="12" fill="black"/>
                <path d="M7 12L11 15.5L18 8" stroke="white"/>
              </svg> */}
              <div className="svg"></div>
              <span>
                Матимете чудовий досвід навчання за допомогою застосування
                сучасних методів, що безумовно сприятиме створенню максимально
                наближених до реальності мовних ситуацій та атмосфери
                присутності у автентично-мовному середовищі
              </span>
            </li>
          </ul>
          <button>Записатися</button>
        </div>
      </div>
    </div>
  );
};

export default Result;
