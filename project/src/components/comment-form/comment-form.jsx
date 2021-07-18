import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {postReview} from '../../store/api-actions.js';
import RatingItem from '../rating-item/rating-item.jsx';
import {RatingToValue} from '../../const.js';
import {getReviewSendingError, getReviewFormDisabled} from '../../store/application/selectors.js';
import {setReviewSendingError} from '../../store/actions.js';


const getDisabledStatus = (rating, review) => !(review.length > 50 && review.length < 300 && rating);


function CommentForm(props) {
  const {offerId} = props;
  const [rating, setRating] = useState(null);
  const [review, setReview] = useState('');
  const isSubmitDisabled = getDisabledStatus(rating, review);

  const sendingErrorStatus = useSelector(getReviewSendingError);
  const isFormDisabled = useSelector(getReviewFormDisabled);
  const dispatch = useDispatch();

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    dispatch(postReview({
      id: offerId,
      comment: review,
      rating: rating,
    }));
    setRating(null);
    setReview('');
  };

  const onTextareaFocus = (evt) => {
    evt.preventDefault();
    dispatch(setReviewSendingError(false));
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className='reviews__rating-form form__rating'>
        {Object.values(RatingToValue).map(({value, title}) => <RatingItem key={value} value={value} title={title} currentRating={rating} setRating={setRating} />)}
      </div>
      {sendingErrorStatus && <p style={{color: 'red', background: '#eee', textAlign: 'center'}}>Sending Error! Please, try again later</p>}
      <textarea
        className='reviews__textarea form__textarea'
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={(evt) => setReview(evt.target.value)}
        onFocus={onTextareaFocus}
        disabled={isFormDisabled}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitDisabled} >Submit</button>
      </div>
    </form>
  );
}


CommentForm.propTypes = {
  offerId: PropTypes.number.isRequired,
};


export default CommentForm;
