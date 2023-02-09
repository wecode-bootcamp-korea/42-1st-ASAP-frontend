import { Link } from 'react-router-dom';
import React from 'react';
import FilterNav from './Filter/FilterNav';
import HandProductList from './HandProductList/HandProductList';
import './HandList.scss';

export default function HandList() {
  return (
    <>
      <section className="hand-body">
        <img className="logo" src="./images/asaplogo.png" alt="logo-img" />
        <h1 className="title">핸드</h1>
        <FilterNav />
        <HandProductList />
      </section>
      <section className="present-body">
        <div className="present-wrapper">
          <h1 className="title">나를 위한 선물</h1>
          <p className="title-box">
            가장 중요한 자신과의 관계를 위한 특별한 선물. 따뜻한 마음을 담아
            선물하세요.
          </p>
          <Link className="present" to="/">
            나를 위한 선물 보기
            <img
              className="see-all-arrow"
              src="./images/see-all-arrow.png"
              alt="see-all-arrow"
            />
          </Link>
        </div>
        <img
          className="present-img"
          src="./images/present.jpeg"
          alt="present-img"
        />
      </section>
    </>
  );
}
