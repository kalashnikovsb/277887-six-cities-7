import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import offerProp from '../offer-screen/offer-prop.js';
import cardTypeProp from '../place-card/card-type-prop.js';


function PlaceCard(props) {
  const {handleMouseHover, handleMouseRemoving} = props;
  const {isPremium, isFavorite, price, title, type, images, id, isActive} = props.offer;
  const {articleClassName, imgWrapClassName, textInfoClassName, hasPremiumMark, imgWidth, imgHeight} = props.cardType;
  const firstImage = images[0];

  return (
    <article className={`${articleClassName} place-card ${isActive ? 'cities__place-card--active' : ''}`} onMouseEnter={handleMouseHover} onMouseLeave={handleMouseRemoving}>
      {hasPremiumMark && isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${imgWrapClassName} place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={`img/${firstImage}`} width={imgWidth} height={imgHeight} alt="Place" />
        </Link>
      </div>
      <div className={`${textInfoClassName} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '20%'}}></span>
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


PlaceCard.propTypes = {
  offer: PropTypes.shape(offerProp).isRequired,
  cardType: PropTypes.shape(cardTypeProp).isRequired,
  handleMouseHover: PropTypes.func,
  handleMouseRemoving: PropTypes.func,
};


export default PlaceCard;
