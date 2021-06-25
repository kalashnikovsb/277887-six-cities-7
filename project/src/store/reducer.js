import {ActionType} from './actions.js';
import offers from '../mock/offers.js';


const initialState = {
  city: 'Paris',
  offers: offers,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SWITCH_CITY:
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
};


export {reducer};
