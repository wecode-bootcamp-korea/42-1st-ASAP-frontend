import { Link } from 'react-router-dom';
import './BodyProduct.scss';

export default function BodyProduct({ BodyData }) {
  return (
    <div className="product-wrapper">
      {BodyData.map(bodyListData => (
        <div className="product-box" key={bodyListData.id}>
          <Link className="button" to="/Product-Detail">
            <img
              className="product-photo"
              src={bodyListData.image_url}
              alt="product-img"
            />
            <div className="description">
              <h3 className="description-title">{bodyListData.name}</h3>
              <span>{bodyListData.price}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
