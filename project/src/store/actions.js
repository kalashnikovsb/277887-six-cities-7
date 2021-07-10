const ActionTypes = {
  CHANGE_CITY:  'changeCity',
  CHANGE_SORTING: 'changeSortingType',
  LOAD_OFFERS: 'loadOffers',
  LOAD_REVIEWS: 'loadReviews',
  REQUIRED_AUTHORIZATION: 'requiredAuthorization',
  LOGOUT: 'logout',
  REDIRECT_TO_ROUTE: 'redirectToRoute',
  LOAD_USER_DATA: 'loadUserData',
  LOAD_ROOM: 'loadRoom',
  LOAD_OFFERS_NEARBY: 'loadOffersNearby',
  SET_IS_ROOM_DATA_LOADED: 'setIsRoomDataLoaded',
  SET_IS_OFFERS_NEARBY_LOADED: 'setIsOffersNearbyLoaded',
};


const ActionCreator = {
  changeCity: (city) => ({
    type: ActionTypes.CHANGE_CITY,
    payload: city,
  }),
  changeSorting: (sortingType) => ({
    type: ActionTypes.CHANGE_SORTING,
    payload: sortingType,
  }),
  loadOffers: (offers) => ({
    type: ActionTypes.LOAD_OFFERS,
    payload: offers,
  }),
  loadReviews: (reviews) => ({
    type: ActionTypes.LOAD_REVIEWS,
    payload: reviews,
  }),
  requiredAuthorization: (status) => ({
    type: ActionTypes.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionTypes.LOGOUT,
  }),
  redirectToRoute: (url) => ({
    type: ActionTypes.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  loadUserData: (userData) => ({
    type: ActionTypes.LOAD_USER_DATA,
    payload: userData,
  }),
  loadRoom: (room) => ({
    type: ActionTypes.LOAD_ROOM,
    payload: room,
  }),
  loadOffersNearby: (offersNearby) => ({
    type: ActionTypes.LOAD_OFFERS_NEARBY,
    payload: offersNearby,
  }),
  setIsRoomDataLoaded: (isLoaded) => ({
    type: ActionTypes.SET_IS_ROOM_DATA_LOADED,
    payload: isLoaded,
  }),
  setIsOffersNearbyLoaded: (isLoaded) => ({
    type: ActionTypes.SET_IS_OFFERS_NEARBY_LOADED,
    payload: isLoaded,
  }),
};


export {
  ActionTypes,
  ActionCreator
};
