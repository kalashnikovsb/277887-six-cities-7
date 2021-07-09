import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logout} from '../../store/api-actions.js';
import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';


function Header(props) {
  const {isAuthenticated, onLogout, email} = props;

  const handleClick = (evt) => {
    evt.preventDefault();
    onLogout();
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            {isAuthenticated ? (
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoute.FAVORITES}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{email}</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link
                    className="header__nav-link"
                    to={AppRoute.ROOT}
                    onClick={handleClick}
                  >
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoute.LOGIN}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}


Header.propTypes = {
  onLogout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  email: PropTypes.string,
};


const mapStateToProps = (state) => ({
  isAuthenticated: state.authorizationStatus === AuthorizationStatus.AUTH,
  email: state.userData.email,
});


const mapDispatchToProps = (dispatch) => ({
  onLogout() {
    dispatch(logout());
  },
});


export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
