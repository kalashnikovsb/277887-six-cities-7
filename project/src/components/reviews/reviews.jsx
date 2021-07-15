import React from 'react';
import CommentForm from '../comment-form/comment-form.jsx';
import PropTypes from 'prop-types';
import reviewProp from '../../prop-types/review-prop.js';
import ReviewsList from '../reviews-list/reviews-list.jsx';
import {connect} from 'react-redux';
import {getIsAuthenticatedStatus} from '../../store/user/selectors.js';


function Reviews(props) {
  const {reviews, isAuth, offerId} = props;

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
  isAuth: PropTypes.bool,
  offerId: PropTypes.number.isRequired,
};


const mapStateToProps = (state) => ({
  isAuth: getIsAuthenticatedStatus(state),
});


export {Reviews};
export default connect(mapStateToProps)(Reviews);
