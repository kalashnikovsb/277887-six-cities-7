const ActionType = {
  SWITCH_CITY:  'switchCity',
};


const ActionCreator = {
  switchCity: (city) => ({
    type: ActionType.SWITCH_CITY,
    payload: city,
  }),
};


export {
  ActionType,
  ActionCreator
};
