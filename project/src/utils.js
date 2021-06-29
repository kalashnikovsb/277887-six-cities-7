const getOffersByCity = (offers, city) => offers.filter((offer) => offer.city.name === city);


const getFavoriteOffers = (offers) => offers.filter((offer) => offer.isFavorite);


const sortOffersLowToHigh = (offerA, offerB) => offerA.price - offerB.price;


const sortOffersHighToLow = (offerA, offerB) => offerB.price - offerA.price;


const sortOffersByRating = (offerA, offerB) => offerB.rating - offerA.rating;


export {
  getOffersByCity,
  getFavoriteOffers,
  sortOffersLowToHigh,
  sortOffersHighToLow,
  sortOffersByRating
};
