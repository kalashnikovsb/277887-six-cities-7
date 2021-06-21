import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {AppRoute} from '../../const';
import PlaceCard from '../place-card/place-card.jsx';
import PropTypes from 'prop-types';
import offerProp from '../../prop-types/offer-prop.js';
import reviewProp from '../../prop-types/review-prop.js';
import OfferFeaturesList from '../offer-features-list/offer-features-list.jsx';
import OfferGallery from '../offer-gallery/offer-gallery.jsx';
import {CardTypes, MapTypes} from '../../const.js';
import Reviews from '../reviews/reviews.jsx';
import Host from '../host/host.jsx';
import Map from '../map/map.jsx';


const getPremiumMark = (isPremium) => isPremium ? (
  <div className="property__mark">
    <span>Premium</span>
  </div>
) : '';


function OfferPage(props) {
  const {offers, reviews} = props;
  const {id} = useParams();

  const currentOffer = offers.find((offer) => offer.id === Number(id));
  const {rating, price, bedrooms, type, goods, title, isPremium, images, host, description} = currentOffer;

  const offersNearby = offers.slice(0, 3);

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
                  <Link className="header__nav-link header__nav-link--profile" to={`${AppRoute.LOGIN}`}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            {<OfferGallery images={images} />}
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {getPremiumMark(isPremium)}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: '80%'}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type.slice(0, 1).toUpperCase() + type.slice(1)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {bedrooms + 1} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <OfferFeaturesList goods={goods} />
              </div>
              <Host host={host} description={description} />
              <Reviews reviews={reviews} />
            </div>
          </div>
          <Map mapType={MapTypes.OFFER} offers={offersNearby} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {offersNearby.map((offer) => <PlaceCard key={offer.id} offer={offer} cardType={CardTypes.OFFER} />)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}


OfferPage.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
};


export default OfferPage;
