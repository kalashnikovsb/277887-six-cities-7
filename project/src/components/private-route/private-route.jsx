import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/user/selectors.js';


function PrivateRoute({render, path, exact}) {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        if (path === AppRoute.FAVORITES && authorizationStatus !== AuthorizationStatus.AUTH) {
          return (<Redirect to={AppRoute.LOGIN} />);
        }
        if (path === AppRoute.LOGIN && authorizationStatus === AuthorizationStatus.AUTH) {
          return (<Redirect to={AppRoute.ROOT} />);
        }
        return render(routeProps);
      }}
    />
  );
}

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};


export default PrivateRoute;
