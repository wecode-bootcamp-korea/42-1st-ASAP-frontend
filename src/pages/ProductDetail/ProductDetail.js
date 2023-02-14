import React, { useState, useEffect } from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import Slider from '../../components/Slider/Slider';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [detailData, setDetailData] = useState([]);
  const [optionState, setOptionState] = useState(true);
  // const [sizeArr, setSizeArr] = useState([]);

  useEffect(() => {
    fetch('/data/detailData.json')
      .then(res => res.json())
      .then(data => setDetailData(data.data[0]));
  }, []);

  // useEffect(() => {
  //   fetch('http://10.58.52.169:3000/products/detail/5')
  //     .then(res => res.json())
  //     .then(data => setDetailData(data.data[0]));
  // }, []);

  const sizeChoice = '';

  const onChangeOption = () => setOptionState(prev => !prev);

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
                src={detailData.image_url}
              />
            </div>
          </div>
          <div className="topRight">
            <div className="detailWrapper">
              <ul className="categoryList">
                <li>
                  <a className="category_a">{detailData.main_category}</a>
                </li>
                <li className="categoryDot">
                  <a className="category_b">{detailData.sub_category}</a>
                </li>
              </ul>
              <h2 className="productName">{detailData.name}</h2>
              <div className="productDetail">
                <p>{detailData.description}</p>
              </div>
              <div className="descriptionWrapper">
                <dl className="textLists">
                  <dt>사용감</dt>
                  <dd>
                    {detailData.feeling_of_use &&
                      detailData.feeling_of_use.join(', ')}
                  </dd>
                  <dt>향</dt>
                  <dd>{detailData.scents && detailData.scents.join(', ')}</dd>
                  <dt>주요 성분</dt>
                  <dd>{detailData.main_ingredient}</dd>
                  <dt>사이즈</dt>
                  <dd className="radioBoxContainer">
                    <div className="RadioBox">
                      <input
                        type="radio"
                        id="option01"
                        name="sizeText"
                        className="radioBtn"
                        onChange={onChangeOption}
                        checked={optionState === true}
                      />
                      <label for="option01">
                        {detailData.options && detailData.options[0].size}
                      </label>

                      <input
                        type="radio"
                        id="option02"
                        name="sizeText"
                        className="radioBtn"
                        onChange={onChangeOption}
                      />
                      <label for="option02">
                        {detailData.options && detailData.options[1].size}
                      </label>
                    </div>
                  </dd>
                  <dd className="radioBoxContainer" />
                </dl>
              </div>
              <button className="addCart">
                <span>
                  카트에 추가하기&nbsp;-&nbsp;₩
                  {optionState
                    ? detailData.options && detailData.options[0].price
                    : detailData.options && detailData.options[1].price}
                </span>
              </button>
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
              {detailData.guides && detailData.guides[0].usage_description}
            </p>

            <dl className="howToBox">
              <dt className="howToTitle">사용량</dt>
              <dd className="howToText">
                {detailData.guides && detailData.guides[0].usage_amount}
              </dd>
              <dt className="howToTitle">텍스처</dt>
              <dd className="howToText">
                {detailData.guides && detailData.guides[0].texture}
              </dd>
              <dt className="howToTitle">질감</dt>
              <dd className="howToText">{detailData.formulation}</dd>
            </dl>
          </div>
        </div>
      </div>
      <Slider />
    </div>
  );
};

export default ProductDetail;
