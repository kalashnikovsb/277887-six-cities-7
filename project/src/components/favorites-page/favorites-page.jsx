import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.js';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getFavoriteOffers, getOffersByCity, getFavoriteCities} from '../../utils.js';
import FavoriteCity from '../favorite-city/favorite-city.jsx';
import FavoritesEmpty from '../favorites-empty/favorites-empty.jsx';
import Header from '../header/header.jsx';


function FavoritesPage(props) {
  const {cityToOffers, isFavoritesEmpty} = props;

  return (
    <div className={`page ${isFavoritesEmpty ? 'page--favorites-empty' : ''}`}>
      <Header />

      {!isFavoritesEmpty ? (
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {
                  cityToOffers.map(([city, offers]) => <FavoriteCity key={city} city={city} offers={offers} />)
                }
              </ul>
            </section>
          </div>
        </main>
      ) : (
        <FavoritesEmpty />
      )}

      <footer className={`footer ${isFavoritesEmpty ? '' : 'container'}`}>
        <Link className="footer__logo-link" to={AppRoute.ROOT}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}


FavoritesPage.propTypes = {
  cityToOffers: PropTypes.array.isRequired,
  isFavoritesEmpty: PropTypes.bool.isRequired,
};


const mapStateToProps = (state) => {
  const offers = getFavoriteOffers(state.offers);
  const favoriteCities = getFavoriteCities(state.offers);
  const isFavoritesEmpty = !offers.length;

  const cityToOffers = [];
  favoriteCities.forEach((city) => {
    const currentOffers = getOffersByCity(offers, city);
    if (currentOffers.length !== 0) {
      cityToOffers.push([city, currentOffers]);
    }
  });

  return {
    isFavoritesEmpty,
    cityToOffers,
  };
};


export {FavoritesPage};
export default connect(mapStateToProps)(FavoritesPage);
