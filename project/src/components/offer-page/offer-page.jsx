import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import OffersList from '../offers-list/offers-list.jsx';
import PropTypes from 'prop-types';
import offerProp from '../../prop-types/offer-prop.js';
import reviewProp from '../../prop-types/review-prop.js';
import OfferFeaturesList from '../offer-features-list/offer-features-list.jsx';
import OfferGallery from '../offer-gallery/offer-gallery.jsx';
import {CardsTypes, MapTypes} from '../../const.js';
import Reviews from '../reviews/reviews.jsx';
import Host from '../host/host.jsx';
import Map from '../map/map.jsx';
import {connect} from 'react-redux';
import {fetchReviewsList} from '../../store/api-actions.js';
import Header from '../header/header.jsx';


const getPremiumMark = (isPremium) => isPremium ? (
  <div className="property__mark">
    <span>Premium</span>
  </div>
) : '';


function OfferPage(props) {
  const {offers, offersNearby, reviews, loadReviewsList} = props;
  const {id} = useParams();

  const currentOffer = offers.find((offer) => offer.id === Number(id));
  const {rating, price, bedrooms, type, goods, title, isPremium, images, host, description} = currentOffer;

  useEffect(() => {
    loadReviewsList(id);
  }, [id, loadReviewsList]);

  return (
    <div className="page">
      <Header />

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
          <Map
            mapType={MapTypes.OFFER}
            offers={offersNearby}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersList
              cardsType={CardsTypes.NEARBY}
              offers={offersNearby}
            />
          </section>
        </div>
      </main>
    </div>
  );
}


OfferPage.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  offersNearby: PropTypes.arrayOf(offerProp).isRequired,
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
  loadReviewsList: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  offers: state.offers,
  reviews: state.reviews,
  offersNearby: state.offers.slice(0, 3),
});


const mapDispatchToProps = {
  loadReviewsList: fetchReviewsList,
};


export {OfferPage};
export default connect(mapStateToProps, mapDispatchToProps)(OfferPage);
