import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import offers from '../src/mock/offers.js';
import reviews from '../src/mock/reviews.js';


// const Setting = {
//   CARDS_COUNT: 5,
// };


ReactDOM.render(
  <React.StrictMode>
    <App
      offers={offers}
      reviews={reviews}
    />
  </React.StrictMode>,
  document.getElementById('root'));
