import {NameSpace} from '../root-reducer.js';
import {AuthorizationStatus} from '../../const.js';

const getIsAuthenticatedStatus = (state) => state[NameSpace.USER].authorizationStatus === AuthorizationStatus.AUTH;

const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;

const getEmail = (state) => state[NameSpace.USER].userData.email;

export {
  getIsAuthenticatedStatus,
  getAuthorizationStatus,
  getEmail
};

