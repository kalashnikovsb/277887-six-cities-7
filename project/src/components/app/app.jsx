import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page.jsx';


function App(props) {
  const {cardsIdentifiers} = props;

  return <MainPage cardsIdentifiers={cardsIdentifiers} />;
}


App.propTypes = {
  cardsIdentifiers: PropTypes.array.isRequired,
};

export default App;
