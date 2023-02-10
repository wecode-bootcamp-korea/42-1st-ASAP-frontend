import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ScProduct from './ScProduct';
import './SecondContainer.scss';

const SecondContainer = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('http://10.58.52.162:3000/')
      .then(res => res.json())
      .then(data => {
        setProductList(data.data);
        console.log(productList);
      });
  }, []);

  return (
    <div className="secondContainer">
      <div className="secondContainer-text">
        <p>프로젝트</p>
        <p>Hello World</p>
        <p>hansol</p>
        <Link to="/product-list">
          <button>제품 보기 </button>
        </Link>
      </div>
      {productList.map(pro => (
        <ScProduct pro={pro} key={pro.id} />
      ))}
    </div>
  );
};

export default SecondContainer;
