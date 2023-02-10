import React from 'react';
import './ScProduct.scss';

const ScProduct = ({ pro }) => {
  const { id, image_url, name, info } = pro;
  return (
    <div className="scProduct">
      <img src={image_url} alt="1" />
      <div>{name}</div>
      <div>{info}</div>
    </div>
  );
};

export default ScProduct;
