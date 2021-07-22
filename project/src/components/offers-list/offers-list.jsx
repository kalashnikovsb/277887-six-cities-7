import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card.jsx';
import offerProp from '../../prop-types/offer-prop.js';
import cardTypesProp from '../../prop-types/card-types-prop.js';
import {CardsTypes} from '../../const.js';
import {getOffersByCity} from '../../utils.js';


function OffersList(props) {
  const {cardsType, offers, handleCardHover, handleCardLeave, city} = props;

  let offersToRender = offers;
  if (cardsType === CardsTypes.FAVORITES) {
    offersToRender = getOffersByCity(offers, city);
  }

  return (
    <div className={cardsType.listClassNames}>
      {offersToRender.map((offer) => (
        <OfferCard
          cardType={cardsType}
          key={offer.id}
          offer={offer}
          handleCardHover={handleCardHover}
          handleCardLeave={handleCardLeave}
        />
      ))}
    </div>
  );
}


OffersList.propTypes = {
  cardsType: PropTypes.shape(cardTypesProp).isRequired,
  offers: PropTypes.arrayOf(offerProp).isRequired,
  handleCardHover: PropTypes.func,
  handleCardLeave: PropTypes.func,
  city: PropTypes.string,
};


export default OffersList;
