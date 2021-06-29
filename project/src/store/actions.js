const ActionTypes = {
  CHANGE_CITY:  'changeCity',
  CHANGE_SORTING: 'changeSortingType',
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
};


export {
  ActionTypes,
  ActionCreator
};
