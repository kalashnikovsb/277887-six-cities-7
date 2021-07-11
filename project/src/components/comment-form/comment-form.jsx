import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {postReview} from '../../store/api-actions.js';
import RatingItem from '../rating-item/rating-item.jsx';
import {RatingToValue} from '../../const.js';


function CommentForm(props) {
  const {offerId, sendComment} = props;
  const [rating, setRating] = useState(null);
  const [review, setReview] = useState('');

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    if (review.length === 0 || !rating) {
      return;
    }
    sendComment({
      id: offerId,
      comment: review,
      rating: rating,
    });
    setRating(null);
    setReview('');
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className='reviews__rating-form form__rating'>
        {Object.values(RatingToValue).map(({value, title}) => <RatingItem key={value} value={value} title={title} currentRating={rating} setRating={setRating} />)}
      </div>
      <textarea
        className='reviews__textarea form__textarea'
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={(evt) => setReview(evt.target.value)}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
}


CommentForm.propTypes = {
  offerId: PropTypes.number.isRequired,
  sendComment: PropTypes.func.isRequired,
};


const mapDispatchToProps = {
  sendComment: postReview,
};


export {CommentForm};
export default connect(null, mapDispatchToProps)(CommentForm);
