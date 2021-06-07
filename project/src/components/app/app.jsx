import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const.js';
import MainScreen from '../main-screen/main-screen.jsx';
import FavoritesScreen from '../favorites-screen/favorites-screen.jsx';
import LoginScreen from '../login-screen/login-screen.jsx';
import OfferScreen from '../offer-screen/offer-screen.jsx';
import NotFoundScreen from '../not-found-screen/not-found-screen.jsx';


const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


const getCardsIdentifiers = (count) => {
  const result = [];
  for (let i = 0; i < count; i++) {
    const element = {};
    element.id = getRandomInteger(0, 1000000);
    result.push(element);
  }
  return result;
};


function App(props) {
  const {cardsCount} = props;
  const cardsIdentifiers = getCardsIdentifiers(cardsCount);

  // return <MainScreen cardsIdentifiers={cardsIdentifiers} />;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainScreen
            cardsIdentifiers={cardsIdentifiers}
          />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginScreen />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesScreen />
        </Route>
        <Route exact path={AppRoute.OFFER}>
          <OfferScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}


App.propTypes = {
  cardsCount: PropTypes.number.isRequired,
};

export default App;
