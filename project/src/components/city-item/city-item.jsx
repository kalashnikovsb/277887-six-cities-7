import React from 'react';
import PropTypes from 'prop-types';


function CityItem(props) {
  const {city, activeCity, onChangeCity} = props;

  const handleCityClick = (evt) => {
    evt.preventDefault();
    onChangeCity(city);
  };

  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${(city === activeCity) ? 'tabs__item--active' : ''}`}
        href="/#"
        onClick={handleCityClick}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}


CityItem.propTypes = {
  city: PropTypes.string.isRequired,
  activeCity: PropTypes.string.isRequired,
  onChangeCity: PropTypes.func.isRequired,
};


export default CityItem;
