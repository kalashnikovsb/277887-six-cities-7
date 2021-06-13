import React, {useState} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';
import offerProp from '../offer-screen/offer-prop.js';


function OffersList(props) {
  const {offers} = props;
  const [currentOffer, setCurrentOffer] = useState({});

  const handleMouseHover = (offer) => {
    setCurrentOffer(offer);
  };

  const handleMouseRemoving = () => {
    setCurrentOffer({});
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          handleMouseHover={() => handleMouseHover(offer)}
          handleMouseRemoving={() => handleMouseRemoving}
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
