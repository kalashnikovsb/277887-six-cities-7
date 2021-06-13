import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const.js';
import MainScreen from '../main-screen/main-screen.jsx';
import FavoritesScreen from '../favorites-screen/favorites-screen.jsx';
import LoginScreen from '../login-screen/login-screen.jsx';
import OfferScreen from '../offer-screen/offer-screen.jsx';
import NotFoundScreen from '../not-found-screen/not-found-screen.jsx';
import offerProp from '../offer-screen/offer-prop.js';
import reviewProp from '../offer-screen/review-prop.js';


function App(props) {
  const {offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainScreen
            offers={offers}
            reviews={reviews}
          />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginScreen />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesScreen
            offers={offers}
          />
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
  offers: PropTypes.arrayOf(
    PropTypes.shape(offerProp).isRequired,
  ),
  reviews: PropTypes.arrayOf(
    PropTypes.shape(reviewProp).isRequired,
  ),
};

export default App;
