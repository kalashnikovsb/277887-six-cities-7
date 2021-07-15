import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {APIlogout} from '../../store/api-actions.js';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {getIsAuthenticatedStatus, getEmail} from '../../store/user/selectors.js';


function Header() {
  const isAuthenticated = useSelector(getIsAuthenticatedStatus);
  const email = useSelector(getEmail);

  const dispatch = useDispatch();

  const handleClick = (evt) => {
    evt.preventDefault();
    dispatch(APIlogout());
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


export default Header;
