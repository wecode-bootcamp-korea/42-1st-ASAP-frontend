import React from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import Slider from '../../components/Slider/Slider';
import './ProductDetail.scss';

const ProductDetail = () => {
  return (
    <div className="productDetail">
      <div className="topWrapper">
        <img className="logo" alt="logo" src="./images/asaplogo.png" />
        <div className="topContainer">
          <div className="topLeft">
            <div className="imgWrapper">
              <img
                className="productImg1"
                alt="productimg"
                src="./images/product01.png"
              />
            </div>
          </div>
          <div className="topRight">
            <div className="detailWrapper">
              <ul className="categoryList">
                <li>
                  <a className="category_a">스킨</a>
                </li>
                <li className="categoryDot">
                  <a className="category_b">하이드레이터</a>
                </li>
              </ul>
              <h2 className="productName">루센트 페이셜 컨센트레이트</h2>
              <div className="productDetail">
                <p>
                  비타민 C 유도체가 풍부한 가벼운 레이어링 세럼으로 보습과
                  컨디셔닝, 그리고 피부 지탱 성분이 복합적으로 블렌딩 되어
                  피부에 수분과 영양을 공급하고 균형을 잡아줍니다.
                </p>
              </div>
              <div className="descriptionWrapper">
                <dl className="textLists">
                  <dt>피부 타입</dt>
                  <dd>대부분의 피부 타입</dd>
                  <dt>사용감</dt>
                  <dd>매끄러움, 수분 공급, 매트한 마무리</dd>
                  <dt>주요 성분</dt>
                  <dd>로즈, 소듐 아스코빌 포스페이트, 나이아신아마이드</dd>
                  <dt>사이즈</dt>
                  <dd>60ml</dd>
                </dl>
              </div>
              <btn className="addCart">카트에 추가하기 - 140,000원</btn>
            </div>
          </div>
        </div>
      </div>

      <aside className="asideWrapper">
        <div className="asideLeft">
          <h4 className="asideTitle">무료 선물 포장 서비스</h4>
          <span className="asideText">
            주문하신 모든 제품에 대해 선물 포장 서비스를 제공해 드립니다.
          </span>
        </div>
        <div className="asideRight">
          <h4 className="asideTitle">샘플 & 코튼 백 증정</h4>
          <span className="asideText">
            모든 주문 건에 무료 샘플과 코튼 백을 제공해 드립니다. (샘플 종류는
            임의 지정이 불가합니다.)
          </span>
        </div>
      </aside>

      <div className="howTo">
        <div className="howToLeft">
          <img
            alt="howToImg"
            className="howToImg"
            src="./images/howToImg1.png"
          />
        </div>
        <div className="howToRight">
          <div className="howToContainer">
            <span className="smallTitle">사용법</span>
            <p className="howToDetail">
              세안 후 토너를 바른 피부에 사용합니다. 선호하는 이솝
              하이드레이터와 섞어 더 집중적으로 수분을 공급할 수 있습니다.
            </p>

            <dl className="howToBox">
              <dt className="howToTitle">사용량</dt>
              <dd className="howToText">반 티스푼</dd>
              <dt className="howToTitle">텍스처</dt>
              <dd className="howToText">가벼운 무게감의 세럼</dd>
              <dt className="howToTitle">향</dt>
              <dd className="howToText">마일드, 플로럴</dd>
            </dl>
          </div>
        </div>
      </div>
      <Slider />
    </div>
  );
};

export default ProductDetail;
