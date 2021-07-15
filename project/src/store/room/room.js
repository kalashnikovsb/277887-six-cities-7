import {ActionTypes} from '../actions.js';


const initialState = {
  offersNearby: [],
  isOffersNearbyLoaded: false,
  room: {},
  isRoomDataLoaded: false,
};


const room = (state = initialState, action) => {
  switch (action.type) {
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


export {room};
