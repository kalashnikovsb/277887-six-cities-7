const ActionType = {
  CHANGE_CITY:  'changeCity',
};


const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
};


export {
  ActionType,
  ActionCreator
};
