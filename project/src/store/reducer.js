import {ActionTypes} from './actions.js';
import offers from '../mock/offers.js';
import reviews from '../mock/reviews.js';
import {Cities, SortingTypes} from '../const.js';


const initialState = {
  activeCity: Cities[0],
  activeSorting: SortingTypes.POPULAR,
  offers: offers,
  reviews: reviews,
  cities: Cities,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload,
      };
    case ActionTypes.CHANGE_SORTING_TYPE:
      return {
        ...state,
        activeSorting: action.payload,
      };
    default:
      return state;
  }
};


export {reducer};
