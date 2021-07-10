import React from 'react';
import CommentForm from '../comment-form/comment-form.jsx';
import PropTypes from 'prop-types';
import reviewProp from '../../prop-types/review-prop.js';
import ReviewsList from '../reviews-list/reviews-list.jsx';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../const.js';


function Reviews(props) {
  const {reviews, isAuth} = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewsList reviews={reviews} />
      {isAuth && <CommentForm />}
    </section>
  );
}


Reviews.propTypes = {
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
  isAuth: PropTypes.bool,
};


const mapStateToProps = (state) => ({
  isAuth: state.authorizationStatus === AuthorizationStatus.AUTH,
});


export {Reviews};
export default connect(mapStateToProps)(Reviews);
