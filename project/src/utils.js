const getOffersByCity = (offers, city) => offers.filter((offer) => offer.city.name === city);

const getFavoriteOffers = (offers) => offers.filter((offer) => offer.isFavorite);

export {
  getOffersByCity,
  getFavoriteOffers
};
