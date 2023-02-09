import { Link } from 'react-router-dom';

import './Card.scss';

export default function Card({ cardList }) {
  return (
    <div className="h-product-wrapper">
      <div key={cardList.id}>
        <div className="product">
          <Link className="product-detail-link" to="/product-detail">
            <img
              className="hand-product"
              src={cardList.img_url}
              alt="hand-product-img"
            />
          </Link>
          <div className="title-wrapper">
            <h3 className="title-name">{cardList.name}</h3>
            <p className="size">{cardList.price}</p>
            <div className="radio-box">
              <input type="radio" name="product-size" value="small-size" />
              <label className="radio-label">{cardList.size}</label>
              <input type="radio" name="product-size" value="oversize" />
              <label>{cardList.oversize}</label>
            </div>
          </div>
        </div>
        <ul className="product-detail-box">
          <li className="product-detail">
            <span className="texture">사용감</span>
            <span className="texture-feeling">{cardList.description}</span>
          </li>
          <li className="product-detail">
            <span className="texture">향</span>
            <span className="texture-feeling">{cardList.scent}</span>
          </li>
        </ul>
        <button className="add-cart" type="button">
          카트에 추가 -￦47,000
        </button>
      </div>
    </div>
  );
}
