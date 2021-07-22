import {NameSpace} from '../root-reducer.js';
import {getOffersByCity, getFavoriteCities, getSortedOffers, sortReviewsByTime} from '../../utils.js';
import {maxReviewsCount} from '../../const.js';
import {createSelector} from 'reselect';

const getOffers = (state) => state[NameSpace.APPLICATION].offers;

const getReviewsCount = (state) => {
  const reviewsCount = state[NameSpace.APPLICATION].reviews.length;
  return (reviewsCount > maxReviewsCount) ?  maxReviewsCount : reviewsCount;
};

const getDataLoadedStatus = (state) => state[NameSpace.APPLICATION].isDataLoaded;

const getFavoritesEmptyStatus = (state) => !(state[NameSpace.APPLICATION].favorites.length);

const getActiveCity = (state) => state[NameSpace.APPLICATION].activeCity;

const getCities = (state) => state[NameSpace.APPLICATION].cities;

const getActiveSorting = (state) => state[NameSpace.APPLICATION].activeSorting;

const getFavorites = (state) => state[NameSpace.APPLICATION].favorites;

const getReviewSendingError = (state) => state[NameSpace.APPLICATION].reviewSendingError;

const getReviewFormDisabled = (state) => state[NameSpace.APPLICATION].isReviewFormDisabled;

const getIsFavoritesLoadedStatus = (state) => state[NameSpace.APPLICATION].isFavoritesLoaded;

const getAllReviews = (state) => state[NameSpace.APPLICATION].reviews;

// Применяю reselect ниже:

const getReviews = createSelector(
  getAllReviews,
  (allReviews) => allReviews.slice().sort(sortReviewsByTime).slice(0, 10),
);

const getFavoriteCitiesList = createSelector(
  getOffers,
  (offers) => getFavoriteCities(offers),
);

const getActiveOffers = createSelector(
  [getOffers, getActiveCity],
  (offers, city) => getOffersByCity(offers, city),
);

const getIsActiveCityEmptyStatus = createSelector(
  [getOffers, getActiveCity],
  (offers, city) => !getOffersByCity(offers, city).length,
);


const getSorted = createSelector(
  [getActiveSorting, getOffers, getActiveCity],
  (sorting, offers, city) => getSortedOffers(getOffersByCity(offers, city), sorting),
);

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
  getReviewFormDisabled
};
