import {ActionType} from './actions.js';
import offers from '../mock/offers.js';
import reviews from '../mock/reviews.js';


const initialState = {
  activeCity: 'Paris',
  offers: offers,
  reviews: reviews,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SWITCH_CITY:
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
};


export {reducer};
