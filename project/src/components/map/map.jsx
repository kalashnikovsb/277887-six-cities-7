import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import offerProp from '../../prop-types/offer-prop.js';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {MapTypes} from '../../const.js';
import useMap from '../../hooks/useMap';


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
              ? ACTIVE_ICON
              : DEFAULT_ICON,
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
