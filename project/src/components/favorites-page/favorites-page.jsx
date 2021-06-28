import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import OffersList from '../offers-list/offers-list.jsx';
import {CardsTypes, AppRoute} from '../../const.js';
import PropTypes from 'prop-types';
import offerProp from '../../prop-types/offer-prop.js';
import {getFavoriteOffers} from '../../utils.js';


function FavoritesPage(props) {
  const {favoriteOffers} = props;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.ROOT}>
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

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="/#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <OffersList
                  cardsType={CardsTypes.FAVORITES}
                  offers={favoriteOffers}
                />
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.ROOT}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}


FavoritesPage.propTypes = {
  favoriteOffers: PropTypes.arrayOf(offerProp).isRequired,
};


const mapStateToProps = (state) => ({
  favoriteOffers: getFavoriteOffers(state.offers),
});


export {FavoritesPage};
export default connect(mapStateToProps)(FavoritesPage);
