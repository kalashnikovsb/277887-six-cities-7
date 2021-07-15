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
  REDIRECT_TO_ROUTE: 'redirectToRoute',
};

const changeCity = (city) => ({
  type: ActionTypes.CHANGE_CITY,
  payload: city,
});

const changeSorting = (sortingType) => ({
  type: ActionTypes.CHANGE_SORTING,
  payload: sortingType,
});

const loadOffers = (offers) => ({
  type: ActionTypes.LOAD_OFFERS,
  payload: offers,
});

const loadReviews = (reviews) => ({
  type: ActionTypes.LOAD_REVIEWS,
  payload: reviews,
});

const requiredAuthorization = (status) => ({
  type: ActionTypes.REQUIRED_AUTHORIZATION,
  payload: status,
});

const loadUserData = (userData) => ({
  type: ActionTypes.LOAD_USER_DATA,
  payload: userData,
});

const logout = () => ({
  type: ActionTypes.LOGOUT,
});

const loadRoom = (room) => ({
  type: ActionTypes.LOAD_ROOM,
  payload: room,
});

const loadOffersNearby = (offersNearby) => ({
  type: ActionTypes.LOAD_OFFERS_NEARBY,
  payload: offersNearby,
});

const setIsRoomDataLoaded = (isLoaded) => ({
  type: ActionTypes.SET_IS_ROOM_DATA_LOADED,
  payload: isLoaded,
});

const setIsOffersNearbyLoaded = (isLoaded) => ({
  type: ActionTypes.SET_IS_OFFERS_NEARBY_LOADED,
  payload: isLoaded,
});

const redirectToRoute = (url) => ({
  type: ActionTypes.REDIRECT_TO_ROUTE,
  payload: url,
});

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
  setIsOffersNearbyLoaded
};
