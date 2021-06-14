import React, {useState} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';
import offerProp from '../offer-screen/offer-prop.js';
import {CardTypes} from '../../const.js';


function OffersList(props) {
  const {offers} = props;
  const [currentOffer, setCurrentOffer] = useState({});

  const handleMouseEnterLeave = (value) => {
    setCurrentOffer(value);
  };


  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          cardType={CardTypes.MAIN}
          isActive={offer === currentOffer}
          key={offer.id}
          offer={offer}
          handleMouseHover={() => handleMouseEnterLeave(offer)}
          handleMouseRemoving={() => handleMouseEnterLeave(null)}
        />
      ))}
    </div>
  );
}


OffersList.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape(offerProp).isRequired,
  ),
};


export default OffersList;
