import React from 'react';
import PropTypes from 'prop-types';
import reviewProp from '../../prop-types/review-prop.js';
import ReviewsItem from '../reviews-item/reviews-item.jsx';


function ReviewsList(props) {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review) => <ReviewsItem key={review.id} review={review} />)}
    </ul>
  );
}


ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
};


export default ReviewsList;
