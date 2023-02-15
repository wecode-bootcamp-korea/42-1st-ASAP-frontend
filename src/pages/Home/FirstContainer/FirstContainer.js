import React from 'react';
import { Link } from 'react-router-dom';
import './FirstContainer.scss';

const FirstContainer = () => {
  return (
    <div className="firstAdContainer">
      <div className="firstAdContainer-left">
        <Link to="/">
          <img src="images/asaplogo.png" className="logo" alt="" />
        </Link>
        <div className="content1">
          <h5>깃털처럼 가벼운 하이드레이팅 오일</h5>
          <h2>에이셉 프리미엄 바디오일</h2>
          <h4>
            비타민과 식물성 성분을 담아 하루종일 피부를 탄탄하게지탱해주는
            가벼운 데일리 하이드레이터를 만나보세요.
          </h4>
          <Link to="/product-detail">
            <span className="arrowBox">
              <img className="arrow" src="images/arrow.png" alt="arrow" />더
              보기
            </span>
          </Link>
        </div>
      </div>
      <div className="firstAdContainer-right">
        <img src="images/product04.png" alt="" className="productZindex" />
      </div>
    </div>
  );
};

export default FirstContainer;
