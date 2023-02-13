import React from 'react';
import { Link } from 'react-router-dom';
import './ScProduct.scss';

const ScProduct = ({ pro }) => {
  const { id, image_url, name, info } = pro;

  return (
    <div className="scProduct" key={id}>
      <Link className="link" to="/product-detail">
        <img className="insideImg" src={image_url} alt="productImage" />
      </Link>
      <div>{name}</div>
      <div>{info}</div>
    </div>
  );
};

export default ScProduct;
