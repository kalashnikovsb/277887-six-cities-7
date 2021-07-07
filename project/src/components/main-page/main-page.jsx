import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import OffersList from '../offers-list/offers-list.jsx';
import Cities from '../cities/cities.jsx';
import offerProp from '../../prop-types/offer-prop.js';
import {AppRoute, MapTypes, CardsTypes} from '../../const.js';
import Map from '../map/map.jsx';
import Sorting from '../sorting/sorting.jsx';
import {getOffersByCity} from '../../utils.js';


function MainPage(props) {
  const {activeOffers, activeCity, authorizationStatus} = props;
  const [activeCard, setActiveCard] = useState({});

  const onCardHover = (offer) => setActiveCard(offer);
  const onCardLeave = () => setActiveCard({});


  // eslint-disable-next-line
  console.log(authorizationStatus);


  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to={AppRoute.ROOT}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to={AppRoute.ROOT}>
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Cities />
        </div>
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
      </main>
    </div>
  );
}


MainPage.propTypes = {
  activeCity: PropTypes.string.isRequired,
  activeOffers: PropTypes.arrayOf(offerProp).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};


const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  activeOffers: getOffersByCity(state.offers, state.activeCity),
  authorizationStatus: state.authorizationStatus,
});


export {MainPage};
export default connect(mapStateToProps)(MainPage);
