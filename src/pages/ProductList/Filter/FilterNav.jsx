import React, { useState } from 'react';
import { productListData } from '../Data/ProductData';
import FilterModal from '../Filter/FilterModal';
import './FilterNav.scss';

export default function FilterNav() {
  const [isModal, setIsModal] = useState(false);
  const ModalHandler = () => {
    setIsModal(prev => !prev);
  };

  return (
    <div>
      <div className="filter-wrapper">
        <div className="filter-nav">
          <ul className="filter-nav-list">
            <span>
              <button className="filter-nav-button" type="button">
                모든 바디 & 핸드
              </button>
            </span>
            {productListData.map(productListData => (
              <button
                className="filter-nav-button"
                type="button"
                key={productListData.id}
              >
                <li>{productListData.prductList}</li>
              </button>
            ))}
          </ul>
          <div className="filter-arrow-wrapper">
            <button
              className={
                isModal
                  ? 'filter-button filter-button-open'
                  : 'filter-button filter-button-close'
              }
              type="button"
              onClick={ModalHandler}
            >
              필터
              <img
                className="filter-arrow"
                src="./images/arrow.png"
                alt="filter-arrow"
              />
            </button>
          </div>
        </div>
      </div>
      {isModal && <FilterModal setIsModal={setIsModal} />}
    </div>
  );
}
