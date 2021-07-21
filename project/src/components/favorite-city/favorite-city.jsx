import React from 'react';
import OffersList from '../offers-list/offers-list.jsx';
import {CardsTypes} from '../../const.js';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import offerProp from '../../prop-types/offer-prop.js';


function FavoriteCity(props) {
  const {city, offers} = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="/">
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <OffersList
        cardsType={CardsTypes.FAVORITES}
        offers={offers}
        city={city}
      />
    </li>
  );
}


FavoriteCity.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offerProp).isRequired,
};


export default FavoriteCity;
