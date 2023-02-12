import { FilterData } from '../Data/FilterData';
import './FilterModal.scss';

export default function FilterModal({ onChange }) {
  return (
    <div className="filter-box">
      {FilterData.map(category => (
        <div className="filter-checkbox" key={category.id}>
          <h3 className="filter-title">{category.category}</h3>
          {category.subcategory.map(subcategory => (
            <div className="checkbox-wrapper" key={subcategory.id}>
              <input
                id={subcategory.title}
                type="checkbox"
                onChange={onChange}
                value={subcategory.title}
                className="checkbox"
                name={subcategory.title}
              />
              <label htmlFor={subcategory.title} className="checkbox">
                {subcategory.title}
              </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}