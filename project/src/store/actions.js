const ActionTypes = {
  CHANGE_CITY:  'changeCity',
  CHANGE_SORTING: 'changeSortingType',
  LOAD_OFFERS: 'loadOffers',
  LOAD_REVIEWS: 'loadReviews',
  REQUIRED_AUTHORIZATION: 'requiredAuthorization',
  LOGOUT: 'logout',
  REDIRECT_TO_ROUTE: 'redirectToRoute',
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
};


export {
  ActionTypes,
  ActionCreator
};
