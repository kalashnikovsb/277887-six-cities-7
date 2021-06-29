import React from 'react';
import PropTypes from 'prop-types';
import reviewProp from '../../prop-types/review-prop.js';
import ReviewItem from '../review-item/review-item.jsx';


function ReviewsList(props) {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review) => <ReviewItem key={review.id} review={review} />)}
    </ul>
  );
}


ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
};


export default ReviewsList;
