import React from 'react';
import {changeCity} from '../../store/actions.js';
import {useSelector, useDispatch} from 'react-redux';
import CityItem from '../city-item/city-item.jsx';
import {getActiveCity, getCities} from '../../store/application/selectors.js';


function CitiesList() {

  const activeCity = useSelector(getActiveCity);
  const cities = useSelector(getCities);

  const dispatch = useDispatch();

  const onChangeCity = (city) => {
    dispatch(changeCity(city));
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => <CityItem key={city} city={city} activeCity={activeCity} onChangeCity={onChangeCity} />)}
    </ul>
  );
}

export default CitiesList;
