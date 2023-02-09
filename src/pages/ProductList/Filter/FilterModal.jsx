import { scentListData } from '../Data/ScentData';
import { priceListData } from '../Data/PriceData';
import { typeListData } from '../Data/TypeData';
import './FilterModal.scss';
import { useState } from 'react';

export default function FilterModal() {
  const [checkedList, setcheckedList] = useState([]);

  const oncheckedElment = (checked, item) => {
    if (checked) {
      setcheckedList([...checkedList, item]);
    } else if (!checked) {
      setcheckedList(checkedList.filter(el => el !== item));
    }
  };

  return (
    <div className="filter-box">
      <div className="filter-checkbox">
        <h3 className="filter-title">아로마</h3>
        {scentListData.map(scentListData => (
          <div className="checkbox-wrapper" key={scentListData.id}>
            <input
              type="checkbox"
              onChange={oncheckedElment}
              value={scentListData.data}
            />
            <label className="product-name">{scentListData.scent}</label>
          </div>
        ))}
      </div>
      <div className="filter-checkbox">
        <h3 className="filter-title">가격 범위</h3>
        {priceListData.map(priceListData => (
          <div className="checkbox-wrapper" key={priceListData.id}>
            <input type="checkbox" onChange={oncheckedElment} />
            <label className="product-name">{priceListData.price}</label>
          </div>
        ))}
      </div>
      <div className="filter-checkbox">
        <h3 className="filter-title">제형 타입</h3>
        {typeListData.map(typeListData => (
          <div className="checkbox-wrapper" key={typeListData.id}>
            <input
              className="checkbox"
              type="checkbox"
              onChange={oncheckedElment}
            />
            <label className="product-name">{typeListData.type}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
