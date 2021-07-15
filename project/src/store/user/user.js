import {loadUserData, requiredAuthorization, logout} from '../actions.js';
import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../const.js';


const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userData: {},
};


const user = createReducer(initialState, (builder) => {
  builder
    .addCase(loadUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(requiredAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(logout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    });
});


export {user};
