import React from 'react';
import './ScProduct.scss';

const ScProduct = ({ pro }) => {
  const { id, image, product, info } = pro;
  return (
    <div className="scProduct">
      <img src={image} alt="1" />
      <div>{product}</div>
      <div>{info}</div>
    </div>
  );
};

export default ScProduct;
