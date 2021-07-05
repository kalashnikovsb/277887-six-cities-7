import {ActionTypes} from './actions.js';
import offers from '../mock/offers.js';
import reviews from '../mock/reviews.js';
import {Cities, SortingTypes, AuthorizationStatus} from '../const.js';


const initialState = {
  activeCity: Cities[0],
  activeSorting: SortingTypes.POPULAR,
  offers: offers,
  reviews: reviews,
  cities: Cities,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_CITY:

      return {
        ...state,
        activeCity: action.payload,
      };

    case ActionTypes.CHANGE_SORTING:
      return {
        ...state,
        activeSorting: action.payload,
      };

    case ActionTypes.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
      };

    case ActionTypes.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    case ActionTypes.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };

    default:
      return state;
  }
};


export {reducer};
