import React, {useRef, useEffect, useState} from 'react';
import {connect} from 'react-redux';
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
  const markersRef = useRef(null);
  const [currentMap, setMap] = useState(null);
  const {mapType, offers, activeOffers} = props;

  const offersToRender = (mapType === MapTypes.MAIN) ? activeOffers : offers;

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
      offersToRender.forEach((offer) => {
        const {latitude, longitude} = offer.location;

        const marker = leaflet.marker({
          lat: latitude,
          lng: longitude,
        }, {
          icon: ICON,
        });
        markersRef.current.addLayer(marker);
      });
      markersRef.current.addTo(currentMap);
    }
  }, [currentMap, offersToRender]);

  return (<section ref={mapRef} className={`${getCorrectClassName(mapType)} map`}></section>);
}


Map.propTypes = {
  mapType: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offerProp).isRequired,
  activeOffers: PropTypes.arrayOf(offerProp).isRequired,
};


const mapStateToProps = (state) => ({
  offers: state.offers,
  activeOffers: state.activeOffers,
});


export {Map};
export default connect(mapStateToProps)(Map);
