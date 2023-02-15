import React from 'react';
import { Link } from 'react-router-dom';
import './Mycard.scss';

const Mycard = ({ pro }) => {
  const { id, image_url, name, description } = pro;

  return (
    <div className="mycard">
      <Link className="link" to="/product-detail">
        <img className="insideImg" src={image_url} alt="productImage" />
      </Link>
      <div className="productName">{name}</div>
      <div>{description}</div>
    </div>
  );
};

export default Mycard;
