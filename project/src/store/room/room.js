import {loadRoom, loadOffersNearby, setIsRoomDataLoaded, setIsOffersNearbyLoaded} from '../actions.js';
import {createReducer} from '@reduxjs/toolkit';


const initialState = {
  offersNearby: [],
  isOffersNearbyLoaded: false,
  room: {},
  isRoomDataLoaded: false,
};


const room = createReducer(initialState, (builder) => {
  builder
    .addCase(loadRoom, (state, action) => {
      state.isRoomDataLoaded = true;
      state.room = action.payload;
    })
    .addCase(loadOffersNearby, (state, action) => {
      state.isOffersNearbyLoaded = true;
      state.offersNearby = action.payload;
    })
    .addCase(setIsRoomDataLoaded, (state, action) => {
      state.isRoomDataLoaded = action.payload;
    })
    .addCase(setIsOffersNearbyLoaded, (state, action) => {
      state.isOffersNearbyLoaded = action.payload;
    });
});


export {room};
