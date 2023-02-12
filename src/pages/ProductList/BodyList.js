import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import FilterNav from './Filter/FilterNav';
import FilterModal from './Filter/FilterModal';
import BodyProductList from './BodyProductList/BodyProductList';
import FilterButton from './FilterButton/FilterButton';
import './BodyList.scss';

export default function BodyList() {
  const [BodycardList, setBodyCardList] = useState([]);
  const [checkdeValues, setCheckdeValues] = useState(null);
  const [isModal, setIsModal] = useState(false);

  const ModalHandler = () => {
    setIsModal(prev => !prev);
  };

  useEffect(() => {
    fetch('./data/ProductData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setBodyCardList(data);
      });
  }, []);

  const onChange = e => {
    setCheckdeValues(e.target.value);
  };

  return (
    <>
      <section className="body-body">
        <img className="logo" src="./images/asaplogo.png" alt="logo-img" />
        <h1 className="title">바디</h1>
        <FilterNav onChange={onChange} />
        {isModal && <FilterModal setIsModal={setIsModal} onChange={onChange} />}
        <FilterButton ModalHandler={ModalHandler} />
        <BodyProductList
          BodycardList={BodycardList}
          checkdeValues={checkdeValues}
        />
      </section>
      <section className="present-body">
        <div className="present-wrapper">
          <h1 className="title">기프트 파인더</h1>
          <p className="title-box">
            기프트 파인더가 편안하게 선물을 찾을 수 있도록 받는 대상, 제품의
            기능, 가격대 별로 제품을 살펴볼 수 있는 기회를 선사합니다.
          </p>
          <Link className="present" to="/">
            기프트 파인더 보기
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