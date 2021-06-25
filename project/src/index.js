import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer.js';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app.jsx';
import offers from '../src/mock/offers.js';
import reviews from '../src/mock/reviews.js';


const store = createStore(reducer, composeWithDevTools());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={offers}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
