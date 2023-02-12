import { useNavigate } from 'react-router-dom';
import { productListData } from '../Data/ProductListData';
import './FilterNav.scss';

export default function FilterNav({ onChange }) {
  const navigate = useNavigate();

  const onClick = list => {
    if (list === '핸드') {
      return navigate('/hand-list');
    } else if (list === '바디') {
      return navigate('/body-list');
    } else if (list === '모든 바디 & 핸드') {
      return navigate('/product-list');
    }
  };
  return (
    <nav className="filter-nav">
      <ul className="filter-nav-list">
        {productListData.map(productListData => (
          <button
            className="filter-nav-button"
            type="button"
            key={productListData.id}
            onClick={() => onClick(productListData.prductList)}
          >
            <li className="navbarList">{productListData.prductList}</li>
          </button>
        ))}
      </ul>
    </nav>
  );
}
