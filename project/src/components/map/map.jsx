import React, {useRef, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import offerProp from '../../prop-types/offer-prop.js';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {MapTypes} from '../../const.js';


const getCorrectClassName = (mapType) => mapType === MapTypes.MAIN ? 'cities__map' : 'property__map';

const DEFAULT_ICON = leaflet.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

const ACTIVE_ICON = leaflet.icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

const CITY = [52.38333, 4.9];
const ZOOM = 12;


function Map(props) {
  const mapRef = useRef(null);
  const markersRef = useRef(null);
  const [currentMap, setMap] = useState(null);
  const {mapType, offers, activeCard = {}} = props;

  useEffect(() => {
    const map = leaflet.map(mapRef.current, {
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
    setMap(map);
    markersRef.current = leaflet.layerGroup();
  }, []);

  useEffect(() => {
    if (currentMap) {
      markersRef.current.clearLayers();
      offers.forEach((offer) => {
        const {latitude, longitude} = offer.location;

        const marker = leaflet.marker({
          lat: latitude,
          lng: longitude,
        }, {
          icon: (offer.id === activeCard.id) ? ACTIVE_ICON : DEFAULT_ICON,
        });
        markersRef.current.addLayer(marker);
      });
      markersRef.current.addTo(currentMap);
    }
  }, [currentMap, offers, activeCard]);

  return (<section ref={mapRef} className={`${getCorrectClassName(mapType)} map`}></section>);
}


Map.propTypes = {
  mapType: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offerProp).isRequired,
  activeCard: PropTypes.object,
};


export default Map;
