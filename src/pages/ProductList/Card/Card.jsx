import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoadingButton from '../LoadingButton/LoadingButton';
import './Card.scss';

export default function HandCard({ cardData }) {
  const [inputValue, setInputValue] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading)
      fetch('./data/ProductData.json')
        .then(res => res.json())
        .then(data => {
          setInputValue(data);
        })
        .finally(() => {
          setLoading(false);
        });
  }, [loading]);

  const cartLoading = e => {
    setLoading(true);
  };

  const handleChangeValue = event => {
    const { value } = event.target;
    setInputValue(value);
  };

  const price = JSON.parse(cardData.options)[0].price;

  return (
    <div className="h-product-wrapper">
      <div className="product">
        <Link className="product-detail-link" to="/product-detail">
          <img
            className="hand-product"
            src={cardData.image_url}
            alt="hand-product-img"
          />
        </Link>
        <div className="title-wrapper">
          <h3 className="title-name">{cardData.name}</h3>
          <p className="size">
            2 사이즈 / ￦&nbsp;
            {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원 부터
          </p>
          <div className="radio-box">
            {JSON.parse(cardData.options).map((element, index) => (
              <>
                <input
                  id={element.size}
                  type="radio"
                  name="options"
                  value={element.size}
                  onChange={handleChangeValue}
                  defaultChecked={index === 0}
                />
                <label
                  className="radio-label"
                  key={index}
                  htmlFor={element.size}
                >
                  {element.size}
                </label>
              </>
            ))}
          </div>
        </div>
      </div>
      <ul className="product-detail-box">
        <li className="product-detail">
          <span className="texture">사용감</span>
          <span className="texture-feeling">
            {JSON.parse(cardData.feeling_of_use).map(element => (
              <span key={element} className="feeling">
                {element}
              </span>
            ))}
          </span>
        </li>
        <li className="product-detail">
          <span className="texture">향</span>
          <span className="texture-feeling">
            {JSON.parse(cardData.scents).map(element => (
              <span key={element} className="feeling">
                {element}
              </span>
            ))}
          </span>
        </li>
      </ul>
      {loading ? (
        <LoadingButton />
      ) : (
        <button className="add-cart" type="button" onClick={cartLoading}>
          카트에 추가 – ￦&nbsp;
          {JSON.parse(cardData.options)
            .filter(el => el.size === inputValue)[0]
            ?.price.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </button>
      )}
    </div>
  );
}
