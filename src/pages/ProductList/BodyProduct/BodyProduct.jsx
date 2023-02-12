import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BodyProduct.scss';

export default function BodyProduct() {
  const [BodyListData, setBodyListData] = useState([]);

  useEffect(() => {
    fetch('./data/BodyData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setBodyListData(data[1].data);
      });
  }, []);

  return (
    <div>
      <div className="product-wrapper">
        {BodyListData.map(bodyListData => (
          <div className="product-box" key={bodyListData.id}>
            <Link className="button" to="/Product-Detail">
              <img
                className="product-photo"
                src={bodyListData.img_url}
                alt="product-img"
              />
              <div className="description">
                <h3 className="description-title">{bodyListData.name}</h3>
                <span>{bodyListData.price}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
