import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import OffersList from '../offers-list/offers-list.jsx';
import Cities from '../cities/cities.jsx';
import {MapTypes, CardsTypes} from '../../const.js';
import Map from '../map/map.jsx';
import Sorting from '../sorting/sorting.jsx';
import Header from '../header/header.jsx';
import MainEmpty from '../main-empty/main-empty.jsx';
import {getActiveCity, getActiveOffers, getIsActiveCityEmptyStatus} from '../../store/application/selectors.js';


function MainPage() {
  const activeOffers = useSelector(getActiveOffers);
  const activeCity = useSelector(getActiveCity);
  const isActiveCityEmpty = useSelector(getIsActiveCityEmptyStatus);

  const [activeCard, setActiveCard] = useState({});

  const onCardHover = (offer) => setActiveCard(offer);
  const onCardLeave = () => setActiveCard({});

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={`page__main page__main--index ${isActiveCityEmpty && 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Cities />
        </div>

        {isActiveCityEmpty ? (
          <MainEmpty />
        ) : (
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{activeOffers.length} places to stay in {activeCity}</b>
                <Sorting />
                <OffersList
                  cardsType={CardsTypes.MAIN}
                  offers={activeOffers}
                  onCardHover={onCardHover}
                  onCardLeave={onCardLeave}
                />
              </section>
              <div className="cities__right-section">
                <Map
                  mapType={MapTypes.MAIN}
                  offers={activeOffers}
                  activeCard={activeCard}
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default MainPage;
