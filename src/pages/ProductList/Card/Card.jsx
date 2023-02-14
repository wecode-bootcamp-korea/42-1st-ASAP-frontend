import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoadingButton from '../LoadingButton/LoadingButton';
import './Card.scss';

export default function Card({ cardData }) {
  const [inputValue, setInputValue] = useState();
  const [sizeChoice, setSizeChoice] = useState();
  const [loading, setLoading] = useState(false);

  const cartLoading = e => {
    setLoading(true);
  };

  const handleChangeValue = event => {
    const { value, id } = event.target;
    setSizeChoice(id);
    setInputValue(value);
  };

  useEffect(() => {
    if (loading)
      fetch('http://10.58.52.78:3000/orders/carts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          userId: 1,
          productOptionId: inputValue,
          quantity: 1,
        }),
      })
        .then(res => res.json())
        .then(data => {
          setInputValue(data);
        })
        .finally(() => {
          setLoading(false);
        });
  }, [loading]);

  const price = cardData.options[0].price;

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
            {cardData.options.map((element, index) => (
              <label className="radio-label" key={index}>
                <input
                  id={element.size}
                  type="radio"
                  name={element.product_options_id}
                  value={element.product_options_id}
                  onChange={handleChangeValue}
                  checked={index === 0 && 'checked'}
                />
                {element.size}
              </label>
            ))}
          </div>
        </div>
      </div>
      <ul className="product-detail-box">
        <li className="product-detail">
          <span className="texture">사용감</span>
          <span className="texture-feeling">
            {cardData.feeling_of_use.map(element => (
              <span key={element} className="feeling">
                {element}
              </span>
            ))}
          </span>
        </li>
        <li className="product-detail">
          <span className="texture">향</span>
          <span className="texture-feeling">
            {cardData.scents.map(element => (
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
          {cardData.options
            .filter(el => el.id === inputValue || el.size === sizeChoice)[0]
            ?.price.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </button>
      )}
    </div>
  );
}
