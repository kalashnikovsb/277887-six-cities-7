import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import offerProp from '../../prop-types/offer-prop.js';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {MapTypes} from '../../const.js';
import useMap from '../../hooks/useMap';


const Pin = {
  ICON_URL: 'img/pin.svg',
  ACTIVE_ICON_URL: 'img/pin-active.svg',
  ICON_SIZE: [30, 30],
  ICON_ANCHOR: [15, 30],
};


const getCorrectClassName = (mapType) => mapType === MapTypes.MAIN ? 'cities__map' : 'property__map';

const defaultIcon = leaflet.icon({
  iconUrl: Pin.ICON_URL,
  iconSize: Pin.ICON_SIZE,
  iconAnchor: Pin.ICON_ANCHOR,
});

const activeIcon = leaflet.icon({
  iconUrl: Pin.ACTIVE_ICON_URL,
  iconSize: Pin.ICON_SIZE,
  iconAnchor: Pin.ICON_ANCHOR,
});


function Map(props) {
  const {city, offers, activeCard, mapType} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const layerGroup = leaflet.layerGroup();

    if (map) {
      offers.forEach(({location: {latitude, longitude}, id}) => {
        const marker = leaflet.marker(
          {
            lat: latitude,
            lng: longitude,
          },
          {
            icon:
            (id === activeCard.id)
              ? activeIcon
              : defaultIcon,
          },
        );
        layerGroup.addLayer(marker);
      });

      layerGroup.addTo(map);

      map.flyTo(
        [offers[0].city.location.latitude, offers[0].city.location.longitude],
        offers[0].city.location.zoom,
      );
    }

    return () => {
      if (map) {
        layerGroup.remove();
      }
    };
  }, [map, offers, activeCard]);

  return (<section ref={mapRef} className={`${getCorrectClassName(mapType)} map`}></section>);
}


Map.propTypes = {
  mapType: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offerProp).isRequired,
  activeCard: PropTypes.object,
  city: PropTypes.object,
};


export default Map;
