import React from 'react';
import { BodyFilterData } from '../Data/BodyFilterData';
import './BodyFilter.scss';

export default function BodyFilter({ onChange }) {
  return (
    <div className="filter-box">
      {BodyFilterData.map(category => (
        <div className="filter-checkbox" key={category.id}>
          <h3 className="filter-title">{category.category}</h3>
          {category.subcategory.map(subcategory => (
            <div className="checkbox-wrapper" key={subcategory.id}>
              <label className="checkbox">
                <input
                  id={subcategory.title}
                  type="checkbox"
                  onChange={e => onChange(e, category.category)}
                  value={subcategory.title}
                  className="checkbox"
                  name={subcategory.title}
                />
                {subcategory.title}
              </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
