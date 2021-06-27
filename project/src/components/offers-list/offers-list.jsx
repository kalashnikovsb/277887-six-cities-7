import React, {useState} from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card.jsx';
import offerProp from '../../prop-types/offer-prop.js';
import cardTypesProp from '../../prop-types/card-types-prop.js';
import {CardsTypes} from '../../const.js';


function OffersList(props) {
  const {cardsType, offers} = props;
  let {onCardHover, onCardLeave} = props;
  const [currentOffer, setCurrentOffer] = useState({});

  if (cardsType !== CardsTypes.MAIN) {
    onCardHover = () => {};
    onCardLeave = () => {};
  }

  return (
    <div className={cardsType.listClassNames}>
      {offers.map((offer) => (
        <OfferCard
          cardType={cardsType}
          isActive={offer === currentOffer}
          key={offer.id}
          offer={offer}
          handleMouseHover={() => setCurrentOffer(offer)}
          handleMouseRemoving={() => setCurrentOffer(null)}
          onCardHover={() => onCardHover(offer.id)}
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
};


export default OffersList;
