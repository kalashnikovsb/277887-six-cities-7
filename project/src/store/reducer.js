import {ActionType} from './actions.js';
import offers from '../mock/offers.js';
import reviews from '../mock/reviews.js';
import {Cities} from '../const.js';
import {getOffersByCity, getFavoriteOffers} from '../utils.js';


const initialState = {
  activeCity: Cities[0],
  offers: offers,
  activeOffers: getOffersByCity(offers, Cities[0]),
  favoriteOffers: getFavoriteOffers(offers),
  reviews: reviews,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload,
        activeOffers: getOffersByCity(offers, action.payload),
      };
    default:
      return state;
  }
};


export {reducer};
