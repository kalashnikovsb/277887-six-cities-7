import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createAPI} from './services/api';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer.js';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app.jsx';
import {ActionCreator} from './store/actions.js';
import {checkAuth, fetchOferrsList} from './store/api-actions';
import {AuthorizationStatus} from './const';
import {redirect} from './store/middlewares/redirect.js';

const api = createAPI(() => store.dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.NO_AUTH)));

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);

store.dispatch(checkAuth());
store.dispatch(fetchOferrsList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
