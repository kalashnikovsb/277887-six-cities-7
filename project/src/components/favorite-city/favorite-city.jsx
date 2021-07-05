import React from 'react';
import OffersList from '../offers-list/offers-list.jsx';
import {CardsTypes} from '../../const.js';
import PropTypes from 'prop-types';
import offerProp from '../../prop-types/offer-prop.js';


function FavoriteCity(props) {
  const {city, offers} = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <OffersList
        cardsType={CardsTypes.FAVORITES}
        offers={offers}
      />
    </li>
  );
}


FavoriteCity.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offerProp).isRequired,
};


export default FavoriteCity;
