import React, {useRef, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import offerProp from '../../prop-types/offer-prop.js';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {MapTypes} from '../../const.js';


const getCorrectClassName = (mapType) => mapType === MapTypes.MAIN ? 'cities__map' : 'property__map';


const CITY = [52.38333, 4.9];
const ZOOM = 12;
const ICON = leaflet.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});


function Map(props) {
  const mapRef = useRef(null);
  const [currentMap, setCurrentMap] = useState(null);
  const {offers, mapType} = props;
  // let map = null;

  useEffect(() => {
    map = leaflet.map(mapRef.current, {
      center: CITY,
      zoom: ZOOM,
      zoomControl: false,
      marker: true,
    });

    map.setView(CITY, ZOOM);

    leaflet
      .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      )
      .addTo(map);

    setCurrentMap(map);
  }, []);

  useEffect(() => {
    offers.forEach((offer) => {
      const {latitude, longitude} = offer.location;

      leaflet.marker({
        lat: latitude,
        lng: longitude,
      }, {
        icon: ICON,
      })
        .addTo(currentMap);
    });
  }, [offers]);

  return (<section id="map" ref={mapRef} className={`${getCorrectClassName(mapType)} map`}></section>);
}


Map.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  mapType: PropTypes.string.isRequired,
};


export default Map;
