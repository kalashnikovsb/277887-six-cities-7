import React, {useState} from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card.jsx';
import offerProp from '../../prop-types/offer-prop.js';
import cardTypesProp from '../../prop-types/card-types-prop.js';
import {connect} from 'react-redux';
import {SortingTypes, CardsTypes} from '../../const.js';
import {sortOffersLowToHigh, sortOffersHighToLow, sortOffersByRating} from '../../utils.js';


function OffersList(props) {
  const {cardsType, offers, onCardHover, onCardLeave, activeSorting} = props;
  const [currentOffer, setCurrentOffer] = useState({});

  const offersToRender = offers.slice();

  if (cardsType === CardsTypes.MAIN) {
    switch (activeSorting) {
      case SortingTypes.LOW_TO_HIGH:
        offersToRender.sort(sortOffersLowToHigh);
        break;
      case SortingTypes.HIGH_TO_LOW:
        offersToRender.sort(sortOffersHighToLow);
        break;
      case SortingTypes.TOP_RATED:
        offersToRender.sort(sortOffersByRating);
        break;
      default:
        break;
    }
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
  activeSorting: PropTypes.string,
};


const mapStateToProps = (state) => ({
  activeSorting: state.activeSorting,
});


export {OffersList};
export default connect(mapStateToProps)(OffersList);
