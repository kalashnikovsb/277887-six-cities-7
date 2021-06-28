const ActionTypes = {
  CHANGE_CITY:  'changeCity',
  CHANGE_SORTING_TYPE: 'changeSortingType',
};


const ActionCreator = {
  changeCity: (city) => ({
    type: ActionTypes.CHANGE_CITY,
    payload: city,
  }),
  changeSortingType: (sortingType) => ({
    type: ActionTypes.CHANGE_SORTING_TYPE,
    payload: sortingType,
  }),
};


export {
  ActionTypes,
  ActionCreator
};
