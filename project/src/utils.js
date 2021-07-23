import {SortingTypes, AuthorizationStatus} from './const.js';


const getFavoriteCities = (offers) => Array.from(new Set(offers.map((offer) => offer.city.name)));


const sortOffersLowToHigh = (offerA, offerB) => offerA.price - offerB.price;


const sortOffersHighToLow = (offerA, offerB) => offerB.price - offerA.price;


const sortOffersByRating = (offerA, offerB) => offerB.rating - offerA.rating;


const sortReviewsByTime = (reviewA, reviewB) => new Date(reviewB.date) - new Date(reviewA.date);


const getSortedOffers = (offers, activeSorting) => {
  switch (activeSorting) {
    case SortingTypes.LOW_TO_HIGH:
      return offers.sort(sortOffersLowToHigh);
    case SortingTypes.HIGH_TO_LOW:
      return offers.sort(sortOffersHighToLow);
    case SortingTypes.TOP_RATED:
      return offers.sort(sortOffersByRating);
    default:
      return offers;
  }
};


const getCorrectRatingWitdh = (rating) => Math.round(rating) * 20;


const isCheckedAuth = (authorizationStatus) => authorizationStatus  === AuthorizationStatus.UNKNOWN;


const getCorrectLabel = (activeSorting) => {
  switch (activeSorting) {
    case SortingTypes.POPULAR:
      return 'Popular';
    case SortingTypes.TOP_RATED:
      return 'Top rated first';
    case SortingTypes.LOW_TO_HIGH:
      return 'Price: low to high';
    case SortingTypes.HIGH_TO_LOW:
      return 'Price: high to low';
    default:
      break;
  }
};


const getOffersByCity = (offers, city) => offers.filter((offer) => offer.city.name === city);


const getCitiesToOffers = (offers, cities) => {
  const result = [];
  cities.forEach((city) => {
    const currentOffers = getOffersByCity(offers, city);
    if (currentOffers.length !== 0) {
      result.push([city, currentOffers]);
    }
  });
  return result;
};


const findAndDeleteOffer = (offersList, offer) => {
  const offersCopy = offersList.slice();
  const index = offersCopy.findIndex((item) => item.id === offer.id);
  offersCopy.splice(index, 1);
  return offersCopy;
};


const findAndReplaceOffer = (offersList, offer) => offersList.map((item) => {
  if (item.id === offer.id) {
    return offer;
  }
  return item;
});


const getCorrectHousingType = (type) => type.slice(0, 1).toUpperCase() + type.slice(1);


const setApiTokenHeader = (api, token) => {
  api.defaults.headers.common['X-Token'] = token;
};


export {
  getOffersByCity,
  sortOffersLowToHigh,
  sortOffersHighToLow,
  sortOffersByRating,
  getSortedOffers,
  isCheckedAuth,
  getFavoriteCities,
  getCorrectRatingWitdh,
  getCorrectLabel,
  getCitiesToOffers,
  sortReviewsByTime,
  findAndDeleteOffer,
  findAndReplaceOffer,
  getCorrectHousingType,
  setApiTokenHeader
};
