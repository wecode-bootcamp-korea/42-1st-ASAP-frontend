import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ScProduct from './ScProduct';
import './SecondContainer.scss';

const SecondContainer = () => {
  const [productList, setProductList] = useState([]);

  // useEffect(() => {
  //   fetch('http://10.58.52.162:3000/products')
  //     .then(res => res.json())
  //     .then(data => {
  //       setProductList(data.data);
  //       console.log(data);
  //     });
  // }, []);

  useEffect(() => {
    fetch('data/scsample.json')
      .then(res => res.json())
      .then(data => {
        setProductList(data);
      });
  }, []);

  return (
    <div className="secondContainer">
      <div className="secondContainer-text">
        <h4 className="firstTextLine">스킨케어 플러스</h4>
        <h2 className="secondTextLine">복잡한 피부를 위한 집중케어 제품</h2>
        <h4 className="thirdTextLine">
          지친 피부와 도시 거주자를 고려해 만들어져 데일리 수분공급은 물론
          강력한 비타민 효과를 추가로 선사하는 제품을 만나보세요
        </h4>
        <Link to="/product-list">
          <button className="showProducts">제품 보기 </button>
        </Link>
      </div>
      {productList.map(pro => (
        <ScProduct pro={pro} key={pro.id} />
      ))}
    </div>
  );
};

export default SecondContainer;
