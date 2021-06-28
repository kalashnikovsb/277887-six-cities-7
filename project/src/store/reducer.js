import {ActionType} from './actions.js';
import offers from '../mock/offers.js';
import reviews from '../mock/reviews.js';
import {Cities} from '../const.js';


const initialState = {
  activeCity: Cities[0],
  offers: offers,
  reviews: reviews,
  cities: Cities,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload,
      };
    default:
      return state;
  }
};


export {reducer};
