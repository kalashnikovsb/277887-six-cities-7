import React from 'react';
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';


const getGoodsIdentifiers = (goods) => {
  const goodsIdentifiers = new Map();
  goods.map((item) => goodsIdentifiers.set(item, nanoid()));
  return goodsIdentifiers;
};


function OfferFeaturesList(props) {
  const {goods} = props;
  const goodsIdentifiers = getGoodsIdentifiers(goods);

  return (
    <ul className="property__inside-list">
      {goods.map((item) => (
        <li key={goodsIdentifiers.get(item)} className="property__inside-item">
          {item}
        </li>
      ))}
    </ul>
  );
}


OfferFeaturesList.propTypes = {
  goods: PropTypes.array.isRequired,
};


export default OfferFeaturesList;
