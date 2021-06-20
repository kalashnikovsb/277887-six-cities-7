import React from 'react';
import CommentForm from '../comment-form/comment-form.jsx';
import PropTypes from 'prop-types';
import reviewProp from '../../prop-types/review-prop.js';
import ReviewsList from '../reviews-list/reviews-list.jsx';


function Reviews(props) {
  const {reviews} = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewsList reviews={reviews} />
      <CommentForm />
    </section>
  );
}


Reviews.propTypes = {
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
};


export default Reviews;
