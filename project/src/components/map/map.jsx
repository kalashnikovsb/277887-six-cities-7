import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import offerProp from '../../prop-types/offer-prop.js';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';


const CITY = [52.38333, 4.9];
const ZOOM = 12;
const ICON = leaflet.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});


function Map(props) {
  const mapRef = useRef(null);
  const {offers} = props;

  useEffect(() => {
    const map = leaflet.map('map', {
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

    offers.forEach((offer) => {
      const {latitude, longitude} = offer.location;

      leaflet.marker({
        lat: latitude,
        lng: longitude,
      }, {
        icon: ICON,
      })
        .addTo(map);
    });
  }, [offers]);

  return (
    <div id="map" ref={mapRef} style={{height: '100%'}}></div>
  );
}


Map.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
};


export default Map;
