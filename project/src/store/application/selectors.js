import {NameSpace} from '../root-reducer.js';
import {getOffersByCity, getFavoriteCities, getSortedOffers, sortReviewsByTime} from '../../utils.js';

const getOffers = (state) => state[NameSpace.APPLICATION].offers;

const getReviews = (state) => (state[NameSpace.APPLICATION].reviews.slice()).sort(sortReviewsByTime).slice(0, 10);

const getReviewsCount = (state) => state[NameSpace.APPLICATION].reviews.length;

const getDataLoadedStatus = (state) => state[NameSpace.APPLICATION].isDataLoaded;

const getFavoriteCitiesList = (state) => getFavoriteCities(state[NameSpace.APPLICATION].offers);

const getFavoritesEmptyStatus = (state) => !(state[NameSpace.APPLICATION].favorites.length);

const getActiveCity = (state) => state[NameSpace.APPLICATION].activeCity;

const getCities = (state) => state[NameSpace.APPLICATION].cities;

const getActiveSorting = (state) => state[NameSpace.APPLICATION].activeSorting;

const getIsActiveCityEmptyStatus = (state) => !getActiveOffers(state).length;

const getFavorites = (state) => state[NameSpace.APPLICATION].favorites;

const getReviewSendingError = (state) => state[NameSpace.APPLICATION].reviewSendingError;

const getReviewFormDisabled = (state) => state[NameSpace.APPLICATION].isReviewFormDisabled;

const getIsFavoritesLoadedStatus = (state) => state[NameSpace.APPLICATION].isFavoritesLoaded;


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


export {
  getOffers,
  getReviews,
  getDataLoadedStatus,
  getFavoriteCitiesList,
  getFavoritesEmptyStatus,
  getActiveCity,
  getCities,
  getActiveSorting,
  getActiveOffers,
  getSorted,
  getIsActiveCityEmptyStatus,
  getFavorites,
  getIsFavoritesLoadedStatus,
  getReviewsCount,
  getReviewSendingError,
  getReviewFormDisabled};
