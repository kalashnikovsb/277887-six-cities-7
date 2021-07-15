import {ActionTypes} from '../actions.js';
import {AuthorizationStatus} from '../../const.js';


const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userData: {},
};


const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    case ActionTypes.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionTypes.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
};


export {user};
