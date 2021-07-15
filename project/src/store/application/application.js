import {loadOffers, loadReviews, changeCity, changeSorting} from '../actions.js';
import {Cities, SortingTypes} from '../../const.js';
import {createReducer} from '@reduxjs/toolkit';


const initialState = {
  isDataLoaded: false,
  offers: [],
  reviews: [],
  activeCity: Cities[0],
  activeSorting: SortingTypes.POPULAR,
  cities: Cities,
};


const application = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.isDataLoaded = true;
      state.offers = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.isDataLoaded = true;
      state.reviews = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(changeSorting, (state, action) => {
      state.activeSorting = action.payload;
    });
});


export {application};
