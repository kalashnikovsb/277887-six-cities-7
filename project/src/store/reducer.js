import {ActionTypes} from './actions.js';
import {Cities, SortingTypes, AuthorizationStatus} from '../const.js';


const initialState = {
  activeCity: Cities[0],
  activeSorting: SortingTypes.POPULAR,
  offers: [],
  reviews: [],
  userData: {},
  cities: Cities,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
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
        isDataLoaded: true,
        offers: action.payload,
      };
    case ActionTypes.LOAD_REVIEWS:
      return {
        ...state,
        isDataLoaded: true,
        reviews: action.payload,
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
    case ActionTypes.LOAD_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};


export {reducer};
