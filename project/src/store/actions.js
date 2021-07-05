const ActionTypes = {
  CHANGE_CITY:  'changeCity',
  CHANGE_SORTING: 'changeSortingType',
  LOAD_OFFERS: 'loadOffers',
  REQUIRED_AUTHORIZATION: 'requiredAuthorization',
  LOGOUT: 'logout',
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
  requiredAuthorization: (status) => ({
    type: ActionTypes.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionTypes.LOGOUT,
  }),
};


export {
  ActionTypes,
  ActionCreator
};
