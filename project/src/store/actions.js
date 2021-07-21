import {createAction} from '@reduxjs/toolkit';

const ActionTypes = {
  CHANGE_CITY:  'application/changeCity',
  CHANGE_SORTING: 'application/changeSorting',
  LOAD_OFFERS: 'application/loadOffers',
  LOAD_REVIEWS: 'application/loadReviews',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOAD_USER_DATA: 'user/loadUserData',
  LOGOUT: 'user/logout',
  LOAD_ROOM: 'room/loadRoom',
  LOAD_OFFERS_NEARBY: 'room/loadOffersNearby',
  SET_IS_ROOM_DATA_LOADED: 'room/setIsRoomDataLoaded',
  SET_IS_OFFERS_NEARBY_LOADED: 'room/setIsOffersNearbyLoaded',
  LOAD_FAVORITES: 'application/loadFavorites',
  SET_REVIEW_SENDING_ERROR: 'application/setReviewSendingError',
  SET_REVIEW_FORM_DISABLED: 'application/setReviewFormDisabled',
  SET_FAVORITE_LOADED_STATUS: 'application/setFavoriteLoadedStatus',
  REDIRECT_TO_ROUTE: 'redirectToRoute',
};

const changeCity = createAction(ActionTypes.CHANGE_CITY, (city) => ({
  payload: city,
}));

const changeSorting = createAction(ActionTypes.CHANGE_SORTING, (sortingType) => ({
  payload: sortingType,
}));

const loadOffers = createAction(ActionTypes.LOAD_OFFERS, (offers) => ({
  payload: offers,
}));

const loadReviews = createAction(ActionTypes.LOAD_REVIEWS, (reviews) => ({
  payload: reviews,
}));

const requiredAuthorization = createAction(ActionTypes.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

const loadUserData = createAction(ActionTypes.LOAD_USER_DATA, (userData) => ({
  payload: userData,
}));

const logout = createAction(ActionTypes.LOGOUT);

const loadRoom = createAction(ActionTypes.LOAD_ROOM, (room) => ({
  payload: room,
}));

const loadOffersNearby = createAction(ActionTypes.LOAD_OFFERS_NEARBY, (offersNearby) => ({
  payload: offersNearby,
}));

const setIsRoomDataLoaded = createAction(ActionTypes.SET_IS_ROOM_DATA_LOADED, (isLoaded) => ({
  payload: isLoaded,
}));

const setIsOffersNearbyLoaded = createAction(ActionTypes.SET_IS_OFFERS_NEARBY_LOADED, (isLoaded) => ({
  payload: isLoaded,
}));

const redirectToRoute = createAction(ActionTypes.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));

const loadFavorites = createAction(ActionTypes.LOAD_FAVORITES, (offers) => ({
  payload: offers,
}));

const setReviewSendingError = createAction(ActionTypes.SET_REVIEW_SENDING_ERROR, (status) => ({
  payload: status,
}));

const setReviewFormDisabled = createAction(ActionTypes.SET_REVIEW_FORM_DISABLED, (status) => ({
  payload: status,
}));

const setFavoriteLoadedStatus = createAction(ActionTypes.SET_FAVORITE_LOADED_STATUS, (status) => ({
  payload: status,
}));


export {
  ActionTypes,
  changeCity,
  changeSorting,
  loadOffers,
  loadReviews,
  requiredAuthorization,
  logout,
  redirectToRoute,
  loadUserData,
  loadRoom,
  loadOffersNearby,
  setIsRoomDataLoaded,
  setIsOffersNearbyLoaded,
  loadFavorites,
  setReviewSendingError,
  setReviewFormDisabled,
  setFavoriteLoadedStatus
};
