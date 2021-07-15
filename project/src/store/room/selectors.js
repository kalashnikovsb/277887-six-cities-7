import {NameSpace} from '../root-reducer.js';

const getRoom = (state) => state[NameSpace.ROOM].room;

const getOffersNearby = (state) => state[NameSpace.ROOM].offersNearby;

const getIsRoomDataLoadedStatus = (state) => state[NameSpace.ROOM].isRoomDataLoaded;

const getIsOffersNearbyLoadedStatus = (state) => state[NameSpace.ROOM].isOffersNearbyLoaded;

export {
  getRoom,
  getOffersNearby,
  getIsRoomDataLoadedStatus,
  getIsOffersNearbyLoadedStatus
};
