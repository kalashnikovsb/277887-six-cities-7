import {SortingTypes, AuthorizationStatus} from './const.js';


const getOffersByCity = (offers, city) => offers.filter((offer) => offer.city.name === city);

const getFavoriteCities = (offers) => Array.from(new Set(offers.map((offer) => offer.city.name)));


const sortOffersLowToHigh = (offerA, offerB) => offerA.price - offerB.price;


const sortOffersHighToLow = (offerA, offerB) => offerB.price - offerA.price;


const sortOffersByRating = (offerA, offerB) => offerB.rating - offerA.rating;


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
  getCitiesToOffers
};
