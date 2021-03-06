import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import offerProp from '../../prop-types/offer-prop.js';
import cardTypesProp from '../../prop-types/card-types-prop.js';
import {getCorrectRatingWitdh, getCorrectHousingType} from '../../utils.js';
import {postToFavorites} from '../../store/api-actions.js';


function OfferCard(props) {
  const {cardType, offer, handleCardHover, handleCardLeave} = props;
  const {isPremium, isFavorite, price, title, type, images, id, rating} = offer;
  const {articleClassName, imgWrapClassName, textInfoClassName, hasPremiumMark, imgWidth, imgHeight} = cardType;
  const firstImage = images[0];

  const dispatch = useDispatch();

  const handleFavoriteButtonClick = useCallback((evt) => {
    evt.preventDefault();
    dispatch(postToFavorites(offer));
  }, [dispatch, offer]);

  return (
    <article className={`${articleClassName} place-card`}
      onMouseEnter={() => handleCardHover(offer)}
      onMouseLeave={handleCardLeave}
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
            onClick={handleFavoriteButtonClick}
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
        <p className="place-card__type">{getCorrectHousingType(type)}</p>
      </div>
    </article>
  );
}


OfferCard.defaultProps = {
  handleCardHover: () => {},
  handleCardLeave: () => {},
};


OfferCard.propTypes = {
  offer: PropTypes.shape(offerProp).isRequired,
  cardType: PropTypes.shape(cardTypesProp).isRequired,
  handleCardHover: PropTypes.func,
  handleCardLeave: PropTypes.func,
};


export default OfferCard;
