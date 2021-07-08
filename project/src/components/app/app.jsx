import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const.js';
import MainPage from '../main-page/main-page.jsx';
import FavoritesPage from '../favorites-page/favorites-page.jsx';
import LoginPage from '../login-page/login-page.jsx';
import OfferPage from '../offer-page/offer-page.jsx';
import NotFoundScreen from '../not-found-screen/not-found-screen.jsx';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import LoadingScreen from '../loading-screen/loading-screen.jsx';
import PrivateRoute from '../private-route/private-route.jsx';


function App(props) {
  const {isDataLoaded} = props;

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginPage />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => <FavoritesPage />}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.OFFER}>
          <OfferPage />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}


App.propTypes = {
  isDataLoaded: PropTypes.bool.isRequired,

};


const mapStateToProps = (state) => ({
  isDataLoaded: state.isDataLoaded,
});


export {App};
export default connect(mapStateToProps, null)(App);
