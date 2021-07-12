import React from 'react';
import PropTypes from 'prop-types';


function RatingItem(props) {
  const {value, title, currentRating, setRating} = props;

  return (
    <React.Fragment>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}-${value === 1 ? 'star' : 'stars'}`}
        type="radio"
        onChange={(evt) => setRating(evt.target.value)}
        checked={value === Number(currentRating)}
      />
      <label
        htmlFor={`${value}-${value === 1 ? 'star' : 'stars'}`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image"width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </React.Fragment>
  );
}


RatingItem.propTypes = {
  value: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  currentRating: PropTypes.string,
  setRating: PropTypes.func,
};


export default RatingItem;
