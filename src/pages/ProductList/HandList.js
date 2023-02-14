import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import FilterNav from './FilterNav';
import HandFilter from './Filter/HandFilter';
import HandProductList from './HandProductList/HandProductList';
import FilterButton from './FilterButton/FilterButton';
import './HandList.scss';

export default function HandList() {
  const [handCardList, setHandCardList] = useState([]);
  const [scent, setScent] = useState('');
  const [price, setPrice] = useState('');
  const [formulation, setFormulation] = useState('');
  // console.log(scent, price, formulation);
  const [isModal, setIsModal] = useState(false);

  const ModalHandler = () => {
    setIsModal(prev => !prev);
  };

  // useEffect(() => {
  //   fetch('http://10.58.52.78:3000/products/2/12', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setHandCardList(data.data);
  //     });
  // }, []);

  useEffect(() => {
    fetch(
      `http://10.58.52.78/products/2/12?formulation=${formulation}&scent=${scent}&price${price}`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(data => {
        //
        setHandCardList(data.data);
      });
  }, [scent, formulation, price]);

  useEffect(() => {
    fetch('./data/MockData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setHandCardList(data.data);
      });
  }, []);

  const onChange = (e, category) => {
    if (category === '아로마')
      setScent(prev => (prev === e.target.value ? '' : e.target.value));
    else if (category === '가격 범위')
      setPrice(prev => (prev === e.target.value ? '' : e.target.value));
    else if (category === '제형 타입')
      setFormulation(prev => (prev === e.target.value ? '' : e.target.value));
  };

  return (
    <>
      <section className="hand-body">
        <img className="logo" src="./images/asaplogo.png" alt="logo-img" />
        <h1 className="title">핸드</h1>
        <FilterNav onChange={onChange} />
        {isModal && <HandFilter setIsModal={setIsModal} onChange={onChange} />}
        <FilterButton ModalHandler={ModalHandler} isModal={isModal} />
        <HandProductList handCardList={handCardList} />
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
