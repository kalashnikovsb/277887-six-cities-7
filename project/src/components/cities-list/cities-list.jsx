import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {changeCity} from '../../store/actions.js';
import {connect} from 'react-redux';
import CityItem from '../city-item/city-item.jsx';
import {getActiveCity, getCities} from '../../store/application/selectors.js';


function CitiesList(props) {
  const {activeCity, onChangeCity, cities} = props;

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => <CityItem key={city} city={city} activeCity={activeCity} onChangeCity={onChangeCity} />)}
    </ul>
  );
}


CitiesList.propTypes = {
  activeCity: PropTypes.string.isRequired,
  onChangeCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
};


const mapStateToProps = (state) => ({
  activeCity: getActiveCity(state),
  cities: getCities(state),
});


const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(changeCity(city));
  },
});


export {CitiesList};
export default memo(connect(mapStateToProps, mapDispatchToProps)(CitiesList), (prevProps, nextProps) => prevProps.activeCity === nextProps.activeCity);
