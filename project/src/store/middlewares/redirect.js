import browserHistory from '../../browser-history.js';
import {ActionTypes} from '../actions.js';

export const redirect = (_store) => (next) => (action) => {
  if (action.type === ActionTypes.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }

  return next(action);
};
