import React from 'react';
import CommentForm from '../comment-form/comment-form.jsx';
import PropTypes from 'prop-types';
import reviewProp from '../../prop-types/review-prop.js';
import ReviewsList from '../reviews-list/reviews-list.jsx';
import {useSelector} from 'react-redux';
import {getIsAuthenticatedStatus} from '../../store/user/selectors.js';


function Reviews(props) {
  const {reviews, offerId} = props;
  const isAuth = useSelector(getIsAuthenticatedStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewsList reviews={reviews} />
      {isAuth && <CommentForm offerId={offerId} />}
    </section>
  );
}


Reviews.propTypes = {
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
  offerId: PropTypes.number.isRequired,
};


export default Reviews;
