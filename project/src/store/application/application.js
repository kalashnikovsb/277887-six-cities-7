import {loadOffers, loadReviews, changeCity, changeSorting, loadFavorites, setReviewSendingError, setReviewFormDisabled, setFavoriteLoadedStatus} from '../actions.js';
import {Cities, SortingTypes} from '../../const.js';
import {createReducer} from '@reduxjs/toolkit';


const initialState = {
  isDataLoaded: false,
  offers: [],
  reviews: [],
  activeCity: Cities[0],
  activeSorting: SortingTypes.POPULAR,
  cities: Cities,
  favorites: [],
  isFavoritesLoaded: false,
  reviewSendingError: false,
  isReviewFormDisabled: false,
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
    })
    .addCase(loadFavorites, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(setReviewSendingError, (state, action) => {
      state.reviewSendingError = action.payload;
    })
    .addCase(setReviewFormDisabled, (state, action) => {
      state.isReviewFormDisabled = action.payload;
    })
    .addCase(setFavoriteLoadedStatus, (state, action) => {
      state.isFavoritesLoaded = action.payload;
    });
});


export {application};
