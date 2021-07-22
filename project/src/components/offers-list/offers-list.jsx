import React, {useState} from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card.jsx';
import offerProp from '../../prop-types/offer-prop.js';
import cardTypesProp from '../../prop-types/card-types-prop.js';
import {CardsTypes} from '../../const.js';
import {getOffersByCity} from '../../utils.js';


function OffersList(props) {
  const {cardsType, offers, onCardHover, onCardLeave, city} = props;
  const [currentOffer, setCurrentOffer] = useState({});

  let offersToRender = offers;
  if (cardsType === CardsTypes.FAVORITES) {
    offersToRender = getOffersByCity(offers, city);
  }

  return (
    <div className={cardsType.listClassNames}>
      {offersToRender.map((offer) => (
        <OfferCard
          cardType={cardsType}
          isActive={offer === currentOffer}
          key={offer.id}
          offer={offer}
          handleMouseHover={() => setCurrentOffer(offer)}
          handleMouseRemoving={() => setCurrentOffer(null)}
          onCardHover={onCardHover ? () => onCardHover(offer) : undefined}
          onCardLeave={onCardLeave}
        />
      ))}
    </div>
  );
}


OffersList.propTypes = {
  cardsType: PropTypes.shape(cardTypesProp).isRequired,
  offers: PropTypes.arrayOf(offerProp).isRequired,
  onCardHover: PropTypes.func,
  onCardLeave: PropTypes.func,
  city: PropTypes.string,
};


export default OffersList;
