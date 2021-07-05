import {SortingTypes, AuthorizationStatus} from './const.js';


const getOffersByCity = (offers, city) => offers.filter((offer) => offer.city.name === city);


const getFavoriteOffers = (offers) => offers.filter((offer) => offer.isFavorite);


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


const isCheckedAuth = (authorizationStatus) => authorizationStatus === AuthorizationStatus.UNKNOWN;


export {
  getOffersByCity,
  getFavoriteOffers,
  sortOffersLowToHigh,
  sortOffersHighToLow,
  sortOffersByRating,
  getSortedOffers,
  isCheckedAuth
};
