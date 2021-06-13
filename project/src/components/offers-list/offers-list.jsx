import React, {useState} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';
import offerProp from '../offer-screen/offer-prop.js';


function OffersList(props) {
  const {offers} = props;
  const [currentOffer, setCurrentOffer] = useState({});

  // eslint-disable-next-line
  console.log(currentOffer);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <PlaceCard key={offer.id} offer={offer} onMouseOver={(prevOffer) => setCurrentOffer({...prevOffer, ...offer})} />)}
    </div>
  );
}


OffersList.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape(offerProp).isRequired,
  ),
};


export default OffersList;
