import React from 'react';
import PropTypes from 'prop-types';
import reviewProp from '../../prop-types/review-prop.js';


const getMonthAndYear = (dateString) => {
  const date = new Date(dateString);
  const allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const month = allMonths[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${year}`;
};


function ReviewsItem(props) {
  const {review} = props;
  const {comment, date, user: {avatarUrl, name}} = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={`img/${avatarUrl}`} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: '80%'}}></span>
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


ReviewsItem.propTypes = {
  review: PropTypes.shape(reviewProp).isRequired,
};


export default ReviewsItem;
