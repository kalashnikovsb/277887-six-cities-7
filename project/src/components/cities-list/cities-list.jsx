import React from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/actions.js';
import {connect} from 'react-redux';
import {Cities} from '../../const.js';
import CityItem from '../city-item/city-item.jsx';


function CitiesList(props) {
  const {activeCity, onChangeCity} = props;

  return (
    <ul className="locations__list tabs__list">
      {Cities.map((city) => <CityItem key={city} city={city} activeCity={activeCity} onChangeCity={onChangeCity} />)}
    </ul>
  );
}


CitiesList.propTypes = {
  activeCity: PropTypes.string.isRequired,
  onChangeCity: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});


export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
