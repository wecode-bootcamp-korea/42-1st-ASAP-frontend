import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HandProduct.scss';

export default function Product() {
  const [HandtListData, setHandListData] = useState([]);

  useEffect(() => {
    fetch('./data/HandProductList.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setHandListData(data);
      });
  }, []);

  return (
    <div className="product-wrapper">
      {HandtListData.map(handtListData => (
        <div className="product-box" key={handtListData.id}>
          <Link className="button" to="/product-detail">
            <img
              className="product-photo"
              src={handtListData.img_url}
              alt="product-img"
            />
            <div className="description">
              <h3>{handtListData.name}</h3>
              <span>{handtListData.price}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
