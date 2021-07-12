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
  room: {},
  offersNearby: [],
  isRoomDataLoaded: false,
  isOffersNearbyLoaded: false,
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
    case ActionTypes.LOAD_ROOM:
      return {
        ...state,
        isRoomDataLoaded: true,
        room: action.payload,
      };
    case ActionTypes.LOAD_OFFERS_NEARBY:
      return {
        ...state,
        isOffersNearbyLoaded: true,
        offersNearby: action.payload,
      };
    case ActionTypes.SET_IS_ROOM_DATA_LOADED:
      return {
        ...state,
        isRoomDataLoaded: action.payload,
      };
    case ActionTypes.SET_IS_OFFERS_NEARBY_LOADED:
      return {
        ...state,
        isOffersNearbyLoaded: action.payload,
      };
    default:
      return state;
  }
};


export {reducer};
