import React from 'react';
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';


const getGalleryIdentifiers = (sources) => {
  const galleryIdentifiers = new Map();
  sources.map((src) => galleryIdentifiers.set(src, nanoid()));
  return galleryIdentifiers;
};


function OfferGallery(props) {
  const {images} = props;
  const galleryIdentifiers = getGalleryIdentifiers(images);

  return (
    <div className="property__gallery">
      {images.map((src) => (
        <div className="property__image-wrapper" key={galleryIdentifiers.get(src)}>
          <img className="property__image" src={src} alt="Studio" />
        </div>
      ))}
    </div>
  );
}


OfferGallery.propTypes = {
  images: PropTypes.array.isRequired,
};


export default OfferGallery;
