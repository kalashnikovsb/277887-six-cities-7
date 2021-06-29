import React from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/actions.js';
import {connect} from 'react-redux';
import CityItem from '../city-item/city-item.jsx';


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
  activeCity: state.activeCity,
  cities: state.cities,
});


const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});


export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
