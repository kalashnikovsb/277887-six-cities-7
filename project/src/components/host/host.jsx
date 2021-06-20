import React from 'react';
import PropTypes from 'prop-types';


const getProMark = (isPro) => isPro ? <span className="property__user-status">Pro</span> : '';


function Host(props) {
  const {host, description} = props;
  const {avatarUrl, isPro, name} = host;

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className={`property__avatar-wrapper ${isPro ? 'property__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
          <img className="property__avatar user__avatar" src={`img/${avatarUrl}`} width="74" height="74" alt="Host avatar" />
        </div>
        <span className="property__user-name">
          {name}
        </span>
        {getProMark(isPro)}
      </div>
      <div className="property__description">
        <p className="property__text">
          {description}
        </p>
      </div>
    </div>
  );
}


Host.propTypes = {
  host: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
};


export default Host;
