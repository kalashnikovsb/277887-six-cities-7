import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import offerProp from '../../prop-types/offer-prop.js';
import cardTypesProp from '../../prop-types/card-types-prop.js';
import {getCorrectRatingWitdh} from '../../utils.js';
import {postToFavorites} from '../../store/api-actions.js';
import {getFavorites, getOffers} from '../../store/application/selectors.js';


function OfferCard(props) {
  const {cardType, isActive, offer, onCardHover, onCardLeave} = props;
  const {isPremium, isFavorite, price, title, type, images, id, rating} = offer;
  const {articleClassName, imgWrapClassName, textInfoClassName, hasPremiumMark, imgWidth, imgHeight} = cardType;
  const firstImage = images[0];

  const dispatch = useDispatch();

  const favorites = useSelector(getFavorites);
  const offers = useSelector(getOffers);

  const onCardFavoriteButtonClick = useCallback((evt) => {
    evt.preventDefault();
    dispatch(postToFavorites(offers, favorites, offer));
  }, [dispatch, offers, favorites, offer]);

  return (
    <article className={`${articleClassName} place-card ${isActive ? 'cities__place-card--active' : ''}`}
      onMouseEnter={onCardHover}
      onMouseLeave={onCardLeave}
    >
      {hasPremiumMark && isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${imgWrapClassName} place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={firstImage} width={imgWidth} height={imgHeight} alt="Place" />
        </Link>
      </div>
      <div className={`${textInfoClassName} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`}
            type="button"
            onClick={onCardFavoriteButtonClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getCorrectRatingWitdh(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}


OfferCard.propTypes = {
  offer: PropTypes.shape(offerProp).isRequired,
  cardType: PropTypes.shape(cardTypesProp).isRequired,
  isActive: PropTypes.bool,
  onCardHover: PropTypes.func,
  onCardLeave: PropTypes.func,
};


export default OfferCard;
