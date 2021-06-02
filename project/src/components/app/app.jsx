import React from 'react';
import MainPage from '../main-page/main-page.jsx';


function App(props) {
  const cardsCount = props;

  return <MainPage placesCards={cardsCount} />;
}

export default App;
