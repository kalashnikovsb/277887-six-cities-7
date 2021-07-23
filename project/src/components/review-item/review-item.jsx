import React from 'react';
import PropTypes from 'prop-types';
import reviewProp from '../../prop-types/review-prop.js';
import {getCorrectRatingWitdh} from '../../utils.js';


const getMonthAndYear = (dateString) => {
  const date = new Date(dateString);
  const month = date.toLocaleString('en-US', {month: 'long'});
  const year = date.getFullYear();
  return `${month} ${year}`;
};


function ReviewItem(props) {
  const {review} = props;
  const {comment, date, rating, user: {avatarUrl, name}} = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${getCorrectRatingWitdh(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date.slice(0, 10)}>{getMonthAndYear(date)}</time>
      </div>
    </li>
  );
}


ReviewItem.propTypes = {
  review: PropTypes.shape(reviewProp).isRequired,
};


export default ReviewItem;
