import {NameSpace} from '../root-reducer.js';
import {getFavoriteOffers, getOffersByCity, getFavoriteCities, getSortedOffers} from '../../utils.js';

const getOffers = (state) => state[NameSpace.APPLICATION].offers;

const getReviews = (state) => state[NameSpace.APPLICATION].reviews;

const getDataLoadedStatus = (state) => state[NameSpace.APPLICATION].isDataLoaded;

const getFavorites = (state) => getFavoriteOffers(state[NameSpace.APPLICATION].offers);

const getFavoriteCitiesList = (state) => getFavoriteCities(state[NameSpace.APPLICATION].offers);

const getFavoritesEmptyStatus = (state) => !(state[NameSpace.APPLICATION].offers.length);

const getActiveCity = (state) => state[NameSpace.APPLICATION].activeCity;

const getCities = (state) => state[NameSpace.APPLICATION].cities;

const getActiveSorting = (state) => state[NameSpace.APPLICATION].activeSorting;

const getIsActiveCityEmptyStatus = (state) => !getActiveOffers(state).length;


const getActiveOffers = (state) => {
  const offers = getOffers(state);
  const activeCity = getActiveCity(state);
  return getOffersByCity(offers, activeCity);
};


const getSorted = (state) => {
  const activeSorting = getActiveSorting(state);
  const activeOffers = getActiveOffers(state);
  return getSortedOffers(activeOffers, activeSorting);
};


const getCitiesToOffers = (state) => {
  const offers = getOffers(state);
  const favoriteCities = getFavoriteCitiesList(state);
  const result = [];

  favoriteCities.forEach((city) => {
    const currentOffers = getOffersByCity(offers, city);
    if (currentOffers.length !== 0) {
      result.push([city, currentOffers]);
    }
  });

  return result;
};


export {
  getOffers,
  getReviews,
  getDataLoadedStatus,
  getFavorites,
  getFavoriteCitiesList,
  getFavoritesEmptyStatus,
  getActiveCity,
  getCities,
  getActiveSorting,
  getIsActiveCityEmptyStatus,
  getActiveOffers,
  getSorted,
  getCitiesToOffers
};
