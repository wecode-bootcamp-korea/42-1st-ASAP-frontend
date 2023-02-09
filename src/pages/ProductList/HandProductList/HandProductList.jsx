import React, { useEffect, useState } from 'react';
import Card from './../Card/Card';
import './HandProductList.scss';

export default function HandProductList() {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    fetch('./data/CardList.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCardList(data);
      });
  }, []);

  return (
    <div className="card-box">
      <div className="container-box">
        <h2 className="h-product-title">풍부한 수분과 영양 공급</h2>
        <p className="h-product-description">
          매일 우리에게 안락하믈 선사하는 손은 보살핌을 받을 자격이
          <br />
          충분합니다. 아로마 클렌저와 밤은 손에 수분과 영양을 공급하고
          <br />
          부드럽게 가꿔줍니다.
        </p>
      </div>
      {cardList.map(cardList => (
        <Card cardList={cardList} key={cardList.id} s />
      ))}
    </div>
  );
}
