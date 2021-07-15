import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import OffersList from '../offers-list/offers-list.jsx';
import Cities from '../cities/cities.jsx';
import offerProp from '../../prop-types/offer-prop.js';
import {MapTypes, CardsTypes} from '../../const.js';
import Map from '../map/map.jsx';
import Sorting from '../sorting/sorting.jsx';
import Header from '../header/header.jsx';
import MainEmpty from '../main-empty/main-empty.jsx';
import {getActiveCity, getActiveOffers, getIsActiveCityEmptyStatus} from '../../store/application/selectors.js';


function MainPage(props) {
  const {activeOffers, activeCity, isActiveCityEmpty} = props;
  const [activeCard, setActiveCard] = useState({});

  const onCardHover = (offer) => setActiveCard(offer);
  const onCardLeave = () => setActiveCard({});

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={`page__main page__main--index ${isActiveCityEmpty && 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Cities />
        </div>

        {isActiveCityEmpty ? (
          <MainEmpty />
        ) : (
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{activeOffers.length} places to stay in {activeCity}</b>
                <Sorting />
                <OffersList
                  cardsType={CardsTypes.MAIN}
                  offers={activeOffers}
                  onCardHover={onCardHover}
                  onCardLeave={onCardLeave}
                />
              </section>
              <div className="cities__right-section">
                <Map
                  mapType={MapTypes.MAIN}
                  offers={activeOffers}
                  activeCard={activeCard}
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}


MainPage.propTypes = {
  activeCity: PropTypes.string.isRequired,
  activeOffers: PropTypes.arrayOf(offerProp).isRequired,
  isActiveCityEmpty: PropTypes.bool.isRequired,
};


const mapStateToProps = (state) => ({
  activeCity: getActiveCity(state),
  activeOffers: getActiveOffers(state),
  isActiveCityEmpty: getIsActiveCityEmptyStatus(state),
});


export {MainPage};
export default connect(mapStateToProps)(MainPage);
