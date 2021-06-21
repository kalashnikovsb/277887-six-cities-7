import React, {useState} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';
import offerProp from '../../prop-types/offer-prop.js';
import {CardTypes} from '../../const.js';


function OffersList(props) {
  const {offers} = props;
  const [currentOffer, setCurrentOffer] = useState({});

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          cardType={CardTypes.MAIN}
          isActive={offer === currentOffer}
          key={offer.id}
          offer={offer}
          handleMouseHover={() => setCurrentOffer(offer)}
          handleMouseRemoving={() => setCurrentOffer(null)}
        />
      ))}
    </div>
  );
}


OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
};


export default OffersList;
