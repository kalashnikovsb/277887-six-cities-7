import {combineReducers} from 'redux';
import {application} from './application/application.js';
import {room} from './room/room.js';
import {user} from './user/user.js';


export const NameSpace = {
  APPLICATION: 'APPLICATION',
  ROOM: 'ROOM',
  USER: 'USER',
};


export default combineReducers({
  [NameSpace.APPLICATION]: application,
  [NameSpace.ROOM]: room,
  [NameSpace.USER]: user,
});
