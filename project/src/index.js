import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';


const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


const getCardsIdentifiers = (count) => {
  const result = [];
  for (let i = 0; i < count; i++) {
    const element = {};
    element.id = getRandomInteger(0, 1000000);
    result.push(element);
  }
  return result;
};


const Setting = {
  CARDS_COUNT: 5,
};


const cardsIdentifiers = getCardsIdentifiers(Setting.CARDS_COUNT);


ReactDOM.render(
  <React.StrictMode>
    <App
      cardsIdentifiers={cardsIdentifiers}
    />
  </React.StrictMode>,
  document.getElementById('root'));
