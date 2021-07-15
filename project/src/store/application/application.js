import {ActionTypes} from '../actions.js';
import {Cities, SortingTypes} from '../../const.js';


const initialState = {
  isDataLoaded: false,
  offers: [],
  reviews: [],
  activeCity: Cities[0],
  activeSorting: SortingTypes.POPULAR,
  cities: Cities,
};


const application = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};


export {application};
