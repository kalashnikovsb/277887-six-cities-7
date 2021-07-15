import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createAPI} from './services/api';
import {Provider} from 'react-redux';
import rootReducer from './store/root-reducer.js';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app.jsx';
import {requiredAuthorization} from './store/actions.js';
import {checkAuth, fetchOferrsList} from './store/api-actions.js';
import {AuthorizationStatus} from './const.js';
import {redirect} from './store/middlewares/redirect.js';

const api = createAPI(() => store.dispatch(requiredAuthorization(AuthorizationStatus.NO_AUTH)));

const store = createStore(
  rootReducer,
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
