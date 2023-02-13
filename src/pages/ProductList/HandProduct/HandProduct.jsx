import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HandProduct.scss';

export default function HandProduct() {
  const [HandtListData, setHandListData] = useState([]);
  useEffect(() => {
    fetch('./data/MockData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setHandListData(data.data);
      });
  }, []);

  return (
    <div className="product-wrapper">
      {HandtListData.map(handtListData => (
        <div className="product-box" key={handtListData.id}>
          <Link className="button" to="/product-detail">
            <img
              className="product-photo"
              src={handtListData.image_url}
              alt="product-img"
            />
            <div className="description">
              <h3 className="description-title">{handtListData.name}</h3>
              <span>{handtListData.price}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
